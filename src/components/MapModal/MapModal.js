import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./MapModal.css";

export class MapContainer extends Component {
  render() {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={showHideClassName} data-testid="map-modal">
        <div className="modal-main" data-testid="map-modal">
          <div className="modal-header" data-testid="map-modal">
            <button className="close-button" onClick={this.props.handleClose}>
              close
            </button>
          </div>
          <div className="map-container" data-testid="map">
            <Map
              data-testid="map-modal"
              google={this.props.google}
              zoom={5}
              center={{
                lat: this.props.data[0],
                lng: this.props.data[1]
              }}
            >
              <Marker
                data-testid="map-modal"
                position={{
                  lat: this.props.data[0],
                  lng: this.props.data[1]
                }}
              />
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

// **** INSERT GOOGLE MAP API KEY HERE ****
export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);
