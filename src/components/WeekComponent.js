import React, { Component } from 'react';
import axios from 'axios';
import getIcon from '../services/weatherIcons'
import DayComponent from './DayComponent'

//Stylesheet
import '../stylesheets/WeekComponent.css';
require('dotenv').config();

class  WeekComponent extends Component {
    state = { forcast: [], error:[] }

    componentDidMount() {
        this.getWeatherDetails()
    }

    getWeatherDetails = () => {
        const cityId = process.env.REACT_APP_CITY_ID;
        const apiKey = process.env.REACT_APP_KEY;
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${apiKey}&units=metric&cnt=12`)
            .then(response => this.setState({forcast:response.data.list}))
            .catch(error => this.setState({error:error}))
    }
 
    render() {
        const { forcast } = this.state;
        return (
            <div className="wrapper">
            {/* <FontAwesomeIcon icon={weatherIcon} /> */}
            {forcast.map((details, index) => { 
                const weatherIcon = getIcon(details.weather[0].icon);
                return (
                    <DayComponent index={index} icon={weatherIcon} details={details}/>
                )
            }
            )}
           
            </div>
        );
    }

}
 
export default WeekComponent;
