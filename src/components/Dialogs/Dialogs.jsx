import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>)
}
const Message = (props) => {
    return (

        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Jora'},
        {id: 3, name: 'Vlad'},
        {id: 4, name: 'Arut'},
        {id: 5, name: 'Ilya'},
        {id: 6, name: 'Igor'},
        {id: 7, name: 'Lev'}
    ]

    let messageData = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Хай'},
        {id: 3, message: 'Как дела?'},
        {id: 4, message: 'Норм'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name="Vlad" id="3"/>
                <DialogItem name="Arut" id="4"/>
                <DialogItem name="Ilya" id="5"/>
                <DialogItem name="Igor" id="6"/>
                <DialogItem name="Lev" id="7"/>

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
            </div>

        </div>
    )
}
export default Dialogs;