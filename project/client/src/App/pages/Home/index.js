import './styles.css'

import { Head, Conteiner } from '../../components'
import Header from './Header'

function Home() {
  return (
    <Conteiner className="Home">
      <Head htmlAttributes={{ lang: 'pt-br' }}>
        <title>TheNews - Home</title>
      </Head>

      <Header />
    </Conteiner>
  )
}

export default Home
