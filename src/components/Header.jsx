import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderComponent>
      <h1>TrackIt</h1>
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

  h1 {
    font-family: Playball;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;


export default Header;