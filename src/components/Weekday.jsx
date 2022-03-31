import { useState } from 'react';
import styled from 'styled-components';

const Weekday = ({day,index,days,setDays}) => {
  const [isSelected,setIsSelected] = useState(false);

  function actionWeekday(){
    isSelected ? setIsSelected(false) : setIsSelected(true);
    if(days.find(seatId => seatId === index )){
      days.splice(days.indexOf(index),1);
    } else {
      days.push(index);
    }
    setDays([...days]);
  }

  return (
    <Wrapper color={isSelected} onClick={actionWeekday}>
      {day}
    </Wrapper>
  );
}

const Wrapper = styled.div(({ color }) => `
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color ? "#CFCFCF" : "#FFFFFF"};
  border: 1px solid #D5D5D5;
  box-sizing: border-box;
  border-radius: 5px;

  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 19.976px;

  color: ${color ? "#FFFFFF" : "#DBDBDB"};
`)

export default Weekday;