import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    xElectron: {
      onToolbar: (val: T) => void
      appUpdater: {
        checkUpdate: () => void
        quitAndInstall: () => void
        updateProgress: (func: T) => void
        getAppVersion: () => Promise<T>
      }
    }
  }
}
