import React from "react";
import WeatherHourlyList from "./WeatherHourlyList";

const WeatherHourlyContainer = (props) => {
	const weatherHourlyListLimit = props.weatherHourly.slice(1, 8);
	const weatherHourlyList = weatherHourlyListLimit.map((weatherPerHour) => {
		return (
			<WeatherHourlyList
				isLoading={props.isLoading}
				key={weatherPerHour.dt}
				time={props.roundHourMinute(weatherPerHour.dt_txt)}
				icon={props.iconUrl(weatherPerHour.weather[0].icon)}
				weather={weatherPerHour.weather[0].description}
				temp={props.roundToInteger(weatherPerHour.main.temp)}
			/>
		);
	});
	return (
		<div className="weather-by-hour">
			<h2 className="weather-by-hour__heading">Today's weather</h2>
			<div className="weather-by-hour__container">
				{weatherHourlyList}
			</div>
		</div>
	);
};

export default WeatherHourlyContainer;
