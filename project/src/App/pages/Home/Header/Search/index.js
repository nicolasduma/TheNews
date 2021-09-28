import { useEffect, useState } from 'react'
import { Conteiner } from './style.js'

import get from '../../../../services/categories/get'

function Search({ setFilter }) {
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('all')

  useEffect(() => {
    const update = async () => setCategories(await get())
    update()
  }, [])

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
        {categories[0]
          ? categories.map(category => (
              <option
                key={`option-${category}`}
                children={category}
                value={category}
                defaultValue
              />
            ))
          : ''}
      </select>

      <button onClick={() => startFilter()}>Pesquisar</button>
    </Conteiner>
  )
}

export default Search
