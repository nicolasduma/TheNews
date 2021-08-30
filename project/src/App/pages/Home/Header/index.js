import { HeaderElement } from './styles.js'
import Search from './Search'

function Header() {
  return (
    <HeaderElement>
      <div>
        <h1>TheNews</h1>
        <p>As melhores notícias</p>
      </div>
      <Search />
    </HeaderElement>
  )
}

export default Header
