import { Formik, Field, Form, FormikHelpers } from 'formik';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import { LoginDTO } from '../model/LoginDTO';



const Login = () => {
  const {handleLogin} =useContext<any>(AuthContext);
  return (
    <div className="container">
      <h1>Login Cogumelo Shop</h1>
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
          <div>
            <label htmlFor="usuario">Usuário:</label>
            <Field id="usuario" name="usuario" placeholder="Digite seu usuário" />
          </div>

          <div>
            <label htmlFor="senha">Senha:</label>
            <Field id="senha" type="password" name="senha" placeholder="Digite sua senha:" />
          </div>

          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login;

