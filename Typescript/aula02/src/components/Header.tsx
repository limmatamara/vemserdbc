import dog5 from '../images/dog5.jpeg'
import Menu from './Menu';
import styles from './Header.module.css'

const Header = () => {
    return (
      <header className={styles.header}>
        <div className="container">   
          <div className={styles.contentheader}>    
            <div className={styles.logo}>
              <a href="/"> <img src={dog5} alt="Cogumelo"/></a>
              <p>#VemVerDoguinhos</p> 
            </div>  
 
              <Menu/>
            
          </div>
        </div>
      </header>
    )
}

export default Header;