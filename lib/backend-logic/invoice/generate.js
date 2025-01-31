import puppeteer from 'puppeteer';
import puppeteerCore from 'puppeteer-core';
import chromium from '@sparticuz/chromium-min';
import { getTemplate } from "./invoice-templates/getTemplate";
import fs from "fs";


const fillDataTemplate = async (invoiceData, logo = null) => {
    const [htmlData, css, products_template] = getTemplate(invoiceData?.templateId || 1);
    let html = htmlData;

    // set Logo conditionally
    if (logo && logo?.type) {
        const buffer = Buffer.from(await logo.arrayBuffer());
        const base64Image = buffer.toString('base64');
        const imageUrl = `data:image/${logo.type};base64,${base64Image}`;
        html = html.replace(
            "<img/>",
            `<img src='${imageUrl}' alt='logo' class=' object-cover ' style="max-width:46px; max-height:46px;"/>`
        );
    } else {
        const image = fs.readFileSync(`${process.cwd()}/public/images/invoice-icon-light.png`);
        const base64 = `data:image/png;base64,${image.toString("base64")}`;
        html = html.replace(
            "<img/>",
            `<img src='${base64}' alt='logo' class=' object-cover ' style="max-width:36px; max-height:36px;"/>`
        );
    }

    let productsTemplateData = products_template;
    //Set data
    const keys = Object.keys(invoiceData);
    keys.forEach(key => {
        if (key !== 'products' && key !== 'currency')
            html = html.replace(`#${key}`, invoiceData[key] || "");
    })

    // create product rows
    let rows = ``;

    invoiceData.products.forEach((product, index) => {
        let tempRow = productsTemplateData.replace('#sl', `${product?.sl || index + 1}`)
            .replace('#description', `${product?.description || ''}`)
            .replace('#rate', `${product?.rate || ''}`)
            .replace('#quantity', `${product?.quantity || ''}`)
            .replace('#amount', `${product?.amount || ''}`)

        rows += tempRow
    })

    // set rows in template
    html = html.replace(`#products`, rows);

    // Set currency symbol
    html = html.replaceAll('#currency', invoiceData.currency.split('_')[1]);

    // Inject CSS into HTML
    html = html.replace(
        "</head>",
        `<style>${css}</style></head>`
    );

    return html;
}


export const generatePdf = async (data, logo) => {
    if (!data) throw new Error('Invalid data');

    try {
        const html = await fillDataTemplate(data, logo);
        let browser;
        if (process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production') {
            // Configure the version based on your package.json (for your future usage).
            const executablePath = await chromium.executablePath('https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar')
            browser = await puppeteerCore.launch({
                executablePath,
                // You can pass other configs as required
                args: chromium.args,
                headless: chromium.headless,
                defaultViewport: chromium.defaultViewport
            })
        } else {
            browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            })
        }
        const page = await browser.newPage();

        // Set content with inlined CSS
        await page.setContent(html, { waitUntil: 'networkidle0' });

        // Generate PDF
        const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
        await browser.close();
        return pdfBuffer;

    } catch (error) {
        console.error('INVOICE generation error:', error);
        throw new Error(error.message);
    }
}
