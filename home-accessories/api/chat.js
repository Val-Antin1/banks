// Example serverless endpoint for Vercel / Netlify (node 18+ compatible)
// This file must NOT contain your real API key. Set the key in the
// deployment environment as OPENAI_API_KEY.

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY
  if (!OPENAI_API_KEY) return res.status(500).json({ error: 'OPENAI_API_KEY not set on server' })

  const body = req.body
  const message = body?.message || ''

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        max_tokens: 600,
      }),
    })

    if (!openaiRes.ok) {
      const text = await openaiRes.text()
      return res.status(openaiRes.status).send(text)
    }

    const data = await openaiRes.json()
    const reply = data?.choices?.[0]?.message?.content || ''
    return res.json({ reply })
  } catch (err) {
    return res.status(500).json({ error: String(err) })
  }
}
