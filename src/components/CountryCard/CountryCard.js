import React, { useState, useEffect } from "react";
import "./CountryCard.css";

const CountryCard = props => {
  const [latLong, setLatLong] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    setLatLong(props.data.latlng);
    setCardInfo(props.data);
  }, []);

  return (
    <div className="CountryCard" data-testid="CountryCard">
      <div className="CountryCard-name" data-testid="CountryCard-name">
        {props.data.name}
      </div>
      <img
        data-testid="CountryCard-flag"
        className="CountryCard-image"
        alt="flag of the country"
        src={props.data.flag}
      />
      <div className="CountryCard-info" data-testid="CountryCard-info">
        <div className="buttons">
          <button
            data-testid="info-button"
            className="CountryCard-button"
            onClick={() => {
              props.onShowInfo(cardInfo);
            }}
          >
            <i className="fa fa-info" />
          </button>
          <button
            data-testid="map-button"
            className="CountryCard-button"
            onClick={() => {
              props.onShowModal(latLong);
            }}
          >
            <i className="fa fa-map-marker" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
