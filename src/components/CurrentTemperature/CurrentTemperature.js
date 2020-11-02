import React from "react";
import Loading from "../Loading/Loading";

const CurrentTemperature = (props) => {
	return (
		<div className="current-temperature">
			<div className="current-temperature__icon-container">
				{props.isLoading ? (
					<Loading />
				) : (
					<img
						src={props.icon}
						className="current-temperature__icon"
						alt=""
					/>
				)}
			</div>
			<div className="current-temperature__content-container">
				<div className="current-temperature__value">
					{props.isLoading ? <Loading /> : props.temp} &deg;
				</div>
				<div className="current-temperature__summary">{props.sky}</div>
			</div>
		</div>
	);
};

export default CurrentTemperature;
