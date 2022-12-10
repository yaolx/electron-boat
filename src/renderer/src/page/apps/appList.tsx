import { useState } from 'react'

import cs from 'classnames'
import { map } from 'lodash'

import AppItem from './appItem'
import styles from './style/index.module.less'

interface AppListProps {
  categories: Categories[]
  isRecent?: boolean
}
function AppList(props: AppListProps) {
  const { categories, isRecent } = props
  const [curCategory, setCurCategory] = useState(0)
  const recentTabClass = isRecent ? styles.recentTab : ''
  const onChangeTab = (index) => {
    setCurCategory(index)
  }
  return (
    <div className={styles.appList}>
      <div className={styles.tabs}>
        {map(categories, (cate, index) => {
          const activeClass = curCategory === index || isRecent ? styles.active : ''
          return (
            <div className={cs(styles.tab, activeClass, recentTabClass)} onClick={() => onChangeTab(index)} title={cate.name} key={index}>
              {cate.name}
            </div>
          )
        })}
      </div>
      <div className={styles.content}>
        {map(categories[curCategory].children, (item, index) => {
          return <AppItem {...item} key={index} />
        })}
      </div>
    </div>
  )
}
export default AppList
