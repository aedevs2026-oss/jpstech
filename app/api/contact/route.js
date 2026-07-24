import { company } from "@/lib/company";

/**
 * Contact form API stub.
 * TODO: plug a real email service (e.g. Resend) here before production.
 * Example:
 *   await resend.emails.send({ from, to, subject, text })
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body || {};

    if (!name || !phone || !subject || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Stub: log enquiry for development / serverless logs
    console.log("[contact enquiry]", {
      to: company.email,
      name,
      phone,
      email,
      subject,
      message,
      receivedAt: new Date().toISOString(),
    });

    return Response.json({
      ok: true,
      message: "Enquiry received. We will contact you shortly.",
    });
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
