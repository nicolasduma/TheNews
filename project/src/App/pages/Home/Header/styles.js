import styled from 'styled-components'
import backgroundHeader from '../../../assets/images/newspaper.jpg'

export const HeaderElement = styled.header`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: relative;
  background-color: rgba(7, 33, 80, 0.93);

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-image: url(${backgroundHeader});
    background-position: -10% 75%;
    background-size: cover;
  }

  h1,
  p {
    color: #ffffff;
    text-align: center;
  }

  h1 {
    font-size: 6rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-family: 'Poppins', 'Raleway', 'Helvetica', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
  }
`