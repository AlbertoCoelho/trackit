import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  min-height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #FFFFFF;
`

const Logo = styled.img`
  width: 180px;
  height: 178.38px;
  margin-top: 68px;
  margin-bottom: 35px;
`

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
  margin-top: 25px;

  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 13.976px;
  text-align: center;
  text-decoration-line: underline;
`;

export {
  Wrapper,
  Container,
  Logo,
  StyledLink
}