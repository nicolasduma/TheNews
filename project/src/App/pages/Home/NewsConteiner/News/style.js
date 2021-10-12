import styled from 'styled-components'
import { fonts } from '../../../../styles'

export const Conteiner = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  > div {
    width: 500px;
    height: 250px;
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

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;

    > div {
      height: 200px;
    }
  }

  @media (max-width: 600px) {
    > div {
      width: 85vw;
    }
  }
`

export const Image = styled.img`
  width: 375px;
  height: 250px;
  border-radius: 7px;

  @media (max-width: 800px) {
    width: 350px;
    height: 233.3px;
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 350px) {
    width: 270px;
    height: 180px;
  }
`
