import { useRoutes } from 'react-router-dom'
import RequireAuth from '../components/auth/RequireAuth'
import navigationConfig from '../layouts/navigationConfig'
import Error404Page from '../components/errors/Error404Page'
import LoginPage from '../modules/login'
import Layout from '../layouts'

const makeRouteProps = (configs, items = []) => {
  for (const config of configs) {
    if (config.routeType === 'route') {
      let route = {
        path: config.url,
        element: config.restriction ? (
          <RequireAuth><config.component /></RequireAuth>
        ) : (<config.component />)
      }
      if (config.children && config.children.length) {
        // nest children
        route.children = makeRouteProps(config.children, [])
      }
      items.push(route)
    }
    else if (config.routeType === 'group') {
      // add children to the same level
      items = makeRouteProps(config.children, items)
    }
  }
  return items
}

const App = () => {

  const loginConfig = {
    path: '/login',
    element: <LoginPage />
   }

  const layoutConfig = {
    element: <Layout />,
    children: makeRouteProps(navigationConfig)
  }

  const noMatchRouteConfig = {
    path: '*',
    element: <Error404Page />
  }

  const finalRoutes = [
    loginConfig,
    layoutConfig, 
    noMatchRouteConfig
  ]

  return useRoutes(finalRoutes)
}

export default App
