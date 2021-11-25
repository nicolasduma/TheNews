import { useState } from 'react'

import login from '../../services/user/login'
import { auth } from '../../firebase'

import { Head } from '../../components'
import { Conteiner, Content, InputEmail, InputPassword, Button } from './styles'

function Login() {
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPasswordValue, setInputPasswordValue] = useState('')

  auth.onAuthStateChanged(user => {
    console.log(user ? user : 'Faça o login')
  })

  return (
    <Conteiner>
      <Head title="TheNews - Login de usuário" />
      <Content
        onSubmit={event => {
          event.preventDefault()
          login(inputEmailValue, inputPasswordValue)
        }}
      >
        <InputEmail
          onChange={event => setInputEmailValue(event.target.value)}
          value={inputEmailValue}
          type="email"
          required
        />
        <InputPassword
          onChange={event => setInputPasswordValue(event.target.value)}
          value={inputPasswordValue}
          type="password"
          required
        />
        <Button children="Login" type="submit" />
      </Content>
    </Conteiner>
  )
}

export default Login
