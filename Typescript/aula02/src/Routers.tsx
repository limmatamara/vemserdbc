import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home";
import Login from './pages/login';
import Pessoa from './pages/pessoa';
import Endereco from "./pages/endereco";
import NotFound from "./pages/notfound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { useEffect, useState } from "react";



const Routers = () => {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLogin(true);
      }
    }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header/>
          {
            isLogin ? (
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/pessoa" element={<Pessoa/>}/>
              <Route path="/endereco" element={<Endereco/>}/>
              <Route path="*" element={<NotFound/>} />
            </Routes>
          ) : (          
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/login" element={<Login/>}/> 
              <Route path="*" element={<NotFound/>} />     
            </Routes>
          )}
        <Footer/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routers;