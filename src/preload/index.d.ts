import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    xElectron: {
      mainView: {
        onToolbar: (val: T) => void
        onPlay: (val: T) => void
      }
      appUpdater: {
        checkUpdate: () => void
        quitAndInstall: () => void
        updateProgress: (func: T) => void
        getAppVersion: () => Promise<T>
      }
    }
  }
}
