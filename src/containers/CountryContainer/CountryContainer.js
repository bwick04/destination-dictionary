import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CountryCard } from "../../components/CountryCard";
import { InfoModal } from "../../components/InfoModal";
import { MapModal } from "../../components/MapModal";
import { SearchFilter } from "../../components/SearchFilter";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { PageNumbers } from "../../components/PageNumbers";
import "./CountryContainer.css";

const CountryContainer = () => {
  const [data, loading] = useFetch("https://restcountries.eu/rest/v2/all");
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [latLong, setLatLong] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 16;
  const pageNumbers = [];
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;

  const showModal = latlng => {
    setModalVisible(true);
    setLatLong(latlng);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const showInfo = cardInfo => {
    setInfoVisible(true);
    setCardInfo(cardInfo);
  };

  const hideInfo = () => {
    setInfoVisible(false);
  };

  const handleClick = number => {
    setCurrentPage(number);
  };

  const filterCountries = event => {
    let newData = data;
    newData = newData.filter(function(item) {
      return (
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    setFilteredData(newData);
    setCurrentPage(1);
  };

  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    setCardInfo([cardInfo]);
    setFilteredData(data);
  }, [data]);

  return (
    <div data-testid="container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="main-container">
          <SearchFilter filterCountries={filterCountries} data={data} />
          <ul className="pagination" data-testid="pagination">
            {pageNumbers.map(number => (
              <PageNumbers
                number={number}
                handleClick={handleClick}
                currentPage={currentPage}
                filteredDataLength={filteredData.length}
              />
            ))}
          </ul>
          <div className="CountryContainer">
            {filteredData
              .slice(indexOfFirstCard, indexOfLastCard)
              .map(country => (
                <CountryCard
                  key={country.alpha2Code}
                  data={country}
                  onShowModal={showModal}
                  onHideModal={hideModal}
                  onShowInfo={showInfo}
                  onHideInfo={hideInfo}
                />
              ))}
          </div>
          {infoVisible ? (
            <InfoModal
              show={infoVisible}
              handleClose={hideInfo}
              data={cardInfo}
            />
          ) : (
            ""
          )}
          {MapModal ? (
            <MapModal
              show={modalVisible}
              handleClose={hideModal}
              data={latLong}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default CountryContainer;
