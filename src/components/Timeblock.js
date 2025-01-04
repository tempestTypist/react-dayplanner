import { Form, Row, Col } from 'react-bootstrap';

function Timeblock({ id, label, reminder, setClass, handleInputChange }) {
  return (
    <Form.Group as={Row} className={setClass}>
      <Form.Label className="col-2 hour text-center" htmlFor={`timeblock-${id}`}>
        {label}
      </Form.Label>
      <Col lg="10" className="description p-0">
        <Form.Control
          as="textarea"
          type="text"
          id={`timeblock-${id}`}
          aria-labelledby={`timeblock-${id}`}
          name="reminder"
          className={setClass}
          defaultValue={reminder}
          onChange={handleInputChange}
        />
      </Col>
    </Form.Group>
  );
}

export default Timeblock;