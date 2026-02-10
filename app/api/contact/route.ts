import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { fullName, email, subject, message } = await request.json();

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const port = Number(process.env.SMTP_PORT) || 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // verify SMTP connection first
    await transporter.verify();

    const sanitizedMessage = message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // IMPORTANT: use domain email only
    const fromEmail = process.env.SMTP_USER;
    const toEmail = process.env.CONTACT_RECEIVER || fromEmail;

    await transporter.sendMail({
      from: `"StartupHQ Website" <${fromEmail}>`,
      to: toEmail,
      replyTo: "",
      subject: `New Website Enquiry: ${subject}`,

      headers: {
        "X-Mailer": "StartupHQ Mailer",
        "X-Priority": "3",
      },

      text: `
New website enquiry

Name: ${fullName}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,

      html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">
        <h2 style="border-bottom:1px solid #eee;padding-bottom:10px">
          New Website Enquiry
        </h2>

        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>

        <div style="margin-top:20px;padding:15px;background:#f5f5f5;border-radius:6px">
          <p style="margin:0;font-weight:bold">Message:</p>
          <p style="white-space:pre-wrap">${sanitizedMessage}</p>
        </div>

        <p style="font-size:12px;color:#888;margin-top:20px">
          Sent from StartupHQ contact form
        </p>
      </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: "Failed to send message",
        details:
          process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 },
    );
  }
}
