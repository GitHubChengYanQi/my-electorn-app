const {app, BrowserWindow, ipcMain, session} = require('electron')
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
        urls: ['https://zb.lnwsjktj.com:8080/webPage//ei/client/adddata.do', 'https://zb.lnwsjktj.com:8080/webPage/ei/client/adddata.do']
    }

    session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
        const bytes = details.uploadData && details.uploadData[0].bytes
        const requestData = String.fromCharCode.apply(String, bytes)
        // console.log(details.uploadData.bytes)
        session.defaultSession.webRequest.onCompleted(filter, (details) => {
            if (details.statusCode === 200) {
                if (requestData) {
                    const data = {};
                    requestData.split('&').forEach(item => {
                        const dataItem = item.split('=')
                        data[dataItem[0]] = dataItem[1]
                    })
                    if (data.cmd === 'query') {
                        // console.log(data)
                        win.webContents.send('requestData', data)
                    }

                }
            }
        })

        callback({requestHeaders: details.requestHeaders})
    })


    win.webContents.setWindowOpenHandler((details) => {
        if (newMianWindow) {
            newMianWindow.close()
        }
        newMianWindow = createMainWindow(details.url)
        newMianWindow.on('close', () => {
            if (newMianWindow) {
                newMianWindow = null
            }
        })
        // ipcMain.removeHandler('getData')
        return {action: 'deny'}
    })


    return win

}

const createActionView = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            preload: filePath,
            contextIsolation: true
        }
    })
    win.setAlwaysOnTop(true)
    win.setPosition(1620, 0)
    // win.webContents.openDevTools()
    win.loadURL('http://localhost:8000/')

    return win
}


app.whenReady().then(() => {

    const mainWindow = createMainWindow()
    ipcMain.handle('LoadData', (event, args) => {
        console.log('getData==>', args)
        if (newMianWindow) {
            newMianWindow.webContents.send('post', args)
        }
    })
    mainWindow.on('show', () => {
        const actionWindow = createActionView()
    })

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
