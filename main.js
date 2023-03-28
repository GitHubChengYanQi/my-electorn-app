const {app, BrowserWindow, ipcMain,session} = require('electron')
const path = require('path')

let filePath = path.resolve(path.join(__dirname, './lib/preload.js'))
let newMianWindow;
const createMainWindow = (url) => {

    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            preload: filePath,
            contextIsolation: false
        }
    })
    win.webContents.openDevTools()
    win.loadURL(url || 'https://zb.lnwsjktj.com:8080/webPage/esmain/login.do')
    win.once('ready-to-show', () => {
        win.show()
    })

    const filter = {
        urls: ['https://zb.lnwsjktj.com:8080/*']
    }

    session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
        console.log(details)
        callback({ requestHeaders: details.requestHeaders })
    })


    win.webContents.setWindowOpenHandler((details) => {
        newMianWindow = createMainWindow(details.url)
        // ipcMain.removeHandler('getData')
        return {action: 'deny'}
    })


    return win

}

const createActionView = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            preload: filePath,
            contextIsolation: true
        }
    })
    // win.webContents.openDevTools()
    win.loadURL('http://localhost:8001/')

    return win
}


app.whenReady().then(() => {

    const mainWindow = createMainWindow()
    ipcMain.handle('getData', (event, args) => {
        console.log('getData==>', args)
        newMianWindow.webContents.send('post', args)
    })
    const actionWindow = createActionView()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
