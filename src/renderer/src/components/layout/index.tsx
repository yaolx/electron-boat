import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import cs from 'classnames'

import Suspense from '@/components/suspense'

import Header from './header'
import Menu from './menu'
import Setting from './settting'
import styles from './styles/index.module.less'
import User from './user'
const { Content, Sider } = Layout

function LayoutIndex() {
  const [collapsed, setCollapsed] = useState(false)
  const collapsedClass = collapsed ? '' : styles.collapsed
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout className={styles.center}>
        <Sider className={cs(styles.sider, collapsedClass)} collapsedWidth="0" trigger={null} collapsed={collapsed}>
          <User />
          <Menu />
          {collapsed ? '' : <Setting />}
          <div className={cs(styles.folder, collapsedClass)}>
            {collapsed ? <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} /> : <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />}
          </div>
        </Sider>
        <Content className={styles.content}>
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutIndex
