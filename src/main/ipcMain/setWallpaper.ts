import { ipcMain, IpcMainEvent } from 'electron'
import wallpaper from 'wallpaper'
import { downloadFile } from '../uitl'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string, path: string) => {
  const file = await downloadFile(url, path)
  wallpaper.set(file, { screen: 'all', scale: 'auto' })
})
