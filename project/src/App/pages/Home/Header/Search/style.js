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
    padding: 10px;
  }

  input::placeholder,
  select {
    color: #606060;
  }

  select {
    margin-left: 7%;
    width: 150px;
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
`
