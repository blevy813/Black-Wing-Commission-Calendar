# Black Wing Commission Calendar

Live commission payment calendar for Transamerica, Ethos/Trustage, Mutual of Omaha, Baltimore Life, and Corebridge policies.

## Live URL

https://blevy813.github.io/Black-Wing-Commission-Calendar

## How it works

- Reads live data from your Google Sheet (published as CSV)
- Auto-refreshes every 5 minutes
- Weekend payments automatically roll to the following Monday
- Baltimore Life payments land on the next Wednesday or Saturday after the window

## Payment Windows

| Carrier | Days After Effective Date |
|---|---|
| Transamerica | 5 days |
| Ethos / Trustage | 9 days |
| Mutual of Omaha | 8 days |
| Baltimore Life | 7 days → next Wed or Sat |
| Corebridge | 14 days |

## Google Sheet Setup

Your sheet must have these column headers (row 1):
- `Insurance Provider`
- `Effective Date`
- `Annual Premium`
- `Agent Name`
- `Policy Number`

Publish your sheet: **File → Share → Publish to web → Select tab → CSV → Publish** and paste the URL into `config.js`.

## Updating the Sheet URL

Open `config.js` and update the `SHEET_URL` value with your new published CSV link.

## Carrier Color Legend

- 🔴 Transamerica — Red
- 🟢 Ethos / Trustage — Green
- 🔵 Mutual of Omaha — Blue
- 🩷 Baltimore Life — Pink
- 🟠 Corebridge — Orange
