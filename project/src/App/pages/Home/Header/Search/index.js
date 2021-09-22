import { Conteiner } from './style.js'
import { useState } from 'react'

function Search({ setFilter }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('all')

  function startFilter() {
    setFilter({ title, category })
  }

  return (
    <Conteiner>
      <input
        placeholder="Título da notícia"
        spellCheck="false"
        maxLength={60}
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <select value={category} onChange={event => setCategory(event.target.value)}>
        <option children="Todas" value="all" defaultValue />
        <option children="Esporte" value="Esporte" defaultValue />
        <option children="Política" value="Política" defaultValue />
      </select>

      <button onClick={() => startFilter()}>Pesquisar</button>
    </Conteiner>
  )
}

export default Search
