import './styles.css'
import { Conteiner, Header as HeaderElement, H1, P } from '../../../components'
import Search from './Search'

function Header() {
  return (
    <HeaderElement>
      <Conteiner>
        <H1>TheNews</H1>
        <P>As melhores notícias</P>
      </Conteiner>
      <Search />
    </HeaderElement>
  )
}

export default Header
