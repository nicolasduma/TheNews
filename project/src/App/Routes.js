import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, News } from './pages'

function Routes({ states }) {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path={['/', '/home']}>
            <Home allNews={states.allNews} setAllNews={states.setAllNews} />
          </Route>
          <Route exact path={'/news/:id'}>
            <News allNews={states.allNews} />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default Routes
