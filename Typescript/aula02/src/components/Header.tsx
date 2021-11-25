import logo from '../images/Logo.jpg'
import Menu from './Menu';
import styles from './Header.module.css'

const Header = () => {
    return (
      <header className={styles.header}>
        <div className="container">   
          <div className={styles.contentheader}>    
            <a href="/"> <img src={logo} alt="Cogumelo"/></a>       
            <Menu/>
          </div>
        </div>
      </header>
    )
}

export default Header;