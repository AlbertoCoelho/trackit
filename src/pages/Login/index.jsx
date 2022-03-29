import { Wrapper,Container,Logo,StyledLink } from "./style";
import LoginLogo from "../../assets/Logo.svg";

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={LoginLogo} alt="Logo" />
        <form>

        </form>
        <StyledLink to="/signup">Já possuí uma conta? Entre</StyledLink>
      </Container>
    </Wrapper>
  );
}

export default Login;