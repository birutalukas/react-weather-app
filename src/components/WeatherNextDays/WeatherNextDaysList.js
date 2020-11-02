import React from "react";

const WeatherNextDays = (props) => {
	return (
		<div className="next-5-days__row">
			<div className="next-5-days__date">
				{props.weekDay}
				<div className="next-5-days__label">{props.date}</div>
			</div>

			<div className="next-5-days__low capitalise">{props.summary}</div>

			<div className="next-5-days__high">
				{props.temp}&deg;
				<div className="next-5-days__label">Temperature</div>
			</div>

			<div className="next-5-days__icon">
				<img src={props.icon} alt="" />
				{props.sky}
			</div>

			<div className="next-5-days__rain">
				{props.humidity}%
				<div className="next-5-days__label">Humidity</div>
			</div>

			<div className="next-5-days__wind">
				{props.wind}m/s
				<div className="next-5-days__label">Wind</div>
			</div>
		</div>
	);
};

export default WeatherNextDays;
