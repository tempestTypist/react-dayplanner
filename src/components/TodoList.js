import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import TodoForm from './TodoForm';
import { Todo } from './Todo';

const TodoList = (props) => {

  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    priority: '',
  });

  const addTodo = (item) => {
    if (!item.text) {
      props.setErrorMessage("To-do list item can't be blank!");
      props.setShow(true);
      return;
    }

    const newTodo = [item, ...todo];
    setTodo(newTodo);
  };

  const completeTodo = (id) => {
    let updatedTodo = todo.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setTodo(updatedTodo);
  };

  const removeTodo = (id) => {
    const updatedTodo = [...todo].filter((item) => item.id !== id);
    setTodo(updatedTodo);
  };

  const editTodo = (itemId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTodo((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  const submitUpdate = (value) => {
    editTodo(edit.id, value);
    setEdit({ id: null, value: '', priority: '' });
  };

  return (
    <Card>
      <div className="todo-container softcard-container">
        <TodoForm 
          onSubmit={edit.id ? submitUpdate : addTodo}
          edit={edit} />

        {edit.id ? <></> : <Todo
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          setEdit={setEdit}>
        </Todo>}
      </div>
    </Card>
  );
};

export default TodoList;