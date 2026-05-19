export default async function handler(req, res) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  const key = 'download_clicks';

  if (req.method === 'POST') {
    const response = await fetch(`${url}/incr/${key}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    return res.json({ count: data.result });
  }

  // GET
  const response = await fetch(`${url}/get/${key}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  return res.json({ count: data.result || 0 });
}
