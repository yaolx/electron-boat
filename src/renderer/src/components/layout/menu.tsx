import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { MessageOutlined, ContactsOutlined, EditOutlined, AppstoreOutlined } from '@ant-design/icons'
import cs from 'classnames'
import { map, find } from 'lodash'

import styles from './styles/index.module.less'

const menus = [
  {
    title: '组件demo',
    key: 'msg',
    icon: <MessageOutlined />
  },
  {
    title: '通讯录',
    key: 'address',
    icon: <ContactsOutlined />
  },
  {
    title: '我的博客',
    key: 'myBlog',
    url: 'https://yaolx.github.io/#/front',
    icon: <EditOutlined />
  },
  {
    title: '工作台',
    key: 'apps',
    icon: <AppstoreOutlined />
  }
]

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
    const menu =
      find(menus, {
        key: activeHash
      }) || {}
    if (menu.url) {
      props.onClickMenu(menu.url)
    }
  }, [activeHash])
  return (
    <div className={styles.menu}>
      {map(menus, (menu) => {
        const activeClass = menu.key === activeHash || (activeHash.includes(menu.key) && menu.key !== '') ? styles.active : ''
        return (
          <div key={menu.key} onClick={() => onSelectMenu(menu)} className={cs(styles.menu_item, activeClass)}>
            {menu.icon}
            <span className={styles.menu_title}>{menu.title}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
