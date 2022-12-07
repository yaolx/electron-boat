import * as path from 'path'

import { app } from 'electron'
const RESOURCES_PATH = app.isPackaged ? path.join(process.resourcesPath, 'asset') : path.join(__dirname, '../../asset')
export const getAssetPath = (...paths) => path.join(RESOURCES_PATH, ...paths)
