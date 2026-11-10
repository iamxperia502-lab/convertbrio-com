import type { APIRoute } from "astro";

const CONTACT_RECIPIENT = "s.subham58@gmail.com";
const FROM_ADDRESS = "ConvertBrio <contact@convertbrio.com>";

type Msg = "fields" | "config" | "send" | "sent";
const MESSAGES: Record<string, Record<Msg, string>> = {
  en: { fields: "Fill in every field before sending.", config: "Email sending isn't configured yet. Try again later.", send: "Couldn't send your message. Try again in a moment.", sent: "Message sent: we'll get back to you soon." },
  pt: { fields: "Preencha todos os campos antes de enviar.", config: "O envio de e-mail ainda não está configurado. Tente novamente mais tarde.", send: "Não foi possível enviar sua mensagem. Tente novamente em instantes.", sent: "Mensagem enviada: responderemos em breve." },
  es: { fields: "Rellena todos los campos antes de enviar.", config: "El envío de correo aún no está configurado. Inténtalo más tarde.", send: "No se pudo enviar tu mensaje. Inténtalo de nuevo en un momento.", sent: "Mensaje enviado: te responderemos pronto." },
  fr: { fields: "Remplissez tous les champs avant d'envoyer.", config: "L'envoi d'e-mails n'est pas encore configuré. Réessayez plus tard.", send: "Impossible d'envoyer votre message. Réessayez dans un instant.", sent: "Message envoyé : nous vous répondrons bientôt." },
  de: { fields: "Bitte füllen Sie alle Felder aus, bevor Sie senden.", config: "Der E-Mail-Versand ist noch nicht eingerichtet. Bitte versuchen Sie es später erneut.", send: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es gleich noch einmal.", sent: "Nachricht gesendet: Wir melden uns bald bei Ihnen." },
  it: { fields: "Compila tutti i campi prima di inviare.", config: "L'invio delle e-mail non è ancora configurato. Riprova più tardi.", send: "Impossibile inviare il messaggio. Riprova tra un momento.", sent: "Messaggio inviato: ti risponderemo presto." },
  id: { fields: "Isi semua kolom sebelum mengirim.", config: "Pengiriman email belum dikonfigurasi. Coba lagi nanti.", send: "Pesan Anda tidak dapat dikirim. Coba lagi sebentar lagi.", sent: "Pesan terkirim: kami akan segera membalas." },
};

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const subject = String(form.get("subject") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const rawLang = String(form.get("lang") ?? "en");
  const lang = rawLang in MESSAGES ? rawLang : "en";
  const back = lang === "en" ? "/contact" : `/${lang}/contact`;
  const msg = MESSAGES[lang];

  if (!name || !email || !subject || !message) {
    return redirect(`${back}?error=${encodeURIComponent(msg.fields)}`);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return redirect(`${back}?error=${encodeURIComponent(msg.config)}`);
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
    return redirect(`${back}?error=${encodeURIComponent(msg.send)}`);
  }

  return redirect(`${back}?notice=${encodeURIComponent(msg.sent)}`);
};
