"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function sendEmail(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Simple validation
    if (!name || !email || !message) {
        return { error: "Please fill out all fields." };
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
        return { error: "Email service is not configured. Please contact the administrator." };
    }

    try {
        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // Default testing domain
            to: "mggart39@gmail.com",
            subject: `New Message from ${name}`,
            text: `From: ${name} (${email})\n\nMessage:\n${message}`,
            replyTo: email,
        });

        if (data.error) {
            return { error: data.error.message };
        }

        return { success: "Message sent successfully!" };
    } catch (error) {
        return { error: "Something went wrong. Please try again." };
    }
}
