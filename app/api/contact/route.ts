import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a transporter using your cPanel email SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., mail.hosein.dev or your server hostname
      port: Number(process.env.SMTP_PORT), // usually 465 (SSL) or 587 (TLS)
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your full email address: contact@hosein.dev
        pass: process.env.SMTP_PASS, // your email password
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // sender address (must be your authenticated email)
      to: process.env.RECEIVER_EMAIL, // where you want to receive messages (could be same as SMTP_USER)
      replyTo: email, // so you can reply directly to the visitor
      subject: `New contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
