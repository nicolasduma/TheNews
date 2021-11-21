import styled from 'styled-components'
import { fonts } from '../../styles'

export const Conteiner = styled.div``

export const Content = styled.ul`
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const NewsConteiner = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: solid 1px #000;
`

export const TextConteiner = styled.div`
  display: flex;
  align-items: center;
`

export const TextId = styled.h3`
  font-family: ${fonts.poppins};
  font-size: 1.3rem;
  padding-right: 20px;
`

export const Title = styled.h2`
  border-left: solid 1px black;
  font-size: 2rem;
  padding-left: 20px;
`

export const Button = styled.button`
  padding: 2px 5px;
  font-size: 1.6rem;
  cursor: pointer;
`
