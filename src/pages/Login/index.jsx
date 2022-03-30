import { useState } from 'react';

import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

import { Wrapper,Container,Logo,StyledLink } from "./style";
import LoginLogo from "../../assets/Logo.svg";

import { AuthContext } from '../../contexts/auth'
import { userDataContext } from '../../contexts/data';
import { useContext } from 'react';

const Login = () => {

  const [ formData, setFormData ] = useState({
    email:"",
    password:""
  });
  const [isLoading, setIsLoading] = useState( {placeholder: "Entrar", disabled: false} );
  const { login } = useContext(AuthContext);
  const { image } = useContext(userDataContext);

  const handleLogin = (e) => {
    e.preventDefault();

    login(formData.email,formData.password,isLoading,setIsLoading);
    image(formData.email,formData.password);

    isLoading.placeholder = <Loading />
    isLoading.disabled = true;
    setIsLoading({...isLoading});
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Wrapper>
      <Container>
        <Logo src={LoginLogo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            placeholder="email"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Input
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
            placeholder="password"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Button type="submit" disableButton={isLoading.disabled}>
            {isLoading.placeholder}
          </Button>
        </form>
        <StyledLink to="/signup">Já possuí uma conta? Entre</StyledLink>
      </Container>
    </Wrapper>
  );
}

export default Login;