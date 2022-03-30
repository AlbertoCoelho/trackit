import { createContext, useState } from "react";

import { getData } from "../services/api";

export const userDataContext = createContext();

export const UserDataProvider = ( {children} ) => {
  const [userImage,setUserImage] = useState('');

  const image = async (email,password) => {
    try{
      const response = await getData(email,password);
      setUserImage(response.data.image);
    } catch{
      alert("There was an error getting the image from the server");
    }
  }

  return (
    <userDataContext.Provider value= { { image,userImage } }>
      {children}
    </userDataContext.Provider>
  )
}