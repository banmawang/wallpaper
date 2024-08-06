import { dialog, ipcMain, IpcMainEvent } from 'electron'
import { downloadFile } from '../uitl'

ipcMain.on('downloadImage', async (_event: IpcMainEvent, url: string) => {
  const fileName = url.split('/').pop()!
  const res = await dialog.showSaveDialog({
    title: '下载图片',
    message: '斑马兽桌面软件',
    defaultPath: fileName,
    properties: ['createDirectory']
  })
  if (res.canceled === false && res.filePath) downloadFile(url, res.filePath)
})
