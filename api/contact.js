const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return res.status(500).json({ message: "Email service is not configured" });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: "New portfolio contact form message",
        from_name: "Riya Singh Portfolio",
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return res.status(502).json({
        message: result.message || "Failed to send message",
      });
    }

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
}
