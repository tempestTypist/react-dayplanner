import { useState } from 'react';
import { Row, Col, Form, Dropdown, Button } from 'react-bootstrap';


function TodoForm(props) {
  const [input, setInput] = useState('');
  let [priority, setPriority] = useState('');

  const priorityLevel = ['high', 'medium', 'low']

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!priority) {
      priority = 'low';
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      priority: priority,
    });

    setInput('');
    setPriority('');
		console.log("input submitted")
  };

  const handleChange = (e) => {
    setInput(e.target.value);
		console.log("shits changed")
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
			<Form className="todo-form" onSubmit={handleSubmit}>
				<Form.Group as={Row}>
					<Col md={8}>
						<Form.Control 
							type="text" 
							placeholder="Add item..."
							value={input}
							name="Todo"
							className="todo-input"
							onChange={handleChange} />
					</Col>
					<Col md={2}>
            <Dropdown className="p-0">
              <Dropdown.Toggle className={`dropbtn ${priority}`}>
                {priority || 'Priority'}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setPriority(priorityLevel[0])}>High</Dropdown.Item>
                <Dropdown.Item onClick={() => setPriority(priorityLevel[1])}>Medium</Dropdown.Item>
                <Dropdown.Item onClick={() => setPriority(priorityLevel[2])}>Low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
					</Col>
					<Col md={2}>
						<Button type="submit" className="bucket-button">Add</Button>
					</Col>
				</Form.Group>
			</Form>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${priority}`}>
            {priority || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setPriority(priorityLevel[0])}>High</p>
            <p onClick={() => setPriority(priorityLevel[1])}>Medium</p>
            <p onClick={() => setPriority(priorityLevel[2])}>Low</p>
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default TodoForm;
