import React, { createContext, useState, useEffect } from "react";
import ApiAxios from "../Api";
import { LoginDTO } from "../model/LoginDTO";




const AuthContext = createContext({});

const AuthProvider: React.FC<any>=({ children }) => {

  useEffect (() =>{
    const token = localStorage.getItem('token');
    if (token) {
      ApiAxios.defaults.headers.common['Authorization'] = token;
      setAuth(true);
    }
    setLoading(false);    
  }, []);

  const [auth, setAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLogin = async(user:LoginDTO) => {
      const {data} = await ApiAxios.post('/auth', user);
      localStorage.setItem('token', data);
      ApiAxios.defaults.headers.common['Authorization']= data;
      window.location.href = "/pessoa";
      setAuth(true);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    ApiAxios.defaults.headers.common['Authorization']= '';
    window.location.href = "/login";
   
    setAuth(false);
  }

  if (loading) {
   return (
   <h1>Loading</h1>)
  }

  return (
    <AuthContext.Provider value={{ auth, handleLogin, handleLogout, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}  

export {AuthContext, AuthProvider}