import GlobalStyle from './styles'

import { Head } from './components'
import Routes from './Routes'

function App() {
  const [allNews, setAllNews] = useState([])

  useEffect(() => {
    const update = async () => setAllNews(await get.all())
    update()
  }, [])

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />

      <Routes states={allNews} />
    </div>
  )
}

export default App
