// ─────────────────────────────────────────────
//  COMMISSION CALENDAR — CONFIGURATION
//  Update SHEET_URL with your published Google
//  Sheet CSV link, then push to GitHub.
// ─────────────────────────────────────────────

const CONFIG = {
  // Paste your published Google Sheet CSV URL here
  // File → Share → Publish to web → Select sheet → CSV → Publish
  SHEET_URL: "YOUR_GOOGLE_SHEET_CSV_URL_HERE",

  // Payment windows in BUSINESS DAYS after effective date (weekends skipped)
  TRANS_BIZ_DAYS:   6,
  ETHOS_BIZ_DAYS:   10,
  MUTUAL_BIZ_DAYS:  8,

  // Auto-refresh interval in milliseconds (default: 5 min)
  REFRESH_INTERVAL: 5 * 60 * 1000,

  // Column header names — update if your sheet uses different names
  COLUMNS: {
    provider:      "Insurance Provider",
    effectiveDate: "Effective Date",
    annualPremium: "Annual Premium",
    agentName:     "Agent Name",
    policyNumber:  "Policy Number",
    status:        "Status",
  }
};
