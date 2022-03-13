import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
const CoinDetail = () => {
  const [coin, setCoin] = useState();
  const params = useParams();
  const { id } = params;

  const getCoins = async () => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    const data = await res.data;
    setCoin(data);
  };
  useEffect(() => getCoins(), []);
  return (
    <div className="flex items-center justify center py-auto">
      {coin ? (
        <div className="p-4  container mx-auto w-full text-center bg-white rounded-lg  sm:p-8 ">
          <div className="flex flex-col items-center">
            <img src={coin.image.large} className="w-28 md:w-32 " />
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              {coin.name}
            </h5>
          </div>
          <div className="container md:w-1/2 mx-auto">
            <p className="mb-5 font-medium text-base text-gray-800 sm:text-lg dark:text-gray-400">
              {ReactHtmlParser(coin.description.en.split(". ")[0])}.
            </p>
          </div>
          <div className="justify-evenly items-center space-y-4 flex sm:space-y-0 sm:space-x-4">
            <ul className=" md:w-1/2">
              <li className="flex justify-between bg-gray-50 rounded-md text-gray-900 border border-gray-900 my-4">
                <button
                  type="button"
                  className="px-3 py-3 font-semibold rounded "
                >
                  Current Price
                </button>
                <button
                  type="button"
                  className="px-3 py-3 font-semibold rounded "
                >
                  ₹{coin.market_data.current_price.inr.toLocaleString()}
                </button>
              </li>
              <li className="flex justify-between bg-gray-50 rounded-md text-gray-900 border border-gray-900 my-4">
                <button
                  type="button"
                  className="px-3 py-3 font-semibold rounded "
                >
                  Price Change in Currency
                </button>
                <button
                  type="button"
                  className="px-3 py-3 font-semibold rounded"
                >
                  ₹ {coin.market_data.price_change_24h_in_currency.inr}
                </button>
              </li>
              <li className="flex justify-between bg-gray-50 rounded-md text-gray-900 border border-gray-900 my-4">
                <button
                  type="button"
                  className="px-3 py-3 font-semibold rounded"
                >
                  Market Cap Rank
                </button>
                <button
                  type="button"
                  className="px-3 py-3 font-semibold rounded "
                >
                  {coin.market_cap_rank}
                </button>
              </li>
              <li className="flex justify-between bg-gray-50 rounded-md text-gray-900 border border-gray-900 my-4">
                <button
                  type="button"
                  className="px-3 py-3 font-semibold rounded"
                >
                  Price Change in Percentage
                </button>
                <button
                  type="button"
                  className={`px-3 py-3 font-semibold rounded ${
                    coin.market_data.price_change_percentage_24h_in_currency
                      .inr < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  <span
                    className={`px-2 py-1 rounded-lg ${
                      coin.market_data.price_change_percentage_24h_in_currency
                        .inr < 0
                        ? "bg-red-100"
                        : "bg-green-100"
                    }`}
                  >
                    {coin.market_data.price_change_percentage_24h_in_currency
                      .inr < 0
                      ? ""
                      : "+"}
                    {
                      coin.market_data.price_change_percentage_24h_in_currency
                        .inr
                    }
                    %
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CoinDetail;
