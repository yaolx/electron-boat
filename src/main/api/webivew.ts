import { is } from '@electron-toolkit/utils'

import { getAssetPath } from '../utils'

const fs = require('fs')
const WindowOpenStyle = {
  External: 'external',
  Popup: 'popup',
  Navigate: 'navigate'
}
const UserDefineStyle = {}
const globalDefaultStyle = WindowOpenStyle.External
function getDefaultStyle(webContents) {
  const { id } = webContents
  return UserDefineStyle[id] || globalDefaultStyle
}
// 外部浏览器打开
function openExternal() {
  // shell.openExternal(edata.url)
  return {
    action: 'allow'
  }
}
// 内部开一个modal的弹窗
function openPopup(webContents, edata, features) {
  webContents.send('new-popup', {
    url: edata.url,
    ...features
  })
  return {
    action: 'deny'
  }
}
// 本地跳转
function openNavigate(webContents, edata) {
  webContents.loadURL(edata.url)
  return {
    action: 'deny'
  }
}
function windowOpenHandler(webContents, edata) {
  const features = edata.features ? edata.features.split(',') : []
  const enableFeatures: Partial<{
    forceExternal: string
    forcePopup: string
    forceNavigate: string
  }> = {}
  features.forEach((key) => {
    const [featurekey, value] = key.split('=')
    enableFeatures[featurekey] = value ? decodeURIComponent(value) : true
  })
  const defaultStyle = getDefaultStyle(webContents)
  if (enableFeatures.forceExternal) {
    return openExternal()
  } else if (enableFeatures.forcePopup) {
    return openPopup(webContents, edata, enableFeatures)
  } else if (enableFeatures.forceNavigate) {
    return openNavigate(webContents, edata)
  }
  if (defaultStyle === WindowOpenStyle.External) {
    return openExternal()
  } else if (defaultStyle === WindowOpenStyle.Popup) {
    return openPopup(webContents, edata, enableFeatures)
  } else if (defaultStyle === WindowOpenStyle.Navigate) {
    return openNavigate(webContents, edata)
  }
  return {
    action: 'deny'
  }
}

export function setOpenHandler(webContents) {
  const winType = webContents.getType()
  if (winType === 'webview') {
    if (is.dev) {
      webContents.executeJavaScript(`
      var script = document.createElement('script');
      script.type='module';
      script.src = 'https://127.0.0.1:5172/__vite-plugin-monkey.entry.js';
      document.head.appendChild(script);
      `)
    } else {
      const file = getAssetPath('dev-assistant.user.js')
      fs.readFile(file, function (_err, data) {
        const text = data.toString()
        webContents.executeJavaScript(`
            ${text}
            `)
      })
    }
  }
  webContents.setWindowOpenHandler((edata) => windowOpenHandler(webContents, edata))
}
