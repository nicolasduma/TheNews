import { useEffect, useState } from 'react'

import { Head } from '../../components'
import { getWithId } from '../../services/categories/get'
import deleteCategory from '../../services/categories/delete'

import { Conteiner, Content, ListItem, Text, Button } from './styled'

function ListCategories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const update = async () => setCategories(await getWithId())

    update()
  }, [])

  return (
    <Conteiner>
      <Head title="TheNews - Lista de Categorias" />
      <Content>
        {categories[0]
          ? categories.map(category => (
              <ListItem key={category[0]}>
                <Text children={category[1]} />
                <Button children="Deletar" onClick={() => deleteCategory(category[0])} />
              </ListItem>
            ))
          : ''}
      </Content>
    </Conteiner>
  )
}

export default ListCategories
