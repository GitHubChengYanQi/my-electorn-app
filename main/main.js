(()=>{var e={298:e=>{"use strict";e.exports=require("electron")},17:e=>{"use strict";e.exports=require("path")}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var s=n[o]={exports:{}};return e[o](s,s.exports,t),s.exports}(()=>{const{app:e,BrowserWindow:n,ipcMain:o,session:a,Menu:s}=t(298),r=t(17);let l,i=r.resolve(r.join(__dirname,"../lib/preload.js")),d=[{label:"刷新(Ctrl+R)",accelerator:"CmdOrCtrl+R",click:function(e,t){t&&(1===t.id&&n.getAllWindows().forEach((function(e){e.id>1&&e.close()})),t.reload())}}],c=null,p=null;const w=e=>{p=h();const t=new n({icon:r.resolve(r.join(__dirname,"../static/weisheng.png")),width:1920,height:1080,show:!1,webPreferences:{nodeIntegrationInSubFrames:!0,nodeIntegration:!0,webviewTag:!0,preload:i,contextIsolation:!1}});t.webContents.openDevTools(),t.loadURL(e||"https://zb.lnwsjktj.com:8080/webPage/esmain/login.do"),t.webContents.on("dom-ready",(()=>{t.show(),p&&(p.close(),p=null)}));const b={urls:["https://zb.lnwsjktj.com:8080/webPage//ei/client/adddata.do","https://zb.lnwsjktj.com:8080/webPage/ei/client/adddata.do","https://zb.lnwsjktj.com:8080/webPage/ei/appendbbh.do"]};return a.defaultSession.webRequest.onBeforeSendHeaders(b,((e,n)=>{const o=e.uploadData&&e.uploadData[0].bytes,s=String.fromCharCode.apply(String,o);a.defaultSession.webRequest.onCompleted(b,(e=>{if(200===e.statusCode&&s){const n={};s.split("&").forEach((e=>{const t=e.split("=");n[t[0]]=t[1]})),"https://zb.lnwsjktj.com:8080/webPage/ei/appendbbh.do"===e.url?"append"===n.cmd&&t.webContents.send("append",n):"query"===n.cmd&&t.webContents.send("requestData",n)}})),n({requestHeaders:e.requestHeaders})})),t.webContents.setWindowOpenHandler((e=>{l&&l.close(),l=w(e.url);const n=s.buildFromTemplate([...d,{label:"打开数据列表(Ctrl+O)",accelerator:"CmdOrCtrl+O",click:function(e,n){u()}}]);return l.setMenu(n),l.on("show",(()=>{u()})),l.on("close",(()=>{c&&(c.close(),o.removeHandler("append"),c=null),l&&(l=null)})),{action:"deny"}})),t},u=()=>{c||(c=b(),o.handle("append",((e,n)=>{console.log("append==>",n),c.webContents.send("queryList",n)})),c.on("close",(()=>{c&&(o.removeHandler("append"),c=null)})))},b=()=>{const e=new n({icon:r.resolve(r.join(__dirname,"../static/weisheng.png")),width:500,maxWidth:500,height:800,maximizable:!1,webPreferences:{nodeIntegration:!0,webviewTag:!0,preload:i,contextIsolation:!0}});return e.setAlwaysOnTop(!0),e.loadURL("http://10.10.10.17:8081"),e.loadURL("http://10.10.10.17:8083"),e},h=()=>{const e=new n({width:500,maxWidth:500,height:500,frame:!1,maximizable:!1,transparent:!0,webPreferences:{nodeIntegration:!0,webviewTag:!0,preload:i,contextIsolation:!0}});return e.menuBarVisible=!1,e.setAlwaysOnTop(!0),e.loadFile(r.resolve(r.join(__dirname,"../page/index.html"))),e};e.whenReady().then((()=>{const e=s.buildFromTemplate(d);s.setApplicationMenu(e),w(),o.handle("LoadData",((e,n)=>{console.log("getData==>",n),l&&l.webContents.send("post",n)}))})),e.on("window-all-closed",(()=>{"darwin"!==process.platform&&e.quit()}))})()})();