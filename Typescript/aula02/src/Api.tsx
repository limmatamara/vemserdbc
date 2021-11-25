import axios from 'axios';

const ApiAxios = axios.create({
  baseURL: `https://my-application-teste.herokuapp.com`

});

export default ApiAxios;