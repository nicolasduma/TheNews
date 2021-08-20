import { Route, Switch } from 'react-router-dom'

import { Conteiner } from './components'
import { Home } from './pages'

function Routes() {
  return (
    <Conteiner>
      <main>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
        </Switch>
      </main>
    </Conteiner>
  )
}

export default Routes
