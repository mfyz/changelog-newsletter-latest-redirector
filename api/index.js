export default async function handler(req, res) {
  try {
    // Fetch the changelog news page
    const response = await fetch('https://changelog.com/news/');
    const html = await response.text();

    // Extract iframe src using regex
    const match = html.match(/src="(\/news\/\d+\/email)"/);

    if (!match || !match[1]) {
      return res.status(500).json({ error: 'Could not find newsletter iframe' });
    }

    // Construct full URL
    const newsletterUrl = `https://changelog.com${match[1]}`;

    // Redirect with no-cache headers
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.redirect(302, newsletterUrl);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch newsletter', details: error.message });
  }
}
