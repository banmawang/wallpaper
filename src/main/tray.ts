import { BrowserWindow, Menu, shell, Tray } from 'electron'
import path from 'path'
const createTray = (createWindow: () => void) => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/macTray@2x.png' //32x32 像素的图片
        : '../../resources/windowTray.png' //可以使用彩色图片，图标的最大大小为 256x256 像素，设置为32x32像素即可
    )
  )
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '斑马兽官网',
      click: async () => {
        await shell.openExternal('https://www.banmashou.com')
      }
    },
    {
      label: '设置壁纸',
      click: () => {
        if (BrowserWindow.getAllWindows().length == 0) createWindow()
      }
    },
    { type: 'separator' },
    { label: '退出', role: 'quit' }
  ])
  tray.setToolTip('斑马兽桌面壁纸')
  tray.setContextMenu(contextMenu)
}

export { createTray }
