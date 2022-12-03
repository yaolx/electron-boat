import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import cs from 'classnames'

import Suspense from '@/components/suspense'

import Header from './header'
import Menu from './menu'
import styles from './styles/index.module.less'
import User from './user'
const { Content, Sider } = Layout

function LayoutIndex() {
  const [collapsed, setCollapsed] = useState(false)
  const collapsedClass = collapsed ? '' : styles.collapsed
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout>
        <Sider className={cs(styles.sider, collapsedClass)} collapsedWidth="0" trigger={null} collapsed={collapsed}>
          <User />
          <Menu />
          <div className={styles.folder}>
            {collapsed ? <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} /> : <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />}
          </div>
        </Sider>
        <Content>
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutIndex
