import React from 'react'

import { SmileTwoTone } from '@ant-design/icons'
import { Layout } from 'antd'

import Icon from '@/components/icon'

import styles from './styles/index.module.less'

const { Header } = Layout
const { mainView } = window.xElectron
function HeaderLayout() {
  const onClickToolbar = (type) => {
    mainView.onToolbar(type)
  }
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>
        <SmileTwoTone style={{ fontSize: 20 }} />
      </div>
      <div className={styles.drag_area}></div>
      <div className={styles.oper_btns}>
        <Icon type="suoxiao" className={styles.btn} onClick={() => onClickToolbar('mini')} />
        <Icon type="fangda" className={styles.btn} onClick={() => onClickToolbar('big')} />
        <Icon type="guanbi" className={styles.btn} onClick={() => onClickToolbar('close')} />
      </div>
    </Header>
  )
}

export default React.memo(HeaderLayout)
