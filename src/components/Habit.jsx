import styled from 'styled-components';

const Habit = ({habitData}) => {
  const weekdays = ["D","S","T","Q","Q","S","S"];


  return (
    <HabitComponent>
      <h1>Meu lindo hábito</h1>
    </HabitComponent>
  );
}

const HabitComponent = styled.li`
  width: 100%;
  height: 91px;

  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

`

export default Habit;