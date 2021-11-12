import { useRouteMatch, Link } from 'react-router-dom'

import { Head } from '../../components'
import { Conteiner } from './styles'

function UserAdmin() {
  const match = useRouteMatch()

  return (
    <Conteiner>
      <Head title="The News - Controle" />
      <Link to={`${match.url}/news`} children="Lista de Notícias" />
      <Link to={`${match.url}/news/add`} children="Adicionar Notícia" />
      <Link to={`${match.url}/categories`} children="Lista de Categorias" />
      <Link to={`${match.url}/categories/add`} children="Adicionar Categoria" />
    </Conteiner>
  )
}

export default UserAdmin
