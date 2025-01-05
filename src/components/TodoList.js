import { useState, useEffect, useMemo } from "react";
import { Card } from 'react-bootstrap';
import TodoForm from './TodoForm';
import { Todo } from './Todo';

const TodoList = (props) => {
  const todos = useMemo(() => [], []);
  const [todo, setTodo] = useState([todos]);
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

    let newTodo = [item, ...todo];
    setTodo(newTodo);
    saveToLocalStorage(newTodo);
  };

  const completeTodo = (id) => {
    let updatedTodo = todo.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setTodo(updatedTodo);
    saveToLocalStorage(updatedTodo);
  };

  const removeTodo = (id) => {
    let updatedTodo = [...todo].filter((item) => item.id !== id);
    setTodo(updatedTodo);
    saveToLocalStorage(updatedTodo);
  };

  const editTodo = (itemId, newValue, newPriority) => {
    let itemValue = !newValue ? edit.value : newValue

    setTodo((prevValues) => {
      const newValues = prevValues.map((item) =>
        item.id === itemId ? { ...item, id: itemId, text: itemValue, priority: newPriority } : item
      );
      saveToLocalStorage(newValues);
      return newValues;
    });
  };

  const submitUpdate = (value) => {
    editTodo(edit.id, value.text, value.priority);
    setEdit({ id: null, value: '', priority: '' });
  };

  const saveToLocalStorage = (value) => {
    if (localStorage) {
      localStorage.setItem("todo", JSON.stringify(value));
    }
  };

  useEffect(() => {
		try {
			const storedTodos = localStorage.getItem("todo");
			if (storedTodos) {
				setTodo(JSON.parse(storedTodos));
			} else {
				setTodo(todos);
			}
		} catch (error) {
			console.error('Failed to load todos from localStorage:', error);
			setTodo(todos);
		}
	}, [todos]);

  return (
    <Card>
      <div className="todo-container softcard-container">
        <TodoForm 
          onSubmit={edit.id ? submitUpdate : addTodo}
          edit={edit} />

        {edit.id ? <></> : 
        <Todo
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