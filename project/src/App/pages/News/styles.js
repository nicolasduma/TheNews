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
`

export const Title = styled.h1`
  font-size: 4.5rem;
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
