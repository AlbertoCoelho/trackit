
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api,makeLogin } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ( {children} ) => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect( () => {
    const recoveredUser = localStorage.getItem('user');
    const token = localStorage.getItem("token");

    if(recoveredUser && token){
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

  }, [])

  const login = async (email,password,isLoading,setIsLoading) => {
    const formData = {
      email:email,
      password:password
    }
    try {
      const response = await makeLogin(formData);

      const loggedUser = response.data;
      const token = response.data.token;

      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser(loggedUser);
      navigate("/today");
    } catch{
      alert("User not registered, make your registration!");
      isLoading.placeholder = "Entrar";
      isLoading.disabled = false;
      setIsLoading({...isLoading});
    }
  }

  return (
    <AuthContext.Provider value= { {authenticated: !!user,user,login } }>
      {children}
    </AuthContext.Provider>
  );
}