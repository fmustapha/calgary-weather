import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheets/DayComponent.css';


const DayComponent = (props) => {
    const {icon, details} = props;

    if(!details) {
        return null;
    }
    return (
        <div className="card" key={icon.id}>
            <FontAwesomeIcon key={icon.id} className="icon" color={icon.color} icon={icon.src} size="5x"/>
            <div className="card-body card-align">
                <h5 className="card-title">Date: {details.dt_txt}</h5>
                <p className="card-text"><strong>Temp:</strong> {details.main.temp} &#8451;</p>
                <p className="card-text"><strong>Wind:</strong> {details.wind.speed}</p>
            </div>
        </div>
    )
}

export default DayComponent;