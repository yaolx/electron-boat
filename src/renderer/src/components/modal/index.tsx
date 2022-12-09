import { useEffect, useState } from 'react'

import { CloseOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'

import Webview from '@/components/webview'

import styles from './styles/index.module.less'

interface DrawerProps {
  url: string
  title: string
}

const { webView } = window.xElectron
const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
function Modal() {
  const [drawer, setDrawer] = useState<Partial<DrawerProps>>({})
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    webView.onNewPopup((data) => {
      setDrawer(data)
      console.log('###title', data)
      setVisible(true)
    })
  }, [])
  return (
    <Drawer
      placement="right"
      open={visible}
      title={drawer.title}
      closable={false}
      width={500}
      getContainer={false}
      className={styles.modal}
      extra={<CloseOutlined onClick={() => setVisible(false)} />}
    >
      {drawer.url ? <Webview src={drawer.url} className={styles.webview} useragent={userAgent}></Webview> : null}
    </Drawer>
  )
}

export default Modal
