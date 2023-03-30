const {app, BrowserWindow, ipcMain, session, Menu} = require('electron')
const path = require('path')

let filePath = path.resolve(path.join(__dirname, './lib/preload.js'))

let newMianWindow;

let template = [
    {
        label: '刷新(Ctrl+R)',
        accelerator: 'CmdOrCtrl+R',
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                // on reload, start fresh and close any old
                // open secondary windows
                if (focusedWindow.id === 1) {
                    BrowserWindow.getAllWindows().forEach(function (win) {
                        if (win.id > 1) {
                            win.close()
                        }
                    })
                }
                focusedWindow.reload()
            }
        }
    }
]

let actionWindow = null

let loadingWindow = null

const createMainWindow = (url) => {

    loadingWindow = createLoadingWindow()

    const win = new BrowserWindow({
        icon: path.resolve(path.join(__dirname, './public/imgs/weisheng.png')),
        width: 1920,
        height: 1080,
        show: false,
        webPreferences: {
            nodeIntegrationInSubFrames: true,
            nodeIntegration: true,
            webviewTag: true,
            preload: filePath,
            contextIsolation: false
        }
    })
    // win.webContents.openDevTools()
    win.loadURL(url || 'https://zb.lnwsjktj.com:8080/webPage/esmain/login.do')

    win.webContents.on('dom-ready', () => {
        win.show()
        if (loadingWindow) {
            loadingWindow.close()
            loadingWindow = null
        }
    })


    const filter = {
        urls: [
            'https://zb.lnwsjktj.com:8080/webPage//ei/client/adddata.do',
            'https://zb.lnwsjktj.com:8080/webPage/ei/client/adddata.do',
            'https://zb.lnwsjktj.com:8080/webPage/ei/appendbbh.do'
        ]
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
                    if (details.url === 'https://zb.lnwsjktj.com:8080/webPage/ei/appendbbh.do') {
                        if (data.cmd === 'append') {
                            win.webContents.send('append', data)
                        }
                    } else {
                        if (data.cmd === 'query') {
                            // console.log(data)
                            win.webContents.send('requestData', data)
                        }
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
        newMianWindow.on('show', () => {
            if (!actionWindow) {
                actionWindow = createActionView()
                ipcMain.handle('append', (event, args) => {
                    console.log('append==>', args)
                    actionWindow.webContents.send('queryList', args)
                })
                actionWindow.on('close', () => {
                    if (actionWindow) {
                        ipcMain.removeHandler('append')
                        actionWindow = null
                    }
                })
            }
        })
        newMianWindow.on('close', () => {
            if (actionWindow) {
                actionWindow.close()
                ipcMain.removeHandler('append')
                actionWindow = null
            }
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
        icon: path.resolve(path.join(__dirname, './public/imgs/weisheng.png')),
        width: 500,
        maxWidth: 500,
        height: 800,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            preload: filePath,
            contextIsolation: true
        }
    })

    win.setAlwaysOnTop(true)
    win.loadFile(path.resolve(path.join(__dirname, './action/index.html')))
    // win.loadURL('http://localhost:8000')

    return win
}

const createLoadingWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        maxWidth: 500,
        height: 500,
        frame: false,
        maximizable: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            preload: filePath,
            contextIsolation: true
        }
    })
    win.menuBarVisible = false
    win.setAlwaysOnTop(true)
    win.loadFile(path.resolve(path.join(__dirname, './page/index.html')))
    return win
}


app.whenReady().then(() => {
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    const mainWindow = createMainWindow()

    ipcMain.handle('LoadData', (event, args) => {
        console.log('getData==>', args)
        if (newMianWindow) {
            newMianWindow.webContents.send('post', args)
        }
    })

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
