import { ipcMain, IpcMainEvent, IpcMainInvokeEvent } from 'electron'
import wallpaper from 'wallpaper'
import { downloadFile } from '../uitl'
import { resolve } from 'path'
import fs from 'fs'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string, path: string) => {
  try {
    const localFile = resolve(path, url.split('/').pop()!)
    const file = await downloadFile(url, localFile)
    wallpaper.set(file, { screen: 'all', scale: 'auto' })
  } catch (error) {
    // dialog.showErrorBox('', '设置壁纸失败，请在设置中心定义目录')
  }
})

ipcMain.handle('checkDirectory', (_event: IpcMainInvokeEvent, path: string) => {
  return fs.existsSync(path)
})
