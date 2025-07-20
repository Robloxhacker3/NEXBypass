export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed, use POST' });
  }

  // Generate a random API key (32 chars alphanumeric)
  const apiKey = [...Array(32)]
    .map(() => Math.random().toString(36)[2])
    .join('');

  // In a real app, you’d save this key to a database or file
  // For demo, just return it directly

  res.status(200).json({ apiKey });
}
