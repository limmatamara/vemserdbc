import React from "react";
import Header from "../Components/Header";
import style from '../../styles/Layout.module.css'

function Sobre () {
  return (
    <>
      <Header/>
      <div className={style.main}>
        <h1>Sobre</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laudantium odio harum atque tenetur, quibusdam placeat accusamus vitae praesentium nihil, suscipit autem excepturi libero quas voluptatibus odit saepe reiciendis neque et ea mollitia laborum. Fuga explicabo similique ad. Tempore, facere?</p>
      </div>
    </>
  );
}

export default Sobre;