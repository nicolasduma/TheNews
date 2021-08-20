import './styles.css'

import { Head, Conteiner } from './../../components'

function Home(props) {
  return (
    <Conteiner className="Home" {...props}>
      <Head htmlAttributes={{ lang: 'pt-br' }}>
        <title>TheNews - Home</title>
      </Head>

      <p>Test</p>
    </Conteiner>
  )
}

export default Home
