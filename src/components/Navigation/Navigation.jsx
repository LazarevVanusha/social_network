import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}> Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}> Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/feed' activeClassName={s.active}> Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}> Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}> Настройки</NavLink>
            </div>
        </nav>
    )
}
export default Navigation;