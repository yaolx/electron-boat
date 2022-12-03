import React from 'react'

import { SmileTwoTone, createFromIconfontCN } from '@ant-design/icons'
import { Layout } from 'antd'

import styles from './styles/index.module.less'

const { Header } = Layout
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3807038_qj3err6v8j.js'
})
function HeaderLayout() {
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>
        <SmileTwoTone style={{ fontSize: 20 }} />
      </div>
      <div className={styles.drag_area}></div>
      <div className={styles.oper_btns}>
        <IconFont type="icon-suoxiao" className={styles.btn} />
        <IconFont type="icon-fangda" className={styles.btn} />
        <IconFont type="icon-guanbi" className={styles.btn} />
      </div>
    </Header>
  )
}

export default React.memo(HeaderLayout)
