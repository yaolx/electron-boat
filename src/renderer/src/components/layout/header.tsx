import React from 'react'

import { SmileTwoTone } from '@ant-design/icons'
import { Layout } from 'antd'

import styles from './styles/index.module.less'

const { Header } = Layout
function HeaderLayout() {
  return (
    <Header className={styles.header}>
      <SmileTwoTone style={{ fontSize: 20 }} />
    </Header>
  )
}

export default React.memo(HeaderLayout)
