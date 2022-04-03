import Header from "../../components/Header"
import Menu from "../../components/Menu";

import styled from 'styled-components';


const Historic = () => {
  return (
    <>
      <Header />
      <HistoricContainer>
        <Wrapper>
          <Title> Histórico</Title>
          <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
        </Wrapper>
      </HistoricContainer>
      <Menu />
    </>
  );
}

const HistoricContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 70px 0px 0px;
  padding: 28px 18px 0px 18px;
  background-color: #E5E5E5;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;

    color: #666666;
  }
`

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 22.976px;

  color: #126BA5;
  text-transform: capitalize;

  margin-bottom: 17px;
`

export default Historic;