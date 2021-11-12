import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, News, AddNews, UserAdmin } from './pages'

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

          <Route exact path={'/app/user/'} component={UserAdmin} />
          <Route exact path={'/app/user/news/add'} component={AddNews} />
        </Switch>
      </main>
    </Router>
  )
}

export default Routes
