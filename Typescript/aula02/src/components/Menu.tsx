import { Link } from "react-router-dom";
import styles from './Menu.module.css';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Menu = () => {
  const {handleLogout, auth} = useContext<any>(AuthContext);
  return (
      <nav className={styles.menu}>
        <ul>
          <li><Link to={"/login"}>Login</Link></li>
          <li><Link to={"/pessoa"}>Pessoa</Link></li>
          <li><Link to ={"/endereco"}>Endereço</Link></li>
          <li>{ auth && <button onClick = {handleLogout}> Sair</button> } </li>
        </ul>
      </nav>
  );
}

export default Menu;