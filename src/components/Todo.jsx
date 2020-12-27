import React, {useEffect, useState} from 'react';
import s from './Todo.module.css';
import trash from './../assets/img/trash.svg';
import edit from './../assets/img/edit.svg';


function Todo(props) {
    return (
        <div className = {s.todo}>
            <div className = {s.text}>
                {props.text}
            </div>
            <div className = {s.buttons}>
                <div className = {s.button} onClick = { () => props.setModal({isOpen: true, type: 'EDIT_TODO', 
                todoText: props.text, text: "Изменение дела", id: props.id}) }>
                    <img src = {edit} alt="trash"/>
                </div>
                <div className = {s.button} onClick = { () => props.setModal({isOpen: true, type: 'DELETE_TODO', 
                id: props.id, text: "Удалить дело?"}) }>
                    <img src = {trash} alt="trash"/>
                </div>
            </div>
        </div>
    )
}

export default Todo;





