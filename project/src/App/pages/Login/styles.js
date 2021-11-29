import styled from 'styled-components'

export const Conteiner = styled.div``

export const Content = styled.div`
  > :nth-child(1) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`

export const Form = styled.form``

const inputs = `
  width: 40%;
  padding: 5px; 10px;
  font-size: 18px;
`

export const InputEmail = styled.input`
  ${inputs}
`

export const InputPassword = styled.input`
  ${inputs}
`

export const Button = styled.button`
  ${inputs}
  width: 20%;
  cursor: pointer;
`

export const ConteinerLoged = styled.div``
