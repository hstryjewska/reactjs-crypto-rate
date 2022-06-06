import React from 'react';
import './CryptoList.css';

CryptoList.propTypes = {
  cryptoList: PropTypes.shape({
      title: PropTypes.string
  })
};

function CryptoList({ cryptoList }) {
  const liElements = cryptoList.map((cryptoObj) => (
    <li key={cryptoObj.currency}>
      <span className="CryptoLabel">Last rate: </span>
      <span className={`CryptoRate ${cryptoObj.cssClass}`}>
        {cryptoObj.lastRate}
        {' '}
        {cryptoObj.htmlArrow}
      </span>
      <span className="CurrencyTicker">{cryptoObj.currency}</span>
      <span className="CurrencySymbol">
        [
        {cryptoObj.symbol}
        ]
      </span>
    </li>
  ));

  return (
    <div className="CryptoList">
      <ul className="TheList">{liElements}</ul>
    </div>
  );
}

export default CryptoList;
