import Error404Page from './Error404Page'

export const ErrorPagesConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: '/error/not-found',
      component: Error404Page
    }
  ]
}

export { ErrorPagesConfig as default }
