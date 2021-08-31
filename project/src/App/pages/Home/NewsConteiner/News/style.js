import styled from 'styled-components'
import { fonts } from '../../../../styles'

export const Conteiner = styled.li`
  display: flex;

  h2 {
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    font-family: ${fonts.poppins};
    color: #505050;
  }
`

export const Image = styled.image`
  width: 400px;
  height: 250px;
  background-color: #45da78;
`
