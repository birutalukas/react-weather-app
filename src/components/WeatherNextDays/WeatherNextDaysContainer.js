import React from "react";
import WeatherNextDaysList from "./WeatherNextDaysList";

const WeatherNextDaysContainer = (props) => {
	const weatherNextDays = props.weatherDaily;
	const weatherNextDaysList = props.weatherNextDaysList;
	for (let i = 8; i < weatherNextDays.length; i += 7) {
		weatherNextDaysList[i] = [Object.entries(weatherNextDays[i])].map(
			(day) => {
				return (
					<WeatherNextDaysList
						isLoading={props.isLoading}
						key={day[0][1]}
						weekDay={new Date(day[0][1] * 1000).toLocaleString(
							"en-us",
							{
								weekday: "long",
							}
						)}
						date={new Date(day[8][1]).toLocaleDateString("en-us", {
							month: "numeric",
							day: "numeric",
						})}
						summary={day[2][1][0].description}
						temp={props.roundToInteger(day[1][1].temp)}
						wind={props.roundToInteger(day[4][1].speed)}
						humidity={day[1][1].humidity}
						sky={day[2][1].description}
						icon={props.iconUrl(day[2][1][0].icon)}
					/>
				);
			}
		);
	}
	return (
		<div className="next-5-days">
			<h2 className="next-5-days__heading">Next 5 days</h2>
			<div className="next-5-days__container">{weatherNextDaysList}</div>
		</div>
	);
};

export default WeatherNextDaysContainer;
