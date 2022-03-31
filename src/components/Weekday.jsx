import { useState } from 'react';
import styled from 'styled-components';

const Weekday = ({day}) => {
  const [isSelected,setIsSelected] = useState(false);

  function actionWeekday(){
    isSelected ? setIsSelected(false) : setIsSelected(true);
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