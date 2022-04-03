import styled from 'styled-components';

const TodayContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 70px 0px 0px;
  padding: 28px 18px 0px 18px;
  background-color: #E5E5E5;

  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 28px;
    margin-bottom: 121px;
  }
`

const DayInformation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

const CurrentDate = styled.p`
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 22.976px;

  color: #126BA5;
  text-transform: capitalize;

  margin-bottom: 5px;
`

const ProgressOfHabits = styled.p(({color}) => `
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;

  color: ${color ? "#8FC549" : "#BABABA"};
`)

export {
  TodayContainer,
  DayInformation,
  CurrentDate,
  ProgressOfHabits
}