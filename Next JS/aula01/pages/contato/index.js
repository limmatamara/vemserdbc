import React from "react";
import Header from "../Components/Header";
import style from '../../styles/Layout.module.css'

function Contato () {
  return (
    <>
      <Header/>
      <div className={style.main}>
        <h1>Contato</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus vero ut id! Voluptate corrupti suscipit quas quod sed neque nobis mollitia porro ea quasi eveniet recusandae, delectus accusantium, a adipisci! Ullam ratione necessitatibus autem quos nobis magnam id sint.</p>
      </div>
    </>
  );
}

export default Contato;