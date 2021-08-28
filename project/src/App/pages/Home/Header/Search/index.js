import './style.css'

import { Conteiner, Input, Select, Option, Button } from '../../../../components'

function Search() {
  return (
    <Conteiner id="Search">
      <Input placeholder="Título da notícia" spellCheck="false" maxLength={60} />
      <Select>
        <Option children="Todas" value="all" selected />
      </Select>
      <Button>Pesquisar</Button>
    </Conteiner>
  )
}

export default Search
