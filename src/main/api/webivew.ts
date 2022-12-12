import { shell } from 'electron'

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
function openExternal(_w, edata) {
  shell.openExternal(edata.url)
  return {
    action: 'deny'
  }
}
// 内部开一个modal的弹窗
function openPopup(webContents, edata, features) {
  console.log('###1', edata)
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
    return openExternal(webContents, edata)
  } else if (enableFeatures.forcePopup) {
    return openPopup(webContents, edata, enableFeatures)
  } else if (enableFeatures.forceNavigate) {
    return openNavigate(webContents, edata)
  }
  if (defaultStyle === WindowOpenStyle.External) {
    return openExternal(webContents, edata)
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
  webContents.setWindowOpenHandler((edata) => windowOpenHandler(webContents, edata))
}
