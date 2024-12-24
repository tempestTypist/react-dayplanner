import { useState } from 'react';
import TodoForm from './TodoForm';

function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    priority: '',
  });

  const submitUpdate = (value) => {
    props.editTodo(edit.id, value);
    setEdit({ id: null, value: '', priority: '' });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.todo.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `todo-item complete ${item.priority}`
          : `todo-item ${item.priority}`
      }
      key={i}>
        
      <div key={item.id} onClick={() => props.completeTodo(item.id)}>
        {item.text}
      </div>

      <div className="icons">
        {console.log(item)}
        <p onClick={() => setEdit({ id: item.id, value: item.text, priority: item.priority })}> ✏️</p>
        <p onClick={() => props.removeTodo(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Todo;
