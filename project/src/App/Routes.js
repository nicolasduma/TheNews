import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { auth } from './firebase'

import {
  Home,
  News,
  Login,
  UserAdmin,
  ListNews,
  AddNews,
  ListCategories,
  AddCategory,
  PageNotFound,
} from './pages'

const routesWithLogedUser = (
  <Switch>
    <Route exact path={'/app/user'} component={UserAdmin} key="routeApp" />
    <Route exact path={'/app/user/news'} component={ListNews} key="routeNews" />
    <Route exact path={'/app/user/news/add'} component={AddNews} key="routeNewsAdd" />
    <Route exact path={'/app/user/categories'} component={ListCategories} key="routeCategories" />
    <Route
      exact
      path={'/app/user/categories/add'}
      component={AddCategory}
      key="routeCategoriesAdd"
    />
    <Route component={PageNotFound} />
  </Switch>
)

function Routes({ states }) {
  const [logedUser, setLogedUser] = useState({})

  auth.onAuthStateChanged(user => {
    if (user) setLogedUser(user)
  })

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
          <Route exact path={'/app'}>
            <Login logedUser={logedUser} setLogedUser={setLogedUser} />
          </Route>

          {logedUser.uid === 'UZLLljIBh0Q15eU2stluLsrvtJC2' ? routesWithLogedUser : ''}

          <Route component={PageNotFound} />
        </Switch>
      </main>
    </Router>
  )
}

export default Routes
