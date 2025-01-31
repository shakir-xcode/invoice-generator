import { NextResponse } from "next/server";
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

        // // Send the PDF for download
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