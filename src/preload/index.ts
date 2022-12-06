// import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer
const api = {
  // 最小化，放大，关闭事件
  onToolbar: (val) => {
    ipcRenderer.send('toolbar', val)
  },
  appUpdater: {
    // 检查更新
    checkUpdate: () => {
      ipcRenderer.send('checkForUpdate')
    },
    // 退出安装
    quitAndInstall: () => {
      ipcRenderer.send('quitAndInstall')
    },
    // 版本更新信息
    updateProgress: (func) => {
      ipcRenderer.on('update_message', (_event, ...args) => func(...args))
    },
    // 获取版本信息
    getAppVersion: () => ipcRenderer.invoke('getAppVersion')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('xElectron', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.xElectron = api
}
