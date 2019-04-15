import React, { Component } from 'react';
import axios from 'axios';
import getIcon from '../services/weatherIcons'
import DayComponent from './DayComponent'

//Stylesheet
import '../stylesheets/WeekComponent.css';

require('dotenv').config();

class  WeekComponent extends Component {
    state = { forcast: [], error:{}, status: "initial" }

    componentDidMount() {
        this.getWeatherDetails()
    }

    getWeatherDetails = () => {

        this.setState({forcast: [], status: "loading"});
        const cityId = process.env.REACT_APP_CITY_ID;
        const apiKey = process.env.REACT_APP_KEY;
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${apiKey}&units=metric&cnt=12`)
            .then(response => this.setState({forcast:response.data.list, status: "completed"}))
            .catch(error => this.setState({error:error, status: "error"}))
    }
 
    render() {
        const { forcast, status } = this.state;
        return (
            <div className="wrapper">
            {status === "loading" && <h3 id="load">Loading forcast...</h3>}
            {status === "completed"
            && forcast.length === 0
            && <h3 id="no-info">No weather information available for now, please visit site later.</h3>}
            {status === "error"
            && <h3 id="error-info">An error occured while loading forcast data...please visit site later.</h3>}

            {forcast.map((details, index) => { 
                const weatherIcon = getIcon(details.weather[0].icon);
                return (
                    <DayComponent key={index} icon={weatherIcon} details={details}/>
                )
            }
            )}
            </div>
        );
    }
}

export default WeekComponent;
