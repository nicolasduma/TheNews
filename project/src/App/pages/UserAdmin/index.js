import { Link } from 'react-router-dom'

import { Conteiner } from './styles'

function UserAdmin() {
  return (
    <Conteiner>
      <Link to="../add/AddNews" children="Adicionar Notícia" />
    </Conteiner>
  )
}

export default UserAdmin
