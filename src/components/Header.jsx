import styled from 'styled-components';
import { useContext } from 'react';
import { userDataContext } from "../contexts/data";
import { AuthContext } from '../contexts/auth';

const Header = () => {
  const { userImage } = useContext(userDataContext);
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <HeaderComponent>
      <h1>TrackIt</h1>
      <TitleImage>
        <p onClick={handleLogout}>Logout</p>
        <img src={userImage} alt="UserImage"/>
      </TitleImage>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  left: 0px;
  top: 0px;

  width: 100%;
  height: 70px;
  padding: 0 18px;

  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  z-index: 3;

  h1 {
    font-family: Playball;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
  }
`;

const TitleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 22.976px;

    color: #FFF;
    cursor: pointer;

    padding-right: 13px;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`


export default Header;