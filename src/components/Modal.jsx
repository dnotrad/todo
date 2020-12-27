import React, {useState, useEffect} from 'react';
import s from './Modal.module.css';

function Modal(props) {

    const [todoText, setTodoText] = useState(props.modal.todoText || '');

    return (
        <div className = {props.modal.isOpen ? `${s.modal} ${s.active}` : `${s.modal}`}>
            <div className = {s.title}>
                {props.modal.text}
            </div>
            {props.modal.type == "ADD_TODO" ?  
            <div className="input">
                <input type="text" className = {s.input} placeholder = "Нужно сделать..." autoFocus = {true}
                onChange = { (e) => setTodoText(e.target.value) }  value = {todoText} />
            </div>
            : props.modal.type == "DELETE_TODO" ?
            ''
            : props.modal.type == "EDIT_TODO" ?
            <div className="input">
                <input type="text" className = {s.input} placeholder = "Нужно сделать..." autoFocus = {true}
                onChange = { (e) => setTodoText(e.target.value) }  value = {todoText} />
            </div>   
            : ''
            }
            <div className="buttons">
                {props.modal.type == "ADD_TODO" ?
                <button className = {s.button} onClick = { () => props.addTodo(todoText) } >Добавить</button>
                : props.modal.type == "DELETE_TODO" ?
                <button className = {`${s.button} ${s.delete}`} onClick = { () => props.deleteTodo(props.modal.id) } >Удалить</button>
                : props.modal.type == "EDIT_TODO" ?
                <button className = {`${s.button} ${s.delete}`} onClick = { () => props.changeTodo(props.modal.id, todoText) } >Изменить</button>
                : ''
                }
                <button className = {`${s.button} ${s.cancel}`} onClick = { () => props.setModal({isOpen: false, type: ''}) }>Отмена</button>
            </div>
        </div>
    )
}

export default Modal;





