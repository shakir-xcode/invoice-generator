import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { generatePdf } from "@/lib/backend-logic/invoice/generate";

export const POST = async (req) => {
    try {

        const formData = await req.formData();

        if (!formData) {
            return new NextResponse(
                JSON.stringify({ success: false, message: "Invalid Invoice details" }),
                { status: 400 }
            );
        }

        const logo = formData.get('logo');

        const {
            company_details,
            client_details,
            products,
            subtotal,
            tax,
            tax_value,
            discount,
            shipping,
            total,
            amount_paid,
            balance_due,
            date, due_date,
            invoice_number,
            currency,
            terms,
            notes
        } = Object.fromEntries(formData);

        // Ensure the 'public/uploads' directory exists
        const uploadDir = path.join(process.cwd(), "public/uploads");
        await fs.mkdir(uploadDir, { recursive: true });

        // let extension = null;
        // let logoArrayBuffer = null;

        // if (logo && logo?.name) {

        //     // const fileName = logo.name;
        //     // extension = logo.name.split('.').pop();
        //     // const filePath = path.join(uploadDir, fileName);

        //     // Save the file
        //     // logoArrayBuffer = await logo.arrayBuffer();
        //     // await fs.writeFile(filePath, Buffer.from(logoArrayBuffer));
        // }
        // console.log(company_details,
        //     client_details,
        //     products,
        //     subtotal,
        //     tax,
        //     tax_value,
        //     discount,
        //     shipping,
        //     total,
        //     amount_paid,
        //     balance_due,
        //     date, due_date,
        //     invoice_number,
        //     currency,
        //     terms,
        //     notes,
        //     fileName)
        // console.log("Products: ", JSON.parse(products))


        const pdfBuffer = await generatePdf(
            {
                company_details,
                client_details,
                products: JSON.parse(products),
                subtotal,
                tax,
                tax_value,
                discount,
                shipping,
                total,
                amount_paid,
                balance_due,
                date, due_date,
                invoice_number,
                currency,
                terms,
                notes
            },
            logo
        )

        // Send the PDF for download
        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="invoice.pdf"',
            },
        });

    } catch (error) {
        console.log(error.message)
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: error.message,
            }),
            { status: 500 }
        )
    }


}