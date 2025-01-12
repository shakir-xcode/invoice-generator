// import { NextResponse } from "next/server"
import formidable from "formidable";
import fs from "fs/promises";
import path from "path";

// import { connect } from "@/lib/database/db";
// import Category from "@/lib/database/models/category";
// import User from "@/lib/database/models/user";
// import { Types } from "mongoose";
// const ObjectId = require("mongoose").Types.ObjectId;

export const config = {
    api: {
        bodyParser: false, // Disable Next.js body parsing for formidable
    },
};

export async function POST(req) {
    // Create an instance of formidable
    const form = formidable({
        uploadDir: path.join(process.cwd(), "public/uploads"), // Set upload directory
        keepExtensions: true, // Keep file extensions
        multiples: false, // Allow multiple files (set true if needed)
    });

    // Ensure the upload directory exists
    await fs.mkdir(form.uploadDir, { recursive: true });

    return new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error("Error parsing the form:", err);
                return resolve(
                    new Response(JSON.stringify({ error: "Form parsing error" }), {
                        status: 500,
                        headers: { "Content-Type": "application/json" },
                    })
                );
            }

            try {
                // Extract JSON data from fields
                const jsonData = JSON.parse(fields.data);

                // Handle file upload
                const uploadedFile = files.file;
                const newFilePath = path.join(form.uploadDir, uploadedFile.originalFilename);

                // Rename file to retain original name
                await fs.rename(uploadedFile.filepath, newFilePath);

                resolve(
                    new Response(
                        JSON.stringify({
                            message: "Upload successful",
                            filePath: `/uploads/${uploadedFile.originalFilename}`,
                            data: jsonData,
                        }),
                        {
                            status: 200,
                            headers: { "Content-Type": "application/json" },
                        }
                    )
                );
            } catch (error) {
                console.error("Error handling upload:", error);
                resolve(
                    new Response(JSON.stringify({ error: "Upload handling error" }), {
                        status: 500,
                        headers: { "Content-Type": "application/json" },
                    })
                );
            }
        });
    });
}
