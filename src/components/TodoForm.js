import { useState, useEffect } from 'react';
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
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setPriority(props.edit.priority)
  }, [props.edit.id, props.edit.priority]);

  return (
    <div>
			<Form className="todo-form" onSubmit={handleSubmit}>
				<Form.Group as={Row}>
					<Col xs={12} xl={8}>
            <Form.Control 
            type="text" 
            placeholder={props.edit.id ? props.edit.value : "Add item..."}
            value={input}
            name="Todo"
            className="todo-input"
            onChange={handleChange} />
					</Col>
					<Col xs={6} xl={2}>
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
					<Col xs={6} xl={2}>
						<Button type="submit" className="dropbtn">
                {props.edit.id ? "Update" : "Add"}
            </Button>
					</Col>
				</Form.Group>
			</Form>
    </div>
  );
}

export default TodoForm;
