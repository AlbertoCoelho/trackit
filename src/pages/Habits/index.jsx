import { useState,useEffect,useContext } from 'react';

import Header from "../../components/Header";
import Menu from '../../components/Menu';
import CreateHabit from '../../components/CreateHabit';

import { HabitsContainer,HabitsInformation,Title,Button } from './style';

const Habits = () => {
  const [createHabit,setCreateHabit] = useState(false);


  return (
    <>
      <Header />
      <HabitsContainer>
        <HabitsInformation>
          <Title>
            Meus hábitos
          </Title>
          <Button onClick={() => setCreateHabit(true)}>+</Button>
        </HabitsInformation>
        {createHabit && <CreateHabit setCreateHabit={setCreateHabit} />}
      </HabitsContainer>
      <Menu />
    </>
  );
}

export default Habits;