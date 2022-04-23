const AppInfo = require("./app.json");

module.exports = {
  name: "Real Estate ROI Calculator DEV",
  description: "Calculate return on investment (ROI) for any Real Estate investment property - useful for real estate agents and investors",
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
  // background: {
  //   scripts: ["background.js"],
  // },
  // content_scripts: [
  //   {
  //     matches: ["file://*/*", "http://*/*", "https://*/*"],
  //     js: ["content-script.js"],
  //     run_at: "document_start",
  //     all_frames: true,
  //   },
  // ],
  manifest_version: 3,
  // content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
  "content_security_policy": {
    "extension_pages": "script-src 'self'; object-src 'self'",
  },
  web_accessible_resources: [],
};