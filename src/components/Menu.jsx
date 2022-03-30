import { useNavigate } from "react-router-dom";

import styled from 'styled-components';
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <MenuComponent>
      <Button onClick={() => navigate("/habits")}><span>Hábitos</span></Button>
        <div className="circularProgressBarBox" onClick={() => navigate("/today")}>
            <CircularProgressbar
              text={"Hoje"}
              styles={buildStyles({
                  textColor: "#fff",
                  textSize: '17.976px',
                  trailColor: `rgba(0,0,0,0.0)`,
                  pathColor: "#52B6FF"
              })} 
            />
        </div>
      <Button onClick={() => navigate("/historic")}><span>Histórico</span></Button>
    </MenuComponent>
  );
}

const MenuComponent = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 33px;

  background-color: #FFFFFF;
  
  position: fixed;
  bottom: 0;
  left: 0;

  .circularProgressBarBox {
    width: 80px;
    height: 80px;

    margin-bottom: 10px;
    width: 91px;
    height: 91px;
    border-radius: 45px;

    background: #52B6FF;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    cursor: pointer;
  }
`

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: rgba(0,0,0,0);

  span {
    font-size: 17.98px;
    color: #52B6FF;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    text-align: center;
  }
`

// const CircularProgressbarWrapper = styled.div`
//     width: 80px;
//     height: 80px;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     cursor: pointer;
// `;

export default Menu;