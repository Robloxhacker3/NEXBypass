export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed, use POST' });
  }

  const { apiKey, arcuesLink } = req.body || {};

  if (!apiKey || !arcuesLink) {
    return res.status(400).json({ error: 'Missing apiKey or arcuesLink in body' });
  }

  // TODO: validate apiKey here (check DB/file in real app)
  // For demo, assume any apiKey is valid

  // Example bypass logic
  if (arcuesLink.includes('linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing')) {
    return res.status(200).json({ result: 'https://lootdest.com/s?qljL' });
  } else if (arcuesLink.includes('spdmteam.com/key-system-2?hwid=')) {
    return res.status(200).json({ result: 'https://loot-link.com/s?mYit' });
  } else if (arcuesLink.includes('spdmteam.com/key-system-3?hwid=')) {
    return res.status(200).json({ result: 'https://loot-link.com/s?qlbU' });
  } else {
    return res.status(400).json({ error: 'Unsupported link' });
  }
}
