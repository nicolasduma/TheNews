import styled from 'styled-components'

export const Conteiner = styled.ul`
  min-height: 150px;
  padding: 60px 10%;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 850px) {
    padding-left: 0%;
    padding-right: 0%;
    align-items: center;
  }
`

export const NoNewsFound = styled.h3`
  text-align: center;
  font-size: 2.5rem;
`
