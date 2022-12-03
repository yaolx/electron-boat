import { ipcMain, BrowserWindow } from 'electron'

export function onNavbar() {
  ipcMain.on('navBar', (event, val) => {
    /**
     * 通过BrowserWindow.fromWebContents方法拿到window实例
     * event.sender 是发送消息的WebContents实例
     */
    const window: Electron.BrowserWindow | null = BrowserWindow.fromWebContents(event.sender)
    if (val == 'mini') {
      window?.minimize()
    } // 最小化窗口
    if (val == 'close') {
      window?.close()
    } // 关闭窗口
    if (val == 'big') {
      // 全屏/取消全屏
      window?.isMaximized() ? window?.unmaximize() : window?.maximize()
    }
  })
}
