import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, News, UserAdmin, ListNews, AddNews, ListCategories, AddCategory } from './pages'

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
          <Route exact path={'/app/user/news'} component={ListNews} />
          <Route exact path={'/app/user/news/add'} component={AddNews} />
          <Route exact path={'/app/user/categories'} component={ListCategories} />
          <Route exact path={'/app/user/categories/add'} component={AddCategory} />
        </Switch>
      </main>
    </Router>
  )
}

export default Routes
