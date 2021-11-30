import { Formik, Field, Form, FormikHelpers } from 'formik';
import { EnderecoDTO } from '../model/EnderecoDTO';
import axios from 'axios';
import styles from '../styles/endereco.module.css'

const Endereco = () => {
    const handleClick = async (value: string) => {
      const data = await axios.get(`https://viacep.com.br/ws/${value}/json/`)
      console.log(data)
    }
  

  const initialValues = {
    cep: '',
    cidade:	'',
    complemento: '',
    estado:	'',
    logradouro:	'',
    numero:	0,
    pais:	''
  }

  return (
    <div className={styles.endereco}>
      <div>
        <h1>Endereço</h1>
        <Formik
          initialValues = {initialValues}
          enableReinitialize = {true}
          onSubmit={(
            values: EnderecoDTO,
            { setSubmitting }: FormikHelpers<EnderecoDTO>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >

          {props => (
            <Form>
              <div className={styles.enderecoContent}>
                <div className={styles.cep}>
                  <label htmlFor="cep">CEP</label>
                  <Field id="cep" name="cep" placeholder="Digite o CEP" />
                  <button onClick={()=> handleClick(props.values.cep)}>Pesquisar CEP</button>
                </div>

                <div>
                  <label htmlFor="cidade">Cidade</label>
                  <Field id="cidade" name="cidade"/>
                </div>

                <div>
                  <label htmlFor="complemento">Complemento</label>
                  <Field id="complemento" name="complemento"/>
                </div>

                <div>
                  <label htmlFor="estado">Estado</label>
                  <Field id="estado" name="estado"/>
                </div>

                <div>
                  <label htmlFor="logradouro">Logradouro</label>
                  <Field id="logradouro" name="logradouro"/>
                </div>

                <div>
                  <label htmlFor="numero">Número</label>
                  <Field id="numero" name="numero"/>
                </div>

                <div>
                  <label htmlFor="pais">País</label>
                  <Field id="pais" name="pais"/>
                </div>
              </div>
            </Form>
          )}          
        </Formik>
        
      </div>
    </div>
  )
}


export default Endereco;