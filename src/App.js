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
  const [temp, setTemp] = useState(0)
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (weatherData) {
        console.log(weatherData)
        setWeather(weatherData.current.weather[0].main);
        setWindspeed(weatherData.current.wind_speed);
        setTemp(weatherData.current.temp)
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, [requestUrl]);

  // if (weather === null || windspeed === null) {
  //   return <div>Loading...</div>;
  // }

  return (
  <main className="flex-shrink-0">

    <Banner weather={weather}></Banner>

    <Container fluid>
      <Row>
        <Col md={5}>
          <Schedule setErrorMessage={setErrorMessage} setShow={setShow} />
        </Col>
        <Col md={7}>
          {/* <Notifications /> */}
          <Weather weather={weather} temp={temp} windspeed={windspeed} />
          <TodoList setErrorMessage={setErrorMessage} setShow={setShow} />
          <Hydration />
          {/* <Menu />
          <Exercise /> */}
        </Col>
        <Col xs={12} className="error-container">
          <Toast 
            className="toast-error" 
            onClose={() => setShow(false)} 
            show={show} 
            delay={3000} 
            autohide
            >
            <Toast.Body>{errorMessage}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>

  </main>
  );
}

export default App;
