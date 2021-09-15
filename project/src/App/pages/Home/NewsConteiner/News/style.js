import styled from 'styled-components'
import { fonts } from '../../../../styles'

export const Conteiner = styled.li`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  > div {
    width: 375px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

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

export const Image = styled.img`
  width: 375px;
  height: 100%;
  border-radius: 7px;
`
