import styled from 'styled-components';
import { useContext } from 'react';
import { userDataContext } from '../contexts/data';
import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";

import { deleteHabit } from '../services/api';

const Habit = ({habitData}) => {
  const weekdays = ["D","S","T","Q","Q","S","S"];
  const { id,name,days } = habitData;
  const {reload,setReload} = useContext(userDataContext);

  const habitDeleter = () => {
    if (window.confirm("Do you really want to delete this habit?")) {
      const deleteTheHabit  = async () => {
        try {
          const response = await deleteHabit(id);
          console.log(response);
          setReload([...reload])
        } catch {
          alert("An error occurred while requesting to delete your habit!");
        }
      }
      deleteTheHabit();
    }
  }


  return (
    <HabitComponent>
      <p>{name}</p>
      <BsTrashWrap onClick={habitDeleter}>
        <IconContext.Provider value={{ color: "#666666", className: "global-class-name", size: "1em" }}>
            <BsTrash />
        </IconContext.Provider>
      </BsTrashWrap>
      <Weekdays>
        {weekdays.map( (item,index) => <Weekday key={index} color={days.indexOf(index)}>{item}</Weekday>)}
      </Weekdays>
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

  padding-left: 15px;

  position: relative;

  p {
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;

    color: #666666;
  }
`

const Weekdays = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`

const Weekday = styled.div(({ color }) => `
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

const BsTrashWrap = styled.div`
  position: absolute;
  top: 11px;
  right: 10px;
`

export default Habit;