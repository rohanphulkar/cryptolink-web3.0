import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
const Market = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const allCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };
  const getCoins = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    );
    const data = await res.data;
    setCoins(data);
  };
  useEffect(() => getCoins(), []);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle dark:bg-gray-800">
            <div className="p-4">
              <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search coin"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Current Price
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Market Capital
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 flex text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Price Change in 24H
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {allCoins ? (
                    allCoins.map((coin) => {
                      return (
                        <tr
                          className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-opacity ease-in duration-700"
                          key={coin.id}
                        >
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img
                              src={coin.image}
                              className="w-14 md:w-16  md:h-16"
                            />
                          </td>
                          <td className="py-4 px-6 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {coin.name}
                            <br />
                            <span className="text-sm font-normal text-gray-500">
                              {coin.symbol}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ₹{coin.current_price.toLocaleString()}
                          </td>
                          <td className="py-4 px-6 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ₹{coin.market_cap.toLocaleString()}
                          </td>
                          <td className="py-4 px-6 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span
                              className={`px-3 py-1 font-semibold rounded-md ${
                                coin.price_change_percentage_24h < 0
                                  ? "bg-red-100 text-red-800"
                                  : "bg-green-100 text-green-800"
                              } `}
                            >
                              {coin.price_change_percentage_24h < 0 ? "" : "+"}
                              <span>{coin.price_change_percentage_24h}%</span>
                            </span>
                          </td>
                          <td className="py-4 px-6 text-base font-medium text-right whitespace-nowrap">
                            <Link
                              to={`/coin/${coin.id}`}
                              href="#"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Show Details
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <Loader color="black" />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
