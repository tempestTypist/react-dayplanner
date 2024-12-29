import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faWind, faCloudShowersHeavy, faBolt, faSnowflake, faSmog } from '@fortawesome/free-solid-svg-icons'

const Weather = ({ weather, windspeed }) => {
	const weatherMap = [
			 {"Clear": {id: "sunny", 
									icon: <FontAwesomeIcon size="2x" icon={faSun} />}},
			 {"Windy": {id: "windy", 
									icon: <FontAwesomeIcon size="2x" icon={faWind} />}},
		 		{"Mist": {id: "misty",
									icon: <FontAwesomeIcon size="2x" icon={faSmog} />}},
	 		{"Clouds": {id: "cloudy",
									icon: <FontAwesomeIcon size="2x" icon={faCloud} />}},
		 		{"Rain": {id: "rainy",
									icon: <FontAwesomeIcon size="2x" icon={faCloudShowersHeavy} />}},
{"Thunderstorm": {id: "thunder",
									icon: <FontAwesomeIcon size="2x" icon={faBolt} />}},
		 		{"Snow": {id: "snowy",
									icon: <FontAwesomeIcon size="2x" icon={faSnowflake} />}}
	];
	const weatherItem = weatherMap.find(w => Object.keys(w)[0] === weather);
	const weatherId = weatherItem ? weatherItem[weather].id : null;

		useEffect(() => {
			if (weatherItem) {
				let weatherElement = document.getElementById(weatherId);
				weatherElement.classList.add("current-weather");
			}
		
			if (weatherId === "thunder") {
				let rainy = document.getElementById("rainy");
				let thunder = document.getElementById("thunder");
		
				rainy.classList.add("current-weather");
				thunder.classList.add("current-weather");
			}
		
			if (windspeed >= 11) {
				let windy = document.getElementById("windy");
				windy.classList.add("current-weather")
			} else if (windspeed < 11) {
				let windy = document.getElementById("windy");
				windy.classList.remove("current-weather")
			}
		}, [weatherItem, weatherId, windspeed]);

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