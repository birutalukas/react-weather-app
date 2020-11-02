import React from "react";
import Loading from "../Loading/Loading";

const LocationAndDate = (props) => {
	const today = new Date().toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	return (
		<div className="location-and-date">
			{props.isLoading ? (
				<Loading />
			) : (
				<React.Fragment>
					<div className="location-and-date__location">
						<div>
							{props.city}, {props.country}
							<div>{today}</div>
						</div>
						<div>{props.time}</div>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default LocationAndDate;
