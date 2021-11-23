import React from "react";
import Link from 'next/link';
import style from '../../styles/Header.module.css'

function Header () {
  return (
    <>
    <nav className={style.menu}>
        <p>#VemSerDBC</p>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </ul>
      </nav>
    </>
  )
}

export default Header;