# Changelog Newsletter Latest Redirector

Minimal Vercel app that automatically redirects to the latest Changelog newsletter.

## How it works

1. Fetches `https://changelog.com/news/`
2. Extracts the iframe src containing the latest newsletter
3. Redirects to the newsletter URL with no-cache headers

## Usage

Deploy to Vercel, then visit your app URL to automatically redirect to the latest newsletter.

## Local Development

```bash
vercel dev
```

Visit `http://localhost:3000`

## Deploy

```bash
vercel
```

## License

MIT
