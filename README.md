# Real Estate Calculator

Calculate return on investment (ROI) for any Real Estate investment property - useful for real estate agents and investors

## Development

- This project uses [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)
- Install dependencies

  ```sh
  npm install
  ```

- Run the project

  ```sh
  npm run dev
  ```

- Go to [Google Chrome Extension](chrome://extensions/) dashboard and activate  `Developer Mode`.
- Click `Load Unpacked` button and point it to `/dist` folder, the extension will be hot reload on code changes.

## Build Extension

- After installing dependencies, build the project

  ```sh
  npm run build
  ```

- Uncompressed build can be found in `/dist` folder, compressed build is `roicalculator.zip`
- Go to Chrome Extensions page and activate the Developer Mode.
- Click `Load Unpacked` button and point it to `/dist` folder.
