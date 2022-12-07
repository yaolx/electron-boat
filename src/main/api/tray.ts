import { Tray, ipcMain, Menu } from 'electron'

export function trayInit(win) {
  const trayContextMenu = Menu.buildFromTemplate([
    {
      label: '显示窗口',
      click: () => {
        win.show()
        win.center()
        win.focus()
      }
    },
    {
      label: '退出',
      role: 'quit'
    }
  ])
  // 设置托盘
  const tray = new Tray('resources/images/icon.png')
  // 设置hover后的信息
  ipcMain.on('songPlay', async (_e, data) => {
    tray.setToolTip(data)
  })
  // 设置鼠标左键事件
  tray.on('click', () => {
    win.show()
  })
  // 设置鼠标右键键事件
  tray.on('right-click', () => {
    tray.popUpContextMenu(trayContextMenu)
  })
}
