import type { APIRoute } from "astro";

// Temporary: Resend's sandbox mode only allows sending to the account's own
// address until a domain is verified (convertbrio.com is added in Resend but
// not yet DNS-verified). Switch back to the real inbox once that's done.
const CONTACT_RECIPIENT = "iamxperia502@gmail.com";
const FROM_ADDRESS = "ConvertBrio <onboarding@resend.dev>";

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const subject = String(form.get("subject") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !email || !subject || !message) {
    return redirect(`/contact?error=${encodeURIComponent("Fill in every field before sending.")}`);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return redirect(`/contact?error=${encodeURIComponent("Email sending isn't configured yet. Try again later.")}`);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: CONTACT_RECIPIENT,
      reply_to: email,
      subject: `Contact form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    // Resend's error body (invalid key, unverified domain, etc.) has no
    // other visibility - the user only ever sees a generic message, so
    // this is the only place the real cause is diagnosable.
    console.error("Resend contact email failed:", response.status, await response.text());
    return redirect(`/contact?error=${encodeURIComponent("Couldn't send your message. Try again in a moment.")}`);
  }

  return redirect(`/contact?notice=${encodeURIComponent("Message sent — we'll get back to you soon.")}`);
};
