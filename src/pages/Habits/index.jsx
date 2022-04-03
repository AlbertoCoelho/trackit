import { useState,useEffect,useContext } from 'react';

import Header from "../../components/Header";
import Menu from '../../components/Menu';
import CreateHabit from '../../components/CreateHabit';
import Habit from '../../components/Habit';
import LoadingPlane from '../../components/LoadingPlane';

import { getHabits } from '../../services/api';

import { userDataContext } from '../../contexts/data';

import { HabitsContainer,HabitsInformation,Title,Button } from './style';

const Habits = () => {
  const [createHabit,setCreateHabit] = useState(false);
  const [habitsCreated,setHabitsCreated] = useState([]);

  const {reload} = useContext(userDataContext);

  useEffect( () => {
    (async () => {
      <LoadingPlane />
      const response = await getHabits();
      setHabitsCreated(response.data);
    }) (); 
  }, [reload]);


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
          { habitsCreated.length > 0 ? 
              <ul>{habitsCreated.map( (item,index) => <Habit key={index} habitData={item} /> )}</ul>
            : <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
          }
      </HabitsContainer>
      <Menu />
    </>
  );
}

export default Habits;