const {app, BrowserWindow, autoUpdater} = require('electron')

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({})

    mainWindow.loadURL(`file://${__dirname}/src/views/index.html`)
})