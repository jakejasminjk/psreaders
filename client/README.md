# PSReader Chrome Extension

![build](https://github.com/chibat/chrome-extension-typescript-starter/workflows/build/badge.svg)

Chrome Extension, TypeScript and Visual Studio Code

## Prerequisites

- [node + npm](https://nodejs.org/) (Current Version)

## Option

- [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

- TypeScript
- Webpack
- React
- Jest
- Example Code
  - Chrome Storage
  - Options Version 2
  - content script
  - count up badge number
  - background

## Project Structure

- src/bootstrap: Exported files that the chrome extension `manifest.json` references
- src/components: Extension component files
- src/config: Extension configuration to use mockAPI or actual API for local development
- src/context: Global context for passing API response down the application
- src/stories: Storybook stories for components
- src/utils: Utilities functions for certain functionalities of the extension
- src/App.tsx: Root component of the Chrome Extension
- dist: Chrome Extension directory
- dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

## Installing the Chrome Extension

Follow these steps to install the PSReader Chrome Extension on your Google Chrome browser:

1. **Build the Extension:**

   Before installing, make sure to build the extension by running the following command:

   ```bash
   npm run build
   ```

2. **Load the Extension:**

    Once the build process is complete, navigate to the dist directory in your project and load the extension into Chrome:

    Open Google Chrome.
    Visit chrome://extensions/ in the address bar.

3. **Enable Developer Mode::**

    Ensure that the "Developer mode" toggle in the top-right corner is turned on.

4. **Load Unpacked:**

    Click on the "Load unpacked" button.

5. **Select the `dist` Directory:**

    A file dialog will appear. Navigate to the `dist` directory within your project and select it.

6. **Confirm Installation:**

    After loading the extension, you should see the PSReader Chrome Extension listed among your installed extensions.

7. **Verify Extension:**

    Navigate to a website or use the extension in the intended context to ensure it functions as expected.


Congratulations! You've successfully installed the PSReader Chrome Extension on your browser. 

## Running Storybook

To visualize and interact with the components used in the PSReader Chrome Extension, you can run the Storybook:

1. **Start Storybook:**

    Run the following command to start the Storybook development server:

    ```bash
    npm run storybook
    ```

2. **Open Storybook in Browser**

    Open your web browser and navigate to http://localhost:6006/ to access the Storybook interface.

3. **Explore Components:**

    Use Storybook to explore and interact with the individual React components used in the extension. This is particularly helpful for development and design purposes.

## Test

`npx jest` or `npm run test`
