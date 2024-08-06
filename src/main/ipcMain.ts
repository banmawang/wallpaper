import { dialog, ipcMain, IpcMainEvent } from 'electron'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import fetch from 'node-fetch'
import { resolve } from 'node:path'
import wallpaper from 'wallpaper'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string) => {
  const localFile = resolve(__dirname, '../../wallpaper', url.split('/').pop()!)
  const streamPipeline = promisify(pipeline)
  const response = await fetch(url)
  if (!response.ok) {
    dialog.showErrorBox('斑马兽温馨提示', '图片下载失败')
    throw new Error(`unexpected response ${response.statusText}`)
  }
  await streamPipeline(response.body!, createWriteStream(localFile))
  wallpaper.set(localFile, { screen: 'all', scale: 'auto' })
})
