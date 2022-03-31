import { useContext } from 'react';

import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { TodayContainer,DayInformation,CurrentDate,ProgressOfHabits } from "./style";

import { userDataContext } from '../../contexts/data';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

const Today = () => {
  const { percentHabits } = useContext(userDataContext);

  const currentDay = dayjs().locale('pt-br');

  return (
    <>
      <Header />
      <TodayContainer>
        <DayInformation>
          <CurrentDate>
            {currentDay.format('dddd, DD/MM')}
          </CurrentDate>
          <ProgressOfHabits color={percentHabits}> {percentHabits > 0 ? `${percentHabits}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'} </ProgressOfHabits>
        </DayInformation>
      </TodayContainer>
      <Menu />
    </>
  )
}

export default Today;