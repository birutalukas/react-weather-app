import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import LocationAndDate from "./components/LocationAndDate/LocationAndDate";
import CurrentTemperature from "./components/CurrentTemperature/CurrentTemperature";
import CurrentStats from "./components/CurrentStats/CurrentStats";
import WeatherHourlyContainer from "./components/WeatherHourly/WeatherHourlyContainer";
import WeatherNextDaysContainer from "./components/WeatherNextDays/WeatherNextDaysContainer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date().toLocaleTimeString(),
			isLoading: true,
			city: "",
			country: "",
			temp: "",
			tempMin: "",
			tempMax: "",
			sky: "",
			humidity: "",
			sunrise: "",
			sunset: "",
			windSpeed: "",
			icon: "",
			weatherHourly: [],
			weatherDaily: [],
			weatherNextDaysList: [],
		};
	}

	roundHourMinute = (date) => {
		return new Date(date).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	roundToInteger = (num) => {
		return Math.round(num);
	};

	iconUrl = (iconCode) => {
		return "http://openweathermap.org/img/w/" + iconCode + ".png";
	};

	tick() {
		this.setState({
			time: new Date().toLocaleTimeString(),
		});
	}

	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
		axios
			.get(
				"http://api.openweathermap.org/data/2.5/forecast?q=vilnius&APPID=d8ef7df8a8b99f22316964301ea73877&units=metric"
			)
			.then((response) => {
				this.setState({
					city: response.data.city.name,
					country: response.data.city.country,
					temp: response.data.list[0].main.temp,
					tempMin: response.data.list[0].main.temp_min,
					tempMax: response.data.list[0].main.temp_max,
					sky: response.data.list[0].weather.main,
					humidity: response.data.list[0].main.humidity,
					windSpeed: response.data.list[0].wind.speed,
					sunrise: response.data.city.sunrise,
					sunset: response.data.city.sunset,
					icon: response.data.list[0].weather[0].icon,
					weatherHourly: response.data.list,
					weatherDaily: response.data.list,
					isLoading: false,
				});
			});
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	render() {
		return (
			<main className="main-container">
				<LocationAndDate
					isLoading={this.state.isLoading}
					city={this.state.city}
					country={this.state.country}
					time={this.state.time}
				/>
				<CurrentTemperature
					isLoading={this.state.isLoading}
					temp={this.roundToInteger(this.state.temp)}
					sky={this.state.sky}
					icon={this.iconUrl(this.state.icon)}
				/>
				<CurrentStats
					isLoading={this.state.isLoading}
					tempMin={this.state.tempMin}
					tempMax={this.state.tempMax}
					windSpeed={this.roundToInteger(this.state.windSpeed)}
					humidity={this.state.humidity}
					sunrise={this.roundHourMinute(this.state.sunrise * 1000)}
					sunset={this.roundHourMinute(this.state.sunset * 1000)}
				/>
				<WeatherHourlyContainer
					weatherHourly={this.state.weatherHourly}
					roundHourMinute={this.roundHourMinute}
					iconUrl={this.iconUrl}
					roundToInteger={this.roundToInteger}
				/>
				<WeatherNextDaysContainer
					weatherDaily={this.state.weatherDaily}
					weatherNextDaysList={this.state.weatherNextDaysList}
					roundToInteger={this.roundToInteger}
					iconUrl={this.iconUrl}
				/>
			</main>
		);
	}
}

export default App;
