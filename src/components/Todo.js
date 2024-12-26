import { useState } from 'react';
import TodoForm from './TodoForm';

function Todo(props) {

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
        <p onClick={() => props.setEdit({ id: item.id, value: item.text, priority: item.priority })}> ✏️</p>
        <p onClick={() => props.removeTodo(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Todo;
