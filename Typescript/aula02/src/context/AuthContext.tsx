import React, { createContext, useState, useEffect } from "react";
import ApiAxios from "../Api";

const AuthContext = createContext({});

interface LoginDTO {
  usuario: string,
  senha: string
}

//TODO separar a interface em 1 arquivo para parar de duplicar

const AuthProvider: React.FC <any> = ({ children }) => {

  const handleLogin = async() => {
      const {data} = await ApiAxios.post('/auth')
  }

  const [auth, setAuth] = useState();
    return (
      <AuthContext.Provider value={{login: false}}>
        {children}
      </AuthContext.Provider>
    )
}  

export {AuthContext, AuthProvider}