import { Route, Switch } from 'react-router-dom'

import { Home } from './pages'

function Routes() {
  return (
    <main>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
      </Switch>
    </main>
  )
}

export default Routes
