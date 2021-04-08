import axios from 'axios'

export default async (req, res) => {
  const url = `https://graph.instagram.com/me/media?fields=permalink,media_url&access_token=${process.env.TOKEN}`;
  try {
    const igs = await axios.get(url);
    const data = JSON.stringify(igs.data.data);
    res.statusCode = 200;
    res.json(data);
  } catch (error) {
    res.statusCode = 500;
    res.json(error);
  }
}

