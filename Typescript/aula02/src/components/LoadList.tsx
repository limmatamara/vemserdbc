import { useEffect, useState } from "react";
import ApiAxios from "../Api";
import { PessoaDTO } from "../model/PessoaDTO";

const LoadList = () => {
  const [listPessoas, setListPessoas] = useState<PessoaDTO['pessoa']>([]);

  useEffect(() => {
    LoadListPessoas();      
  }, []);

  const LoadListPessoas = async() => {
    const {data} = await ApiAxios.get('/pessoa');
    setListPessoas(data);
  } 
  
  return (
    <>
     
    </>

  )
}

export default LoadList;