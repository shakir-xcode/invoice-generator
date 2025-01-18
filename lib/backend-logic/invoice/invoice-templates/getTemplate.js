import fs from "fs";


export const getTemplate = templateId => {
    const templatePath = process.cwd() + `/lib/backend-logic/invoice/invoice-templates/template_${templateId || 1}`;

    try {
        const html = fs.readFileSync(`${templatePath}/template.html`, 'utf-8');
        let products_template = fs.readFileSync(`${templatePath}/products_template.html`, 'utf-8');
        const css = fs.readFileSync(`${templatePath}/style.css`, "utf-8");

        return [html, css, products_template];
    } catch (error) {
        throw new Error(error.message);
    }
}
