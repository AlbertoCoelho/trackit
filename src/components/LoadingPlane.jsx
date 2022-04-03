import {Plane} from "react-loader-spinner";
import styled from "styled-components";


const LoadingPlane = () => {
  return (
    <Wrapper>
      <Plane 
        type="Plane"
        color="green"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LoadingPlane;