import { useState } from "react";

import Input from "../../components/Input";
import Weekday from "../Weekday";

import { Wrapper,CreateHabitContainer,Weekdays,SaveHabit,Button } from "./style";

const CreateHabit = () => {
  const weekdays = ["D","S","T","Q","Q","S","S"];
  const [habit,setHabit] = useState('');

  return (
    <Wrapper>
      <CreateHabitContainer>
        <Input 
          placeholder={"nome do hábito"}
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />
        <Weekdays>
          {weekdays.map( (item,index) => <Weekday key={index} day={item} />)}
        </Weekdays>
        <SaveHabit>
          <Button className="cancel">Cancelar</Button>
          <Button className="save">Salvar</Button>
        </SaveHabit>
      </CreateHabitContainer>
    </Wrapper>
  );
}

export default CreateHabit;