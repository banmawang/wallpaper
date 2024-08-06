import { ipcMain, IpcMainEvent } from 'electron'

ipcMain.on('setWallpaper', (_event: IpcMainEvent, url: string) => {
  console.log(url)
  //1图片下载，2设置电脑壁纸
})
