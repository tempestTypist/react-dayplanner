import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faWind, faCloudShowersHeavy, faBolt, faSnowflake } from '@fortawesome/free-solid-svg-icons'


const Weather = () => {

	//move this to .gitignore later
		let APIkey = "442a360c733830bd6ebab1fdd4d285ad";
	//move all the rest to App.js later so i can pass it as props to this component and the banner component
		let requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + 42.404804 + "&lon=" + -82.191040 + "&exclude=minutely,hourly,alerts&units=metric&appid=" + APIkey;
	
		fetch(requestUrl)
			.then(function (response) {
				return response.json();
			})
				.then(function (weatherData) {
					let main = weatherData.current.weather[0].main;
					let windspeed = weatherData.current.wind_speed;
					let sunny = document.getElementById("weather-sunny");
					let cloudy = document.getElementById("weather-cloudy");
					let windy = document.getElementById("weather-windy");
					let rainy = document.getElementById("weather-rainy");
					let thunder = document.getElementById("weather-thunder");
					let snowy = document.getElementById("weather-snowy");
						console.log(weatherData)
						console.log(main)
					if (main === "Clear") {
						sunny.classList.add("current-weather")
					}
					
					if (main === "Clouds") {
						cloudy.classList.add("current-weather")
					} 
					
					if (main === "Rain" || "Drizzle" ) {
						rainy.classList.add("current-weather")
					} 
					
					if (main === "Thunderstorm") {
						thunder.classList.add("current-weather")
					} 
					
					if (main === "Snow") {
						snowy.classList.add("current-weather")
					} 
					
					if (windspeed > 11.11) {
						windy.classList.add("current-weather")
					} else if (windspeed < 11.10) {
						windy.classList.remove("current-weather")
					}

				});
		
  return (
	<Card>
		<div className="weather-container softcard-container">
			<h2>Weather</h2>
			<ul className="weather-icons">
				<li id="weather-sunny">
					<div className="weather-badge">
						<FontAwesomeIcon size="2x" icon={faSun} />
					</div>
				</li>
				<li id="weather-cloudy">
					<div className="weather-badge">
						<FontAwesomeIcon size="2x" icon={faCloud} />	
					</div>
				</li>
				<li id="weather-windy">
					<div className="weather-badge">
						<FontAwesomeIcon size="2x" icon={faWind} />
					</div>
				</li>
				<li id="weather-rainy">
					<div className="weather-badge">
						<FontAwesomeIcon size="2x" icon={faCloudShowersHeavy} />
					</div>
				</li>
				<li id="weather-thunder">
					<div className="weather-badge">
						<FontAwesomeIcon size="2x" icon={faBolt} />
					</div>
				</li>
				<li id="weather-snowy">
					<div className="weather-badge">
						<FontAwesomeIcon size="2x" icon={faSnowflake} />
					</div>
				</li>
			</ul>
		</div>
	</Card>
  );
};

export default Weather;