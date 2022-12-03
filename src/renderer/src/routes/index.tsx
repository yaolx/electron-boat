import { lazy } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

import Layout from '@/components/layout'

const Home = lazy(() => import('@/page/home'))
const Msg = lazy(() => import('@/page/msg'))
const Study = lazy(() => import('@/page/study'))
const Apps = lazy(() => import('@/page/apps'))
const Address = lazy(() => import('@/page/address'))
const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/msg',
        element: <Msg />
      },
      {
        path: '/address',
        element: <Address />
      },
      {
        path: '/study',
        element: <Study />
      },
      {
        path: '/apps',
        element: <Apps />
      }
    ]
  }
]

const Router = () => {
  const appRouter = useRoutes(routesConfig)
  return appRouter
}

export default Router
