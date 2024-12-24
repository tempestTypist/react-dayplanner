import { Form, Row, Col, Button } from 'react-bootstrap';

function Timeblock(props) {
  return (
    <Form className="timeblock-row" onSubmit={props.handleFormSubmit}>
      <Form.Group as={Row}>
        <Form.Label className="col-2 hour text-center pt-4">{props.hour}{props.ampm}</Form.Label>
        <Col lg="9" className="description p-0">
        <Form.Group
            as="textarea"
            type="text"
            id={props.id} 
            className={props.setClass(props.time)} 
            name="reminder"
            value={props.reminder}
            onChange={props.handleInputChange}>
        </Form.Group>
        </Col>
        <Button type="submit" className="col-1 saveBtn"></Button>
      </Form.Group>
    </Form>
  );
}

export default Timeblock;