// /api/ping-render.js
export default async function handler(req, res) {
  const renderUrl = "https://telegram-login-verify.onrender.com/"; // Replace with your Render project URL
  try {
    const response = await fetch(renderUrl, { method: "GET" });
    const body = await response.text();
    res.status(200).json({ message: "Pinged Render successfully", responseBody: body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
