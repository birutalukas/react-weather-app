import React from "react";
import Loading from "../Loading/Loading";

const CurrentStats = (props) => {
	return (
		<div className="current-stats">
			<div>
				<div className="current-stats__value">
					{props.isLoading ? <Loading /> : props.tempMax}&deg;
				</div>
				<div className="current-stats__label">High</div>
				<div className="current-stats__value">
					{props.isLoading ? <Loading /> : props.tempMin}&deg;
				</div>
				<div className="current-stats__label">Low</div>
			</div>
			<div>
				<div className="current-stats__value">
					{props.isLoading ? <Loading /> : props.windSpeed}m/s
				</div>
				<div className="current-stats__label">Wind</div>
				<div className="current-stats__value">{props.humidity}%</div>
				<div className="current-stats__label">Humidity</div>
			</div>
			<div>
				<div className="current-stats__value">
					{props.isLoading ? <Loading /> : props.sunrise}
				</div>
				<div className="current-stats__label">Sunrise</div>
				<div className="current-stats__value">
					{props.isLoading ? <Loading /> : props.sunset}
				</div>
				<div className="current-stats__label">Sunset</div>
			</div>
		</div>
	);
};

export default CurrentStats;
