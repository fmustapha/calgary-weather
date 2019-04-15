import React from 'react';
import '../stylesheets/HeadingComponent.css';

const HeaderComponent = (props) => {
        return ( 
            <header>
                <div className="heading">
                <h1>Calgary Weather Forcast</h1>
                </div>
                <p className="description">View 3 hour forcast for up to three days below</p>
            </header>
         );
}

export default HeaderComponent;
