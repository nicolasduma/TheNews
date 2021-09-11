import { Route, Switch } from 'react-router-dom'

import { Home, News } from './pages'

function Routes() {
  return (
    <main>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path={'/news/:id'} component={News} />
      </Switch>
    </main>
  )
}

export default Routes
