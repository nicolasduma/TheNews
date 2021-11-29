import { useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'

import login from '../../services/user/login'
import logout from '../../services/user/logout'

import { Head } from '../../components'
import {
  Conteiner,
  Content,
  Form,
  InputEmail,
  InputPassword,
  Button,
  ConteinerLoged,
} from './styles'

function Login({ logedUser, setLogedUser }) {
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPasswordValue, setInputPasswordValue] = useState('')

  const match = useRouteMatch()

  return (
    <Conteiner>
      <Head title="TheNews - Login de usuário" />

      <Content>
        {logedUser.uid !== 'UZLLljIBh0Q15eU2stluLsrvtJC2' ? (
          <Form
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
          </Form>
        ) : (
          <ConteinerLoged>
            <Link children="Controles" to={`${match.url}/user`} />
            <Button
              children="Sair"
              onClick={() => {
                logout()
                setLogedUser({})
              }}
            />
          </ConteinerLoged>
        )}
      </Content>
    </Conteiner>
  )
}

export default Login
