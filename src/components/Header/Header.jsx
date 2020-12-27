import React from 'react';
import s from './Header.module.css';
const Header = () => {
   return(
       <header className={s.header}>
        <img src = 'http://png-images.ru/wp-content/uploads/2015/01/bulb_PNG1239.png'/>
           <div className={s.logoName}>lightbulb</div>
       </header>
   )
}
export default Header;

