import React from "react";
import "./CryptoList.css";
import PropTypes from "prop-types";

const CryptoList = ({ cryptoList }) => {
  CryptoList.propTypes = {
    cryptoList: PropTypes.func.isRequired,
  };
  const liElements = cryptoList.map((cryptoObj) => (
    <li key={cryptoObj.currency}>
      <span className="CryptoLabel">Last rate: </span>
      <span className={`CryptoRate ${cryptoObj.cssClass}`}>
        {cryptoObj.lastRate}
        {cryptoObj.htmlArrow}
      </span>
      <span className="CurrencyTicker">{cryptoObj.currency}</span>
      <span className="CurrencySymbol">[{cryptoObj.symbol}]</span>
    </li>
  ));

  return (
    <div className="CryptoList">
      <ul className="TheList">{liElements}</ul>
    </div>
  );
};

export default CryptoList;
