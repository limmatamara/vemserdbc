import styles from '../styles/notfound.module.css';
import error from '../images/error.jpg';

const NotFound = () => {
  return (
    <div className='containerContent'>
      <div className={styles.error}>
        <h1>Página não encontrada!</h1>
        <a href="/"><img src={error} alt="Imagem de Error" /></a>
      </div>
    </div>
  )
}

export default NotFound;