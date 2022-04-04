import { createContext, useState,useEffect } from "react";

import { getData } from "../services/api";

export const userDataContext = createContext();

export const UserDataProvider = ( {children} ) => {
  const [userImage,setUserImage] = useState('');
  const [percentHabits,setPercentHabits] = useState(0);
  const [reload,setReload] = useState([""]);
  const [recovered,setRecovered] = useState(true);

  useEffect( () => {
    const recoveredImage = localStorage.getItem('image');

    if(recoveredImage){
      setUserImage(JSON.parse(recoveredImage));
    }

    setRecovered(false);

  }, [])

  const image = async (email,password) => {
    try{
      const response = await getData(email,password);
      localStorage.setItem("image", JSON.stringify(response.data.image));
      setUserImage(response.data.image);
    } catch{
      console.log("There was an error getting the image from the server");
    }
  }

  return (
    <userDataContext.Provider value= { { image,userImage,percentHabits,setPercentHabits,reload,setReload,recovered } }>
      {children}
    </userDataContext.Provider>
  )
}