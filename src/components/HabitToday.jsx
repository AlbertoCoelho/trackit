import { useState,useContext } from 'react';
import styled from 'styled-components';

import { userDataContext } from '../contexts/data';

import { markHabit,markOffHabit,getHabitsToday } from '../services/api';

import { IconContext } from "react-icons";
import { ImCheckboxChecked } from "react-icons/im";

const HabitToday = ({habit}) => {
  const { id,name,done,currentSequence,highestSequence } = habit;
  const [checkDone,setCheckDone] = useState(done); 
  const [checkCurrentSequence,setCheckCurrentSequence] = useState(currentSequence);
  const {reload,setReload,setPercentHabits} = useContext(userDataContext);


  const completeHabit = () => {
    if(checkDone === true){
      const complete  = async () => {
        try {
          const response = await markOffHabit(id);
          console.log(response);
          setCheckDone(false);
          setCheckCurrentSequence(checkCurrentSequence - 1);
          setReload([...reload])

          const responseHabits = await getHabitsToday();
          const habitsDone = responseHabits.data.filter(item => item.done === true).length;
          const totalHabits = responseHabits.data.length;
          setPercentHabits((habitsDone/totalHabits).toFixed(2) *100);
          setReload([...reload]);
        } catch(error) {
          console.log(error.response);
        }
      }
      complete();
    }

    else {
      const uncomplete = async () => {
        try {
          const response = await markHabit(id);
          console.log(response);
          setCheckDone(true);
          setCheckCurrentSequence(checkCurrentSequence + 1);
          setReload([...reload]);

          const responseHabits = await getHabitsToday();
          const habitsDone = responseHabits.data.filter(item => item.done === true).length;
          const totalHabits = responseHabits.data.length;
          setPercentHabits((habitsDone/totalHabits).toFixed(2) *100);
          setReload([...reload]);
        } catch {
          alert("An error occurred while trying to mark the habit");
        }
      }
      uncomplete();
    }
  }

  return (
    <HabitComponent>
      <h1>{name}</h1>
      <SequenceAndRecordText>
        <h2>Sequência atual: <SequenceText check={checkDone}>{currentSequence} {currentSequence > 1 ? "dias" : "dia"}</SequenceText> </h2>
        <h2>Seu recorde: <RecordText current={currentSequence} record={highestSequence}>{highestSequence} {highestSequence > 1 ? "dias" : "dia"}</RecordText></h2>
      </SequenceAndRecordText>
      <ImCheckboxCheckedWrap onClick={completeHabit}>
        <IconContext.Provider value={{ color: `${checkDone ? "#8FC549" : "#EBEBEB" }` , className: "global-class-name", size: "4em" }}>
          <ImCheckboxChecked />
        </IconContext.Provider>
      </ImCheckboxCheckedWrap>
    </HabitComponent>
  );
}


const HabitComponent = styled.li`
  width: 100%;
  height: 94px;

  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding-left: 15px;

  position: relative;

  h1 {
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;

    color: #666666;
  }

  h2 {
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 12.976px;

    color: #666666;
  }

  border-radius: 5px;
`

const ImCheckboxCheckedWrap = styled.div`
  position: absolute;
  top: 13px;
  right: 13px;
`

const SequenceAndRecordText = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    display: flex;
  }
`

const SequenceText = styled.p(({ check }) => `
  display: flex;
  color: ${check ? "#8FC549" : "#666666"};
  padding-left: 4px;
`)

const RecordText = styled.p(({ current,record }) => `
  display: flex;
  color: ${(current > 0 && current === record) ? "#8FC549" : "#666666"};
  padding-left: 4px;
`)

export default HabitToday;