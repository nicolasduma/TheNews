import { useState } from 'react'
import { Link } from 'react-router-dom'

import addCategoty from '../../services/categories/add'
import { Head } from '../../components'

import { Conteiner, Input, Button } from './styled'

function AddCategory() {
  const [lockedFunction, setLockedFunction] = useState(false)
  const [valueInput, setValueInput] = useState('')

  return (
    <Conteiner
      onSubmit={event => {
        event.preventDefault()
        addCategoty(lockedFunction, setLockedFunction, valueInput)
      }}
    >
      <Head title="TheNews - Adicionar Categoria" />
      <Input
        maxLength={35}
        required
        value={valueInput}
        onChange={event => setValueInput(event.target.value)}
      />
      <Button children="Enviar" />
      <Link to={`/app/user`} children="Voltar" />
    </Conteiner>
  )
}

export default AddCategory
