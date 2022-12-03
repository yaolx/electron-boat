import { lazy } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/page/home'))
const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  }
]

const Router = () => {
  const appRouter = useRoutes(routesConfig)
  return appRouter
}

export default Router
