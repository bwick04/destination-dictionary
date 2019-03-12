import React from "react";
import "./InfoModal.css";

const InfoModal = ({ handleClose, show, data }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} data-testid="info-modal">
      <section className="modal-main">
        <div className="modal-header">
          <button className="close-button" onClick={handleClose}>
            close
          </button>
          <h1>{data.name}</h1>
        </div>
        <div className="modal-info">
          <span>
            <h2>Capital:</h2>
            <h3>{data.capital}</h3>
          </span>
          <span>
            <h2>Population:</h2>
            <h3>{data.population}</h3>
          </span>
          <span>
            <h2>Languages:</h2>
            {data.languages.map(item => (
              <h3 key={item.name}>{item.name}</h3>
            ))}
          </span>
          <span>
            <h2>Currency:</h2>
            {data.currencies.map(item => (
              <h3 key={item.name}>{item.name}</h3>
            ))}
          </span>
        </div>
      </section>
    </div>
  );
};

export default InfoModal;
