import styled from 'styled-components';

const HabitsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 70px 0px 121px;
  padding: 28px 18px 0px 18px;
  background-color: #E5E5E5;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const HabitsInformation = styled.div`
  width: 100%;
  height:40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.p`
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 22.976px;

  color: #126BA5;
`

const Button = styled.button`
  width: 40px;
  height: 35px;

  background-color: #52B6FF;

  border-radius: 4.63636px;
  border: none;
  font-size: 26.976px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
`

export {
  HabitsContainer,
  HabitsInformation,
  Title,
  Button
}