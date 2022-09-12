import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: auto;

  main {
    position: absolute;
    width: 400px;
    height: 400px;
    top: 250px;
    left: 550px;
    margin: -100px 0 0 0px;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    border-radius: 15px;
  }

  fieldset {
    border: none;
  }

  label {
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #0A94ED;
  }

  input, label {
    border-radius: 5px; 
    display: block;
    vertical-align: middle;
    align: center;
  }

  input {
    width: 300px;
    height: 30px;
    margin-top: 10px;
    border: 1px solid #00C667;
  }

  button { 
    margin-top: 500px;
    margin-left: 900px;
  }

`