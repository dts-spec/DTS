import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const serviceLabel =
      {
        "remote-teams": "Remote Teams",
        "ai-integration": "AI Integration",
        "custom-development": "Custom Development",
        "virtual-cro": "Virtual CRO",
        "not-sure": "Not sure yet",
      }[service as string] || "Not specified";

    await resend.emails.send({
      from: "DTS Website <noreply@digitaltechnologysolutions.co>",
      to: "joshua@digitaltechnologysolutions.co",
      replyTo: email,
      subject: `New Lead: ${name}${company ? ` from ${company}` : ""} — ${serviceLabel}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6B00; margin-bottom: 24px;">New Contact Form Submission</h2>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 140px; color: #555;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #FF6B00;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">Service Interest</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${serviceLabel}</td>
            </tr>
          </table>

          <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 12px; color: #333; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #999; font-size: 12px;">
            Sent from digitaltechnologysolutions.co contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
