import { Link } from "react-router-dom";
import styles from '../styles/home.module.css';
import dog5 from '../images/dog5.jpeg'


const Home = () => {
  return (
    <div className='containerContent'>
      <div className={styles.home}>
        <div>
          <a href="/"> <img src={dog5} alt="Imagem tela principal"/></a>
        </div>  

        <div className={styles.login}>
          <h1>#VemVerDoguinhos</h1>   
          <button><Link to='/login'>Login</Link></button>                    
        </div>
      </div>
    </div>

  )
}

export default Home;