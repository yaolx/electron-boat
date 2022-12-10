import { useEffect, useState } from 'react'

import { reduce, map } from 'lodash'

import { categories } from '@/constants/global'

import AppList from './appList'
import styles from './style/index.module.less'
import { getRecentApps } from './utils/app-utils'

function Apps() {
  const [recentApps, setRecentApps] = useState<Categories[]>([])
  useEffect(() => {
    const recent = getRecentApps()
    setRecentApps(recent)
  }, [])
  const allCategories = [
    {
      name: '全部应用',
      children: reduce(
        map(categories, 'children'),
        (arr: CategoryItem[], item) => {
          return arr.concat(item)
        },
        []
      )
    }
  ].concat(categories)
  return (
    <div className={styles.app}>
      {recentApps.length > 0 ? <AppList categories={recentApps} isRecent /> : null}
      <AppList categories={allCategories} />
    </div>
  )
}
export default Apps
