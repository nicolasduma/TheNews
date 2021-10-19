import { useEffect, useState } from 'react'

import { Head } from '../../components'
import { Conteiner, Label, Select, Input, TextArea, Button } from './styles'

import get from '../../services/categories/get'

function AddNews() {
  const [categories, setCategories] = useState([])

  const [valueCategory, setValueCategory] = useState('')
  const [valueTitle, setValueTitle] = useState('')
  const [valueDescription, setValueDescription] = useState('')
  const [valueSource, setValueSource] = useState('')

  useEffect(() => {
    const update = async () => setCategories(await get())
    update()
  }, [])

  useEffect(() => {
    if (categories[0]) setValueCategory(categories[0])
  }, [categories])

  return (
    <Conteiner className="AddNews">
      <Head htmlAttributes={{ lang: 'pt-br' }} title="TheNews - adicionar notícia" />
      <div>
        <Label htmlFor="select-category">Categoria *</Label>
        <Select
          id="select-category"
          value={valueCategory}
          onChange={event => setValueCategory(event.target.value)}
        >
          {categories[0]
            ? categories.map(category => (
                <option
                  key={`option-${category}`}
                  value={category}
                  children={category}
                  defaultValue
                />
              ))
            : ''}
        </Select>
      </div>

      <div>
        <Label htmlFor="input-title">Título *</Label>
        <Input
          id="input-title"
          type="text"
          maxLength={40}
          value={valueTitle}
          onChange={event => setValueTitle(event.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="text-description">Descrição *</Label>
        <TextArea
          id="text-description"
          type="text"
          maxLength={1000}
          required
          value={valueDescription}
          onChange={event => setValueDescription(event.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="input-source">Fonte *</Label>
        <Input
          id="input-source"
          type="text"
          maxLength={20}
          value={valueSource}
          onChange={event => setValueSource(event.target.value)}
        />
      </div>

      <Button
        onClick={() => {
          console.log(valueCategory, valueTitle, valueDescription, valueSource)
        }}
        children="Enviar"
      />
    </Conteiner>
  )
}

export default AddNews
