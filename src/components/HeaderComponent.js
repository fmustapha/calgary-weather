import React from 'react';

const HeaderComponent = (props) => {
        return ( 
            <header>
                <div className="heading">
                <h1>Calgary Weather Forcast</h1>
                </div>
                <p className="description">View 3 hour forcast for three days below</p>
            </header>
         );
}

export default HeaderComponent;
