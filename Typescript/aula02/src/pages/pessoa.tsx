import { useEffect, useState } from "react";
import ApiAxios from "../Api";
import  { PessoaDTO, PessoasDTO } from '../model/PessoaDTO';
import { Formik, Field, Form, FormikHelpers, useFormik } from 'formik';
import LoadList from "../components/LoadList";
import styles from "../styles/pessoa.module.css"


const Pessoa = () => {

  const [listPessoas, setListPessoas] = useState<PessoaDTO['pessoa']>([]);

  useEffect (() => {
    (async() => {
        const{data} = await ApiAxios.get('/pessoa');
        setListPessoas(data);
    })()

  }, []);

  const [initialValues, setInitialValues] = useState({
    nome:'',
    email:'',
    dataNascimento:'',
    cpf:'',
  })
  const [edit, setEdit] = useState(false);

  const createUser = async (values:PessoasDTO) => {
    await ApiAxios.post('/pessoa', values);
    LoadList();
  }

  const readUser = (pessoa: PessoasDTO) => {
    setInitialValues(pessoa);
    setEdit(true);
  }

  const updateUser = async (values: PessoasDTO) => {
    await ApiAxios.put('/pessoa/'+ values.idPessoa, values);
    LoadList();
    setEdit(false);
  }

  const deleteUser = async (idPessoa: number | undefined) => {
      await ApiAxios.delete('/pessoa/' + idPessoa);
      LoadList();
  }  

  return (
    <div className="containerContent">
      <div className={styles.cadastroContent}>
        <h1>Cadastro</h1>
        <Formik
          initialValues = {initialValues}
          enableReinitialize = {true}      

          onSubmit={async (values: PessoasDTO,
            { setSubmitting }: FormikHelpers<PessoasDTO>) => {
              if (!edit) {
                await createUser(values);
              } else {
                await updateUser(values)
              }
              setInitialValues({
                nome:'',
                email:'',
                dataNascimento:'',
                cpf:'',
              })
              setSubmitting(false);
            }}
        >
          
          <Form>
            <div className={styles.campoContent}>
              <label htmlFor="nome">Nome</label>
              <Field id="nome" name="nome" placeholder="Digite seu nome" />
            </div>

            <div className={styles.campoContent} >
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <Field id="dataNascimento" name="dataNascimento" placeholder="Digite sua data de nascimento" />
            </div>

            <div className={styles.campoContent}>
              <label htmlFor="cpf">CPF</label>
              <Field id="cpf" name="cpf" placeholder="Digite seu CPF" />
            </div>

            <div className={styles.campoContent}>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="Digite seu E-mail" type="email"/>
            </div>

            {!edit && <button type="submit">Cadastrar</button>}
            {edit && <button type="submit">Salvar</button>}
          </Form>
        </Formik>
      </div>

      <div className={styles.pessoas}>
        <h1>Pessoas</h1>
          <div>
            {listPessoas.map(pessoa => (  
            <div className={styles.pessoaContent}>      
            <div key={pessoa.idPessoa}>
              <p><span>Nome:</span>{pessoa.nome} </p>
              <p><span>ID:</span>{pessoa.idPessoa}</p>
              <p><span>Data de Nascimento:</span>{pessoa.dataNascimento}</p>
              <p><span>CPF:</span>{pessoa.cpf}</p>
              <p><span>E-mail:</span>{pessoa.email}</p>         

              <div className={styles.botoes}>
                <div>
                  <button onClick={() => readUser(pessoa)}>Editar</button>
                </div>
                <div>
                  <button onClick={() => deleteUser(pessoa.idPessoa)}>Deletar</button>                  
                </div>
              </div>
            </div>
            </div>
            ))}
          </div>
      </div> 
    </div>
  );
}


export default Pessoa;