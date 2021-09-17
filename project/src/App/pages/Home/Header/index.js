import { HeaderElement } from './styles.js'
import Search from './Search'

function Header({ setFilter }) {
  return (
    <HeaderElement>
      <div>
        <h1>TheNews</h1>
        <p>As melhores notícias</p>
      </div>
      <Search setFilter={setFilter} />
    </HeaderElement>
  )
}

export default Header
