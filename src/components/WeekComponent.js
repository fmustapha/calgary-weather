import React, { Component } from "react";
// import axios from "axios";
import openWeatherMap from "../services/openWeatherMap";
import getIcon from "../services/weatherIcons";
import DayComponent from "./DayComponent";

//Stylesheet
import "../stylesheets/WeekComponent.css";

require("dotenv").config();

class WeekComponent extends Component {
  state = { forecast: [], error: {}, status: "initial" };

  componentDidMount() {
    const cityId = process.env.REACT_APP_CITY_ID;
    const apiKey = process.env.REACT_APP_KEY;
    this.getWeatherDetails(cityId, apiKey);
  }

  getWeatherDetails = async (id, key) => {
    this.setState({ forecast: [], status: "loading" });
    try {
      const forecast = await openWeatherMap(id, key);
      this.setState({ forecast: forecast.list, status: "completed" });
    } catch (error) {
      this.setState({status: "error" });
    }
  };

  render() {
    const { forecast, status } = this.state;
    return (
      <div className="wrapper">
        {status === "loading" && <h3 id="load">Loading forecast...</h3>}
        {status === "completed" && forecast.length === 0 && (
          <h3 id="no-info">
            No weather information available for now, please visit site later.
          </h3>
        )}
        {status === "error" && (
          <h3 id="error-info">
            An error occured while loading forecast data...please visit site
            later.
          </h3>
        )}

        {forecast.map((details, index) => {
          const weatherIcon = getIcon(details.weather[0].icon);
          return (
            <DayComponent key={index} icon={weatherIcon} details={details} />
          );
        })}
      </div>
    );
  }
}

export default WeekComponent;
