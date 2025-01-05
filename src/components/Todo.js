import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamationCircle, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ todo, completeTodo, setEdit, removeTodo }) => {

  return todo.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `todo-item complete ${item.priority}`
          : `todo-item ${item.priority}`
      }
      key={i}>
        
      <div key={item.id} onClick={() => completeTodo(item.id)}>
        <FontAwesomeIcon 
          icon={
            item.isComplete 
              ? faCheck
              : faExclamationCircle} className="me-2" />
        {item.text}
      </div>

      <div className="icons">
        <p onClick={() => setEdit({ id: item.id, value: item.text, priority: item.priority }, console.log("setEdit: " + item.id + " " + item.text + " " + item.priority))}> <FontAwesomeIcon icon={faPencilAlt} className="me-2" /></p>
        <p onClick={() => removeTodo(item.id)}> <FontAwesomeIcon icon={faTrash} /></p>
      </div>
    </div>
  ));
};