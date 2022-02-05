const {app, BrowserWindow, autoUpdater} = require('electron')

let win

app.on('ready', () => {
    win = new BrowserWindow({
        width: 1200,
        height:800,
        show: false
    })
    win.setMenuBarVisibility(false)
    win.once('ready-to-show', () => {
        win.show()
    })

    win.loadURL(`file://${__dirname}/src/views/index.html`)
})