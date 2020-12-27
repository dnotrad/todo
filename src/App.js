import React, {useEffect, useState} from 'react';
import Modal from './components/Modal';

import cubsImg from './assets/img/cubs.png'
import Todo from './components/Todo';

function App() {

  const [modal, setModal] = useState({isOpen: false, type: null});
  const [todos, setTodos] = useState([]);

  useEffect( () => {
    setTodos(JSON.parse(localStorage.getItem('todos')) || []);
  }, [] );

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos] );


  const addTodo = (text) => {
    if(text){
      setTodos([ {id: todos.length + 1, text} ,...todos]);
      setModal({isOpen: false });
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter( todo => todo.id !== id ));
    setModal({isOpen: false });
  }

  const changeTodo = (id, text) => {
    if(text){
      let newTodos = todos.map( todo => todo.id == id ? {...todo,text} : todo );
      setTodos(newTodos);
      setModal({isOpen: false });
    }
  }

  let todosElements = todos.map( todo => <Todo setModal = {setModal} key = {todo.id} text = {todo.text} id = {todo.id} />); 

  return (
    <div className = "main">
      <div className = "container">
        <div className = "cubs-img">
          <img src = {cubsImg} alt = "cubes"/>
        </div>
        <h1 className = "title">
          Список дел
        </h1>
        {modal.isOpen 
        ? <Modal modal = {modal} setModal = {setModal} addTodo = {addTodo} deleteTodo = {deleteTodo} changeTodo = {changeTodo} /> : '' }
        <button className = "button add-button" onClick = { () => setModal({isOpen: true, type: 'ADD_TODO', text: "Новое дело"})}>Добавить дело</button>
        {todosElements}
      </div>
    </div>
  )
}

export default App;





