import styled from 'styled-components'

export const Conteiner = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export const Label = styled.label`
  margin-bottom: 8px;
  display: block;
  font-size: 1.8rem;
  cursor: pointer;
`

const inputAndSelect = `
  width: 60vw;
  padding: 5px 5px;
  font-size: 1.7rem;
`

export const Select = styled.select`
  ${inputAndSelect}
`

export const Input = styled.input`
  ${inputAndSelect}
`

export const TextArea = styled.textarea`
  max-width: 60vw;
  min-width: 60vw;
  min-height: 150px;
  max-height: 250px;
`

export const Button = styled.button`
  font-size: 1.6rem;
  padding: 10px 15px;
  cursor: pointer;
`
