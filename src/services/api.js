import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth'
});

export const makeSignUp = async (formData) => {
  return api.post("/sign-up",formData)
}

export const makeLogin = async (formData) => {
  return api.post("/login",formData)
}

export const getData = async(email,password) => {
  return api.post("/login",{email,password})
}