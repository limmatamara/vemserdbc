import './App.css';
import ApiAxios from './Api';
import Routers from './Routers';
import { AuthProvider } from './context/AuthContext';



function App() {
  
  return (
    <div>
      <AuthProvider>
        <Routers/>
      </AuthProvider>
    </div>    
  );
}


export default App;
