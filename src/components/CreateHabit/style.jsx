import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 20px;
`

const CreateHabitContainer = styled.div`
  width: 100%;
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: #FFFFFF;
  border-radius: 5px;

  padding: 18px 18px 15px;
`

const Weekdays = styled.div`
  width: 100%;

  display: flex;
  margin-top: 10px;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`

const SaveHabit = styled.div`
  width: 100%;

  display: flex;
  padding-top: 25px;
  justify-content: flex-end;
  align-items: center;

  .cancel {
    color: #52B6FF;
    background-color: #FFFFFF;
  }

 .save {
    width: 84px;
    height: 35px;

    background-color: #52B6FF;
    border-radius: 4.63636px;

    margin-left: 23px;
    color: #FFFFFF;
  }
`

const Button = styled.button`
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 15.976px;

  text-align: center;
  border: none;
`

export {
  Wrapper,
  CreateHabitContainer,
  Weekdays,
  SaveHabit,
  Button
}