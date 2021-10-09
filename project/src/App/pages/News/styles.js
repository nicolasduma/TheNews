import styled from 'styled-components'
import fonts from '../../styles/index'

export const Conteiner = styled.div``

export const Content = styled.div`
  width: 100%;
  padding: 30px 20%;
  display: flex;
  flex-direction: column;

  a {
    align-self: center;
    margin-bottom: 40px;
  }

  @media (max-width: 1100px) {
    padding-left: 15%;
    padding-right: 15%;
  }

  @media (max-width: 700px) {
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (max-width: 500px) {
    padding-left: 7.5%;
    padding-right: 7.5%;
  }

  @media (max-width: 300px) {
    padding-left: 6%;
    padding-right: 6%;
  }
`

export const Title = styled.h1`
  font-size: 4.5rem;

  @media (max-width: 700px) {
    font-size: 3.8rem;
  }
`

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  font-family: ${fonts.poppins};
`

export const Source = styled.span`
  text-align: right;
  font-weight: 700;
  font-size: 1.5rem;
`

export const NotFoundNews = styled.h2`
  text-align: center;
  font-size: 3rem;
`
