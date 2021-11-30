import { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'

import { Head } from '../../components'
import { Conteiner } from './styles'

function UserAdmin() {
  const match = useRouteMatch()
  const [url, setUrl] = useState(match.url)

  useEffect(() => {
    if (match.url.slice(-1) !== '/') setUrl(match.url + '/')
  }, [match])

  return (
    <Conteiner>
      <Head title="The News - Controle" />
      <Link to={`${url}news`} children="Lista de Notícias" />
      <Link to={`${url}news/add`} children="Adicionar Notícia" />
      <Link to={`${url}categories`} children="Lista de Categorias" />
      <Link to={`${url}categories/add`} children="Adicionar Categoria" />
      <Link to={`/app`} children="Voltar" />
    </Conteiner>
  )
}

export default UserAdmin
