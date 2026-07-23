import type { APIRoute } from "astro";

const CONTACT_RECIPIENT = "s.subham58@gmail.com";
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
    return redirect(`/contact?error=${encodeURIComponent("Couldn't send your message. Try again in a moment.")}`);
  }

  return redirect(`/contact?notice=${encodeURIComponent("Message sent — we'll get back to you soon.")}`);
};
