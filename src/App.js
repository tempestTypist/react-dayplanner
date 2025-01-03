import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import Banner from './components/Banner';
import Schedule from './components/Schedule';
// import Notifications from './components/Notifications';
import Weather from './components/Weather';
import TodoList from './components/TodoList';
import Hydration from './components/Hydration';
// import Menu from './components/Menu';
// import Exercise from './components/Exercise';

function App() {
  let APIkey = process.env.REACT_APP_APIKEY;
  let requestUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=" + 42.404804 + "&lon=" + -82.191040 + "&exclude=minutely,hourly,alerts&units=metric&appid=" + APIkey;
  const [weather, setWeather] = useState(null);
  const [windspeed, setWindspeed] = useState(null);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (weatherData) {
        console.log(weatherData)
        const main = weatherData.current.weather[0].main;
        const windspeed = weatherData.current.wind_speed;
        setWeather(main);
        setWindspeed(windspeed);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  if (weather === null || windspeed === null) {
    return <div>Loading...</div>;
  }

  return (
  <main className="flex-shrink-0">

    <Banner weather={weather}></Banner>

    <Container fluid>
      <Row>
        <Col>
          <Schedule setErrorMessage={setErrorMessage} setShow={setShow} />
        </Col>
        <Col>
          {/* <Notifications /> */}
          <Weather weather={weather} windspeed={windspeed} />
          <TodoList setErrorMessage={setErrorMessage} setShow={setShow} />
          <Hydration />
          {/* <Menu />
          <Exercise /> */}
        </Col>
        <Col className="error-container" xs={12}>
          <Toast className="toast-error" onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Body>{errorMessage}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>

  </main>
  );
}

export default App;
