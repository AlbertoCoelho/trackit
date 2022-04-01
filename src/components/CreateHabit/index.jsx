import { useState } from "react";

import Input from "../../components/Input";
import Weekday from "../Weekday";
import Loading from "../Loading";

import { makeHabit } from "../../services/api";

import { Wrapper,CreateHabitContainer,Weekdays,SaveHabit,Button } from "./style";

const CreateHabit = ({setCreateHabit}) => {
  const weekdays = ["D","S","T","Q","Q","S","S"];
  const [habit,setHabit] = useState('');
  const [days,setDays] = useState([]);
  const [loading,setLoading] = useState(false);

  const addHabitPost = {
    name: habit,
    days: days
  }

  const addHabit = async () => {
    if(habit === '' || days.length=== 0){
      return alert("Please make it a habit by filling in all the information!");
    }

    setLoading(true);

    try {
      const response = await makeHabit(addHabitPost);
      console.log(response);
      setCreateHabit(false);
      setLoading(false);
    } catch {
      console.log(addHabitPost);
      alert("There was an error during the request!");
      setLoading(false);
    }
  }



  return (
    <Wrapper>
      <CreateHabitContainer>
        <Input 
          placeholder={"nome do hábito"}
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          disabled={ loading && "disabled" }
        />
        <Weekdays>
          {weekdays.map( (item,index) => <Weekday key={index} day={item} index={index} days={days} setDays={setDays} loading={loading}/>)}
        </Weekdays>
        <SaveHabit>
          <Button className="cancel" onClick={() => setCreateHabit(false)}>Cancelar</Button>
          <Button className="save" onClick={addHabit} disableButton={loading}>
            { loading ? <Loading height={15} width={45} /> : "Salvar" }
          </Button>
        </SaveHabit>
      </CreateHabitContainer>
    </Wrapper>
  );
}

export default CreateHabit;