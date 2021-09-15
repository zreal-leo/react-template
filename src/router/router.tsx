import React, { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import { Button } from 'antd'
import './router.less'

import ErrorCatch from '@/views/Error'
import App from '@/views/app/App'
const About = lazy(() => import('@/views/about/About'))

function Layout() {
  const history = useHistory()
  const [tab, setTab] = useState(0)

  function toHome() {
    setTab(0)
    history.push('/')
  }
  function toAbout() {
    setTab(1)
    history.push('/about')
  }

  return (
    <div className="layout">
      <div className="link">
        <Button type="link" onClick={toHome} className={tab === 0 ? 'active' : ''}>
          home
        </Button>
        <Button type="link" onClick={toAbout} className={tab === 1 ? 'active' : ''}>
          About
        </Button>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

function Router() {
  return (
    <ErrorCatch>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      </BrowserRouter>
    </ErrorCatch>
  )
}
export default Router
