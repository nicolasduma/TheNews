import { Head } from '../../components'
import Header from './Header'
import NewsConteiner from './NewsConteiner'

function Home() {
  return (
    <div className="Home">
      <Head htmlAttributes={{ lang: 'pt-br' }} title="TheNews - Home" />

      <Header />
      <NewsConteiner />
    </div>
  )
}

export default Home
