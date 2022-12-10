import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import cs from 'classnames'
import { map, find } from 'lodash'

import Icon from '@/components/icon'
import { MENUS } from '@/constants/global'

import styles from './styles/index.module.less'

interface MenuProps {
  onClickMenu: (url: string) => void
}

function Menu(props: MenuProps) {
  const hash = location.hash
  const navigate = useNavigate()
  const onSelectMenu = (menu) => {
    navigate(`/${menu.key}`)
  }
  const activeHash = hash.slice(2)
  useEffect(() => {
    const menu = find(MENUS, {
      key: activeHash
    })
    if (menu?.url) {
      props.onClickMenu(menu.url)
    }
  }, [activeHash])
  return (
    <div className={styles.menu}>
      {map(MENUS, (menu) => {
        const activeClass = menu.key === activeHash || (activeHash.includes(menu.key) && menu.key !== '') ? styles.active : ''
        return (
          <div key={menu.key} onClick={() => onSelectMenu(menu)} className={cs(styles.menu_item, activeClass)}>
            <Icon type={menu.icon} />
            <span className={styles.menu_title}>{menu.title}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
