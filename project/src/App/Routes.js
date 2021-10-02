import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, News } from './pages'

function Routes({ states }) {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path={'/news/:id'} component={News} />
        </Switch>
      </main>
    </Router>
  )
}

export default Routes
