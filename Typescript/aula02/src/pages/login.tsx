import { Formik, Field, Form, FormikHelpers } from 'formik';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import { LoginDTO } from '../model/LoginDTO';
import styles from '../styles/login.module.css';



const Login = () => {
  const {handleLogin} =useContext<any>(AuthContext);
  return (
    <div className="containerContent">
      <div  className={styles.login}>
        <h1>Login</h1>
        <Formik
          initialValues={{
            usuario: '',
            senha: ''
          }}
          onSubmit={(
            values: LoginDTO,
            { setSubmitting }: FormikHelpers<LoginDTO>
          ) => {
              handleLogin(values);
              setSubmitting(false);
            }
          }
        >
          <Form>
            <div className={styles.formulario}>
              <div className={styles.form}>
                <label htmlFor="usuario">Usuário:</label>
                <Field id="usuario" name="usuario" placeholder="Digite seu usuário" />
              </div>

              <div className={styles.form}>
                <label htmlFor="senha">Senha:</label>
                <Field id="senha" type="password" name="senha" placeholder="Digite sua senha" />
              </div>

              <button type="submit">Entrar</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login;

