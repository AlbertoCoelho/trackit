import { useState,useEffect,useContext } from 'react';
import { userDataContext } from '../../contexts/data';

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import HabitToday from '../../components/HabitToday';
import LoadingPlane from '../../components/LoadingPlane';

import { getHabitsToday } from '../../services/api';

import { TodayContainer,DayInformation,CurrentDate,ProgressOfHabits } from "./style";


import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

const Today = () => {
  const [habit,setHabit] = useState([]);
  const { percentHabits,reload } = useContext(userDataContext);

  const currentDay = dayjs().locale('pt-br');

  useEffect( () => {
    (async () => {
      const response = await getHabitsToday();
      setHabit(response.data);
    }) (); 
  }, [reload]);

  return (
    <>
      <Header />
      <TodayContainer>
        <DayInformation>
          <CurrentDate>
            {currentDay.format('dddd, DD/MM')}
          </CurrentDate>
          <ProgressOfHabits color={percentHabits}> 
           {percentHabits > 0 ? `${percentHabits}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'} 
          </ProgressOfHabits>
          { habit.length > 0 && 
            <ul>{habit.map( item => <HabitToday key={item.id} habit={item}/> )}</ul>
          }
        </DayInformation>
      </TodayContainer>
      <Menu />
    </>
  )
}

export default Today;