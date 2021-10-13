import styled from 'styled-components'

export const Conteiner = styled.div`
  border-radius: 10px;
  width: 65%;
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    height: 33%;
    border-left: solid 1px #a5a5a5;
    position: absolute;
    left: 64%;
  }

  input,
  select,
  button {
    font-size: 1.6rem;
    height: 30px;
    border: none;
    font-weight: 500;
  }

  input,
  select {
    outline: none;
  }

  input {
    width: 60%;
    padding: 0 1.5%;
  }

  input::placeholder,
  select {
    color: #606060;
  }

  select {
    margin-left: 5%;
    width: 120px;
    padding-right: 12px;
    position: relative;
    cursor: pointer;
  }

  button {
    height: 45px;
    padding: 0 15px;
    border-radius: 0.3em;
    background-color: #5bb640;
    color: #ffffff;
    cursor: pointer;
  }

  @media (max-width: 1230px) {
    select {
      margin-left: 7%;
      width: 100px;
      padding-right: 6px;
      position: relative;
      cursor: pointer;
    }
  }

  @media (max-width: 1030px) {
    width: 70%;
    padding: 8px;

    &::after {
      left: 58%;
    }

    input {
      width: 55%;
    }

    select {
      margin-left: 3%;
    }
  }

  @media (max-width: 850px) {
    border-radius: 9px;

    width: 80%;
    padding: 8px;

    &::after {
      left: 57%;
    }

    input {
      width: 53%;
    }

    select {
      width: 100px;
      margin-left: 1.5%;
    }

    button {
      height: 40px;
      padding: 0 12px;
    }
  }

  @media (max-width: 750px) {
    width: 85%;

    &::after {
      left: 53%;
    }

    input {
      width: 50%;
    }

    button {
      height: 38px;
      padding: 0 10px;
    }
  }

  @media (max-width: 600px) {
    width: 90%;

    select {
      width: 90px;
      margin-left: 4%;
    }
  }

  @media (max-width: 500px) {
    &::after {
      left: 49%;
    }

    input {
      width: 45%;
    }

    button {
      font-size: 1.5rem;
      height: 35px;
      padding: 0 8px;
    }
  }

  @media (max-width: 450px) {
    button {
      font-size: 1.5rem;
      height: 35px;
      width: 35px;

      > img {
        width: 28px;
      }
    }
  }
`
