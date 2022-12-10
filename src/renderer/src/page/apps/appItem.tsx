import Icon from '@/components/icon'

import styles from './style/index.module.less'
import { addRecentApp } from './utils/app-utils'
function AppItem(props: CategoryItem) {
  const { title, id } = props
  const gotoDetail = () => {
    addRecentApp(props)
  }
  return (
    <div className={styles.appItem} onClick={gotoDetail}>
      <div className={styles.content}>
        <Icon type={id} className={styles.icon} />
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  )
}
export default AppItem
