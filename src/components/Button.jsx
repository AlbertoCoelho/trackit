import styled from "styled-components";

const Button = styled.button(({ active,disableButton }) => `
  height: 45px;
  width: 100%;
  background-color: ${ typeof active !== 'boolean' || active ? "#52B6FF" : "#888"};
  opacity: ${ disableButton ? 0.7 : 1 };
  color: #FFFFFF;
  
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Lexend Deca', sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;

  padding: 14px;
  border-radius: 4px;
  border: none;
  cursor: ${ disableButton ? 'not-allowed' : 'pointer' };
  pointer-events: ${ disableButton ? 'none' : 'auto'};
`);

export default Button;