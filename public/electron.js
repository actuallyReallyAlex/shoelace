const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Sentry = require("@sentry/electron");
const path = require("path");
const isDev = require("electron-is-dev");

Sentry.init({
  dsn: "https://ca90b4c2c1994213bdda770526223c2a@sentry.io/1785274"
});

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: { nodeIntegration: true }
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// const electron = require("electron");
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

// const path = require("path");
// const isDev = require("electron-is-dev");

// let mainWindow;

// function createWindow() {
//   mainWindow = new BrowserWindow({ width: 900, height: 680 });
//   mainWindow.loadURL(
//     isDev
//       ? "http://localhost:3000"
//       : `file://${path.join(__dirname, "../build/index.html")}`
//   );
//   if (isDev) {
//     // Open the DevTools.
//     //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
//     mainWindow.webContents.openDevTools();
//   }
//   mainWindow.on("closed", () => (mainWindow = null));
// }

// app.on("ready", createWindow);

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   if (mainWindow === null) {
//     createWindow();
//   }
// });

// // const { app, BrowserWindow } = require("electron");

// // // const environment = 'DEV'
// // const environment = process.env.REACT_APP_ENVIRONMENT;

// // let win;

// // const createWindow = () => {
// //   console.log("ENVIRONMENT = ", environment);
// //   // Create the browser window.
// //   win = new BrowserWindow({ width: 800, height: 600 });
// //   win.loadURL(
// //     environment === "DEV"
// //       ? "http://localhost:3000"
// //       : `file://${__dirname}/../build/index.html`
// //   );

// //   // Open the DevTools.
// //   win.webContents.openDevTools();

// //   // Emitted when the window is closed.
// //   win.on("closed", () => {
// //     win = null;
// //   });
// // };

// // app.on("ready", createWindow);
