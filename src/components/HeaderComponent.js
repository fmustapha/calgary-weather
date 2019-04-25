import React from "react";
import "../stylesheets/HeadingComponent.css";

const HeaderComponent = props => {
  return (
    <header>
      <div className="heading">
        <h1>Calgary Weather Forecast</h1>
      </div>
      <p className="description">
        View 3 hour forecast for up to three days below
      </p>
    </header>
  );
};

export default HeaderComponent;
