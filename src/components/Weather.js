import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faWind, faCloudShowersHeavy, faBolt, faSnowflake, faSmog } from '@fortawesome/free-solid-svg-icons'

const Weather = () => {
		let APIkey = process.env.REACT_APP_APIKEY || "503207fa616c17e8668caa7738c54705";
		let requestUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=" + 42.404804 + "&lon=" + -82.191040 + "&exclude=minutely,hourly,alerts&units=metric&appid=" + APIkey;
		const weatherMap = [
			  {"Clear": {id: "weather-sunny", 
								   icon: <FontAwesomeIcon size="2x" icon={faSun} />}},
			  {"Windy": {id: "weather-windy", 
								   icon: <FontAwesomeIcon size="2x" icon={faWind} />}},
			   {"Mist": {id: "weather-misty",
								   icon: <FontAwesomeIcon size="2x" icon={faSmog} />}},
		   {"Clouds": {id: "weather-cloudy",
								   icon: <FontAwesomeIcon size="2x" icon={faCloud} />}},
			   {"Rain": {id: "weather-rainy",
								   icon: <FontAwesomeIcon size="2x" icon={faCloudShowersHeavy} />}},
 {"Thunderstorm": {id: "weather-thunder",
								   icon: <FontAwesomeIcon size="2x" icon={faBolt} />}},
			   {"Snow": {id: "weather-snowy",
								   icon: <FontAwesomeIcon size="2x" icon={faSnowflake} />}}];
								
		fetch(requestUrl)
			.then(function (response) {
				return response.json();
			})
				.then(function (weatherData) {
					let main = weatherData.current.weather[0].main;
					let windspeed = weatherData.current.wind_speed;

					const weatherItem = weatherMap.find(weather => Object.keys(weather)[0] === main);
					const weatherId = weatherItem ? weatherItem[main].id : null;

					if (weatherItem) {
							let weatherElement = document.getElementById(weatherId);
							weatherElement.classList.add("current-weather");
					}

					if (weatherId === "weather-thunder") {
						let rainy = document.getElementById("weather-rainy");
					  let thunder = document.getElementById("weather-thunder");

						rainy.classList.add("current-weather");
						thunder.classList.add("current-weather");
					}

					if (windspeed >= 11) {
						let windy = document.getElementById("weather-windy");
						windy.classList.add("current-weather")
					} else if (windspeed < 11) {
						let windy = document.getElementById("weather-windy");
						windy.classList.remove("current-weather")
					}
				});
		
  return (
	<Card>
		<div className="weather-container softcard-container">
			<h2>Weather</h2>
			<ul className="weather-icons">
				{weatherMap.map((weather) => {
					const key = Object.keys(weather)[0]; 
					const { id, icon } = weather[key];
					return (
						<li id={id} key={id}>
							<div className="weather-badge">
								{icon}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	</Card>
  );
};

export default Weather;