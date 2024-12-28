import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from './components/Banner';
import Schedule from './components/Schedule';
// import Notifications from './components/Notifications';
import Weather from './components/Weather';
import TodoList from './components/TodoList';
import Hydration from './components/Hydration';
// import Menu from './components/Menu';
// import Exercise from './components/Exercise';


function App() {
  return (
  <main className="flex-shrink-0">

    <Banner></Banner>

    <Container fluid>
      <Row>
        <Col>
          <Schedule />
        </Col>
        <Col>
          {/* <Notifications /> */}
          <Weather />
          <TodoList />
          <Hydration />
          {/* <Menu />
          <Exercise /> */}
        </Col>
      </Row>
    </Container>

  </main>
  );
}

export default App;
