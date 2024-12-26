import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {

  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    priority: '',
  });

  const addTodo = (item) => {
    console.log(
      '🚀 ~ file: TodoList.js ~ line 10 ~ addTodoItem ~ item',
      item
    );

    if (!item.text) {
      return;
    }

    // Add the new list item to the existing array of objects
    const newTodo = [item, ...todo];
    console.log(newTodo);

    // Call setTodo to update state with our new set of list items
    setTodo(newTodo);
  };

  const completeTodo = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedTodo = todo.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedTodo);
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

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setTodo((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <Card>
      <div className="todo-container softcard-container">
        <TodoForm 
          onSubmit={addTodo}
          editTodo={editTodo}
          setEdit={setEdit}
          edit={edit} />

        <Todo
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          setEdit={setEdit}
          edit={edit}>
        </Todo>

      </div>
    </Card>
  );
};

export default TodoList;