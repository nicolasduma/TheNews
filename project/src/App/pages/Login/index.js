import { useState } from 'react'

import { Head } from '../../components'
import { Conteiner, Content, InputEmail, InputPassword, Button } from './styles'

function Login() {
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPasswordValue, setInputPasswordValue] = useState('')

  return (
    <Conteiner>
      <Head title="TheNews - Login de usuário" />
      <Content>
        <InputEmail
          onChange={event => setInputEmailValue(event.target.value)}
          value={InputEmailValue}
        />
        <InputPassword
          onChange={event => setInputPasswordValue(event.target.value)}
          value={InputPasswordValue}
        />
        <Button />
      </Content>
    </Conteiner>
  )
}

export default Login
