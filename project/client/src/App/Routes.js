import { Route, Switch } from 'react-router-dom'

import { Main } from './components'
import { Home } from './pages'

function Routes() {
  return (
    <Main>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
      </Switch>
    </Main>
  )
}

export default Routes
