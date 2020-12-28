import React from 'react';
import s from './Header.module.css';
import logo from '../../images/logo.png';
const Header = () => {
   return(
       <header className={s.header}>
        <img src ={logo} alt={'logo'}/>
           <div className={s.logoName}>lightbulb</div>
       </header>
   )
}
export default Header;

