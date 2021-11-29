import { useEffect, useState } from "react";
import ApiAxios from "../Api";
import  { PessoaDTO, PessoasDTO } from '../model/PessoaDTO';
import { Formik, Field, Form, FormikHelpers, useFormik } from 'formik';
import LoadList from "../components/LoadList";


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
    <div>
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
          <div>
            <label htmlFor="nome">Nome</label>
            <Field id="nome" name="nome" placeholder="Digite seu nome" />
          </div>

          <div>
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <Field id="dataNascimento" name="dataNascimento" placeholder="Digite sua data de nascimento" />
          </div>

          <div>
            <label htmlFor="cpf">CPF</label>
            <Field id="cpf" name="cpf" placeholder="Digite seu CPF" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="Digite seu E-mail" type="email"/>
          </div>

          {!edit && <button type="submit">Cadastrar</button>}
          {edit && <button type="submit">Salvar</button>}
        </Form>
      </Formik>

      <h1>Pessoa</h1>
      <div>
        {listPessoas.map(pessoa => (        
          <div key={pessoa.idPessoa}>
            <p>Nome:{pessoa.nome}</p>
            <p>ID:{pessoa.idPessoa}</p>
            <p>Data de Nascimento:{pessoa.dataNascimento}</p>
            <p>CPF:{pessoa.cpf}</p>
            <p>E-mail:{pessoa.email}</p>         

            <div>
              <button onClick={() => deleteUser(pessoa.idPessoa)}>Deletar</button>
              </div>
            <div>
              <button onClick={() => readUser(pessoa)}>Editar</button>
            </div>
          </div>
          ))}
      </div>  
    </div>
  );
}


export default Pessoa;