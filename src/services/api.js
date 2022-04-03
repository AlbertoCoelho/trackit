import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'
});

export const makeSignUp = async (formData) => {
  return api.post("/auth/sign-up",formData)
}

export const makeLogin = async (formData) => {
  return api.post("/auth/login",formData)
}

export const getData = async (email,password) => {
  return api.post("/auth/login",{email,password})
}

export const makeHabit = async (addHabitPost) => {
  return api.post("/habits",addHabitPost)
}

export const getHabits = async () => {
  return api.get("/habits");
}

export const deleteHabit = async (id) => {
  return api.delete(`/habits/${id}`)
}

export const getHabitsToday = async () => {
  return api.get("/habits/today");
}

export const getHabitToday = () => {
  return api.get("/habits/today");
}

export const markHabit = (id) => {
  return api.post(`/habits/${id}/check`)
}

export const markOffHabit = (id) => {
  return api.post(`/habits/${id}/uncheck`)
}