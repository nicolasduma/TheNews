import { Head } from '../../components'

import { Conteiner, Select, Input } from './styles'

function AddNews() {
  return (
    <Conteiner className="AddNews">
      <Head htmlAttributes={{ lang: 'pt-br' }} title="TheNews - adicionar notícia" />
      <div>
        <h3>Categoria *</h3>
        <Select>
          <option>Esporte</option>
        </Select>
      </div>

      <div>
        <h3>Título *</h3>
        <Input type="text" maxLength={40} />
      </div>

      <div>
        <h3>Descrição *</h3>
        <Input type="text" maxLength={1000} />
      </div>

      <div>
        <h3>Fonte *</h3>
        <Input type="text" maxLength={20} />
      </div>

      <button>Enviar</button>
    </Conteiner>
  )
}

export default AddNews
