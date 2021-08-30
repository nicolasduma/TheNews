import { Conteiner } from './style.js'
import React from 'react'

function Search() {
  return (
    <Conteiner>
      <input placeholder="Título da notícia" spellCheck="false" maxLength={60} />
      <select>
        <option children="Todas" value="all" defaultValue />
      </select>
      <button>Pesquisar</button>
    </Conteiner>
  )
}

export default Search
