import { useConfigStore } from '@renderer/store/useConfigStore'

export default () => {
  const { config } = useConfigStore()
  const setWallpaper = () => {
    window.api.setWallpaper(config.url)
  }
  return { setWallpaper }
}
