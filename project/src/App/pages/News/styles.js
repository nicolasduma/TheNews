import styled from 'styled-components'
import fonts from '../../styles/index'

export const Conteiner = styled.div`
  width: 100%;
  padding: 30px 20%;

  @media (max-width: 1100px) {
    padding-left: 15%;
    padding-right: 15%;
  }

  @media (max-width: 700px) {
    padding-left: 5%;
    padding-right: 5%;
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

export const Content = styled.div`
  max-width: 850px;
  display: flex;
  flex-direction: column;

  a {
    align-self: center;
    margin-bottom: 40px;
  }
`

export const Title = styled.h1`
  font-size: 4.8rem;

  @media (max-width: 700px) {
    font-size: 3.8rem;
  }
`

export const Cover = styled.img`
  max-width: 100%;
  max-height: calc(566px + (2px / 3));
  margin: 18px 0;
  border-radius: 8px;

  @media (max-width: 450px) {
    margin: 12px 0;
  }
`

export const Description = styled.p`
  font-size: 2rem;
  font-weight: 500;
  font-family: ${fonts.poppins};
`

export const Source = styled.span`
  margin-top: 8px;
  text-align: right;
  font-weight: 700;
  font-size: 1.7rem;

  @media (max-width: 450px) {
    margin-top: 10px;
  }
`

export const NotFoundNews = styled.h2`
  text-align: center;
  font-size: 3.5rem;
`
