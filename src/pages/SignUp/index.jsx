import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoSignUp from "../../assets/Logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from '../../components/Loading';

import { makeSignUp } from '../../services/api';

import { Wrapper,Container,Logo,StyledLink } from "./style";

const SignUp = () => {

  const [ formData, setFormData ] = useState({
    email:"",
    name:"",
    image:"",
    password:""
  });
  const [isLoading, setIsLoading] = useState( {placeholder: "Cadastrar", disabled: false} );
  const navigate = useNavigate();


  const handleSignUp = (e) => {
    e.preventDefault();

    isLoading.placeholder = <Loading />
    isLoading.disabled = true;
    setIsLoading({...isLoading});
    
    const signup = async () => {
      try {
        const response = await makeSignUp({...formData});
        console.log(response);
        setIsLoading(false);
        navigate("/");
      } catch {
        alert("Please fill in the data correctly");
        isLoading.placeholder = "Cadastrar";
        isLoading.disabled = false;
        setIsLoading({...isLoading});
      }
    }
    signup();
    
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Wrapper>
      <Container>
        <Logo src={LogoSignUp} alt="Logo" />
        <form onSubmit={handleSignUp}>
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
            placeholder="senha"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Input 
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            placeholder="nome"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Input 
            type="text"
            value={formData.image}
            onChange={handleInputChange}
            name="image"
            placeholder="foto"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Button type="submit" disableButton={isLoading.disabled} disabled={isLoading.disabled && "disabled"}>
            {isLoading.placeholder}
          </Button>
        </form>
        <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
      </Container>
    </Wrapper>
  );
}

export default SignUp;