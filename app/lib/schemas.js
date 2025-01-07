import { z } from "zod";

const FormSchema = z.object({
    logo: z
        .instanceof(File)
        .refine((file) => file.size <= 2000000, "Image size must be less than 2MB")
        .refine(
            (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
            "Only JPG and PNG images are allowed"
        ),
    company_details: z.string().min(6, {
        message: "Company details must be at least 6 characters.",
    }),
    client_details: z.string().min(6, {
        message: "Client details must be at least 6 characters.",
    }),
    products: z.array(),
    subtotal: z.string(),
    tax: z.string(),
    discount: z.string(),
    shipping: z.string(),
    total: z.string(),
    date: z.string(),
    due_date: z.string(),
    invoice_number: z.string(),
    currency: z.string(),
    terms: z.string(),
    notes: z.string(),
});