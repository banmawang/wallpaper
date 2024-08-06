import { ipcMain, IpcMainEvent } from 'electron'
import wallpaper from 'wallpaper'
import { downloadFile } from '../uitl'
import { resolve } from 'path'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string, path: string) => {
  const localFile = resolve(path, url.split('/').pop()!)
  const file = await downloadFile(url, localFile)
  wallpaper.set(file, { screen: 'all', scale: 'auto' })
})
