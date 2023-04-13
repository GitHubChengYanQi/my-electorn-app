const {app, BrowserWindow, ipcMain, session, Menu} = require('electron')
const path = require('path')

let filePath = path.resolve(path.join(__dirname, '../lib/preload.js'))

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
        icon: path.resolve(path.join(__dirname, '../static/weisheng.png')),
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

        ipcMain.handle('batchAddDone', (event, args) => {
            console.log('batchAddDone==>')
            newMianWindow.reload()
        })
        const menu = Menu.buildFromTemplate([
            ...template,
            {
                label: '打开数据列表(Ctrl+O)',
                accelerator: 'CmdOrCtrl+O',
                click: function (item, focusedWindow) {
                    openAction()
                }
            }
        ])
        newMianWindow.setMenu(menu)
        newMianWindow.on('show', () => {
            openAction()
        })
        newMianWindow.on('close', () => {
            if (actionWindow) {
                actionWindow.close()
                ipcMain.removeHandler('append')
                ipcMain.removeHandler('createHealthDone')
                actionWindow = null
            }
            if (newMianWindow) {
                ipcMain.removeHandler('batchAddDone')
                newMianWindow = null
            }
        })
        // ipcMain.removeHandler('getData')
        return {action: 'deny'}
    })


    return win

}

const openAction = () => {
    if (!actionWindow) {
        actionWindow = createActionView()
        ipcMain.handle('append', (event, args) => {
            console.log('append==>', args)
            actionWindow.webContents.send('queryList', args)
        })
        ipcMain.handle('createHealthDone', (event, args) => {
            console.log('createHealthDone==>')
            actionWindow.webContents.send('createHealthDone', args)
        })
        actionWindow.on('close', () => {
            if (actionWindow) {
                ipcMain.removeHandler('append')
                ipcMain.removeHandler('createHealthDone')
                actionWindow = null
            }
        })
    }
}

const createActionView = () => {

    const win = new BrowserWindow({
        icon: path.resolve(path.join(__dirname, '../static/weisheng.png')),
        width: 600,
        maxWidth: 600,
        height: 800,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            preload: filePath,
            contextIsolation: true
        }
    })
    // win.webContents.openDevTools()
    win.setAlwaysOnTop(true)
    // local
    // win.loadURL('http://localhost:8000')

    // 内
    win.loadURL('http://10.10.10.17:8081')

    // 外
    // win.loadURL('http://10.147.20.160:8083')

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
    win.loadFile(path.resolve(path.join(__dirname, '../page/index.html')))
    return win
}


app.whenReady().then(() => {
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    const mainWindow = createMainWindow()

    ipcMain.handle('LoadData', (event, args) => {
        if (newMianWindow) {
            newMianWindow.webContents.send('post', args)
        }
    })

    ipcMain.handle('createHealth', (event, args) => {
        if (newMianWindow) {
            newMianWindow.webContents.send('createHealth', args)
        }
    })

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
