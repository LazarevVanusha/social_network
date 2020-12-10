import React from 'react';
import s from './Navigation.module.css';

// let S = {
//     'nav':'Navigation_nav_3ou9Q',
//     'item': 'Navigation_item_3qaF3'
// }
const Navigation = () => {
   return(
       <nav className={s.nav}>
           <div>
               <a className={s.item} href='#'> Profile</a>
           </div>
           <div>
               <a className={s.item} href='#'> Messages</a>
           </div>
           <div>
               <a className={s.item} href='#'>  News</a>
           </div>
           <div>
               <a className={s.item} href='#'> Music</a>
           </div>
           <div>
               <a className={s.item} href='#'> Settings</a>
           </div>
       </nav>
   )
}
export default Navigation;