import styled from "styled-components";

export const Container = styled.button`
  height: 56px;
  width: 184px;
  border-radius: 8px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  background: #00C667;
  color: #f8f8ff;
  padding: 0 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: 0.5s;

  &:hover {
    color: #fff;
    background: #007A3F;
    box-shadow: 0px 0px 17px -8px #000;
  }
`