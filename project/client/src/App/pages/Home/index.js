import './styles.css'

import { Head, Conteiner } from '../../components'
import Header from './Header'
import NewsConteiner from './NewsConteiner'

function Home() {
  return (
    <Conteiner className="Home">
      <Head title="TheNews - Home" />

      <Header />
      <NewsConteiner />
    </Conteiner>
  )
}

export default Home
