import { useContext } from 'react'

import Icon from '@/components/icon'

import { TabsContext } from './reducer'
import styles from './style/index.module.less'
import { addRecentApp } from './utils/app-utils'
function AppItem(props: Menu) {
  const { title, icon } = props
  const { dispatch } = useContext(TabsContext)
  const gotoDetail = () => {
    addRecentApp(props)
    dispatch({
      type: 'add',
      payload: props
    })
  }
  return (
    <div className={styles.appItem} onClick={gotoDetail}>
      <div className={styles.content}>
        <Icon type={icon} className={styles.icon} />
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  )
}
export default AppItem
