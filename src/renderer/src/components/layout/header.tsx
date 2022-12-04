import React from 'react'

import { SmileTwoTone, createFromIconfontCN } from '@ant-design/icons'
import { Layout } from 'antd'

import styles from './styles/index.module.less'

const { Header } = Layout
const IconFont = createFromIconfontCN({
  scriptUrl: 'https://at.alicdn.com/t/c/font_3807038_qj3err6v8j.js'
})
function HeaderLayout() {
  const onToolbar = (type) => {
    window.electron.onToolbar(type)
  }
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>
        <SmileTwoTone style={{ fontSize: 20 }} />
      </div>
      <div className={styles.drag_area}></div>
      <div className={styles.oper_btns}>
        <IconFont type="icon-suoxiao" className={styles.btn} onClick={() => onToolbar('mini')} />
        <IconFont type="icon-fangda" className={styles.btn} onClick={() => onToolbar('big')} />
        <IconFont type="icon-guanbi" className={styles.btn} onClick={() => onToolbar('close')} />
      </div>
    </Header>
  )
}

export default React.memo(HeaderLayout)
