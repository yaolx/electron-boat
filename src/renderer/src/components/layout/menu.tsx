import { useNavigate } from 'react-router-dom'

import { MessageOutlined, ContactsOutlined, EditOutlined, AppstoreOutlined } from '@ant-design/icons'
import cs from 'classnames'
import { map } from 'lodash'

import styles from './styles/index.module.less'

const menus = [
  {
    title: '组件demo',
    key: 'msg',
    url: 'https://yaolx.github.io/#/component',
    icon: <MessageOutlined />
  },
  {
    title: '通讯录',
    key: 'address',
    url: 'https://yaolx.github.io/#/end',
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
    url: 'https://yaolx.github.io/#/tech',
    icon: <AppstoreOutlined />
  }
]

function Menu() {
  const hash = location.hash
  const navigate = useNavigate()
  const onSelectMenu = (menu) => {
    navigate(`/${menu.key}`)
  }
  const active = hash.slice(2)
  return (
    <div className={styles.menu}>
      {map(menus, (menu) => {
        const activeClass = menu.key === active || (active.includes(menu.key) && menu.key !== '') ? styles.active : ''
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
