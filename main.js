const {app, BrowserWindow, autoUpdater} = require('electron')

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height:800
    })

    mainWindow.loadURL(`file://${__dirname}/src/views/index.html`)
})