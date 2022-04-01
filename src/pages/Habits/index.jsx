import { useState,useEffect } from 'react';

import Header from "../../components/Header";
import Menu from '../../components/Menu';
import CreateHabit from '../../components/CreateHabit';
import Habit from '../../components/Habit';

import { getHabits } from '../../services/api';

import { HabitsContainer,HabitsInformation,Title,Button } from './style';

const Habits = () => {
  const [createHabit,setCreateHabit] = useState(false);
  const [habitsCreated,setHabitsCreated] = useState([]);

  useEffect( () => {
    (async () => {
      const response = await getHabits();
      setHabitsCreated(response.data);
    }) (); 
  }, []);


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
        { habitsCreated.length === 0 ? 
             <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
          :  <ul>{habitsCreated.map( (item,index) => <Habit key={index} habitData={item} /> )}</ul>
        }
      </HabitsContainer>
      <Menu />
    </>
  );
}

export default Habits;