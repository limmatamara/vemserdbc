import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home";
import Login from './pages/login';
import Pessoa from './pages/pessoa';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";


const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/pessoa" element={<Pessoa/>}/>
        </Routes>
        <Footer/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routers;