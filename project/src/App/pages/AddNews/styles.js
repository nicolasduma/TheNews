import styled from 'styled-components'

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Label = styled.label`
  font-size: 2.2rem;
`

const inputAndSelect = `
  width: 40vw;
`

export const Select = styled.select`
  ${inputAndSelect}
`

export const Input = styled.input`
  ${inputAndSelect}
`
