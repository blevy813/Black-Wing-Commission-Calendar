# Black Wing Commission Calendar

Live commission payment calendar for Transamerica and Ethos/Trustage policies.

## Setup

1. **Fork or clone this repo**
2. **Connect your Google Sheet** — update `SHEET_URL` in `config.js`
3. **Deploy to GitHub Pages** — go to Settings → Pages → Deploy from `main` branch

## How it works

- Reads live data from your Google Sheet (published as CSV)
- Transamerica pays **7 days** after effective date
- Ethos/Trustage pays **21 days** after effective date
- Weekend payments automatically roll to the following Monday
- Refreshes every 5 minutes automatically

## Google Sheet Setup

Your sheet must have these column headers (row 1):
- `Insurance Provider`
- `Effective Date`
- `Annual Premium`
- `Agent Name`
- `Policy Number`

Publish your sheet: **File → Share → Publish to web → CSV format** and paste the URL into `config.js`.
