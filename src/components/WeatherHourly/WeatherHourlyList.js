import React from "react";
import Loading from "../Loading/Loading";

const WeatherHourlyList = (props) => {
	return (
		<div className="weather-by-hour__item">
			<div className="weather-by-hour__hour">
				{props.isLoading ? <Loading /> : props.time}
			</div>
			{props.isLoading ? (
				<Loading />
			) : (
				<img src={props.icon} alt="Mostly sunny" />
			)}
			{props.isLoading ? (
				<Loading />
			) : (
				<div>
					<p className="capitalise">{props.weather}</p>
				</div>
			)}
			<div>{props.isLoading ? <Loading /> : props.temp}&deg;</div>
		</div>
	);
};

export default WeatherHourlyList;
