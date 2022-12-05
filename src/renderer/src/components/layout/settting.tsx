import { useEffect, useState } from 'react'

import { SettingOutlined } from '@ant-design/icons'
import { Button, Dropdown, Modal } from 'antd'

import styles from './styles/index.module.less'
const { appUpdater } = window.electron
function Setting() {
  const [visible, setVisible] = useState(false)
  const [version, setVersion] = useState('')
  const onClick = ({ key }) => {
    switch (key) {
      case 'devTool':
        window.electron.onToolbar(key)
        break
      case 'update':
        setVisible(!visible)
        break
      default:
        break
    }
  }
  const checkUpdate = () => {
    appUpdater.checkUpdate()
  }
  const items = [
    { label: '版本更新', key: 'update' }, // 菜单项务必填写 key
    { label: '开启调试', key: 'devTool' }
  ]
  useEffect(() => {
    appUpdater.getAppVersion((info) => {
      if (info.cmd === 'version') {
        setVersion(info.message)
      }
    })
  }, [])
  return (
    <>
      <Dropdown
        menu={{
          items,
          onClick
        }}
      >
        <SettingOutlined className={styles.setting} />
      </Dropdown>
      <Modal open={visible} footer={null} onCancel={() => setVisible(false)} style={{ width: '300px!important', height: 300 }}>
        <div className={styles.update}>
          <div className={styles.title}>千禮之行-electron</div>
          <div>版本号{version}</div>
          <div className={styles.text}>
            <div className={styles.tip}>当前版本为最新版本，无需更新</div>
            <Button type="primary" onClick={() => checkUpdate()}>
              检查更新
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Setting
