// ─────────────────────────────────────────────
//  COMMISSION CALENDAR — CONFIGURATION
//  Update SHEET_URL with your published Google
//  Sheet CSV link, then push to GitHub.
// ─────────────────────────────────────────────

const CONFIG = {
  // Paste your published Google Sheet CSV URL here
  // File → Share → Publish to web → Select sheet → CSV → Publish
  SHEET_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOMQ5L9Xd3KIX8sRhxHVCHj8Vm1JZtBgXCgXO1cHTFNUrwX97V7aVnegxiUIUF531GgpqAy8zU8WAA/pub?gid=676233885&single=true&output=csv",

  // Payment windows in CALENDAR DAYS after effective date
  TRANS_DAYS:      5,
  ETHOS_DAYS:      9,
  MUTUAL_DAYS:     8,
  BALT_DAYS:       7,   // then next Wed or Sat
  COREBRIDGE_DAYS: 14,

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
