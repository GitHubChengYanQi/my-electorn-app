import {contextBridge, ipcRenderer} from "electron";

contextBridge.exposeInMainWorld('electronAPI',{
    getData: (data) => ipcRenderer.invoke('getData',data)
})

console.log('注入gedataJS了')
