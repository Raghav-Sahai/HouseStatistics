const AppInfo = require("./app.json");

module.exports = {
  manifest_version: 3,
  name: "HouseStatistics DEV",
  description: "Calculate rental property metrics for any real estate investment property - useful for real estate agents and investors",
  author: "Raghav",
  version: AppInfo.version,
  icons: {
    16: "icons/16.png",
    32: "icons/32.png",
    48: "icons/48.png",
    128: "icons/128.png",
  },
  permissions: [],
  action: {
    default_icon: {
      16: "icons/16.png",
      32: "icons/32.png",
      48: "icons/48.png",
      128: "icons/128.png",
  },
    default_title: "Real Estate ROI Calculator",
    default_popup: "popup.html",
  },
  "content_security_policy": {
    "extension_pages": "script-src 'self'; object-src 'self'",
  },
  "content_scripts": [
    {
      "matches": ["https://*.zillow.com/homedetails/*"],
      "js": ["content.js"],
      "run_at": "document_end",
    }
  ],
  web_accessible_resources: [],
};