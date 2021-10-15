import { useEffect, useState } from 'react'
import { Conteiner } from './styles.js'

import get from '../../../../services/categories/get'
import imageSearch from '../../../../assets/images/search.png'

function Search({ setFilter }) {
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('all')
  const [contentButton, setContentButton] = useState()

  useEffect(() => {
    if (window.screen.width > 450) setContentButton('Pesquisar')
    else setContentButton(<img src={imageSearch} alt="Search" />)
  }, [])

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

      <button onClick={() => startFilter()}>{contentButton}</button>
    </Conteiner>
  )
}

export default Search
