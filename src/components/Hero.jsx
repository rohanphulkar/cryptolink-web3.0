import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { TransactionContext } from "../context/TransactionContext";
import Transactions from "./Transactions";
import Loader from "./Loader";
import shortenAddress from "../utils/shortenAddress";
const Input = ({ name, type, value, handleChange }) => (
  <input
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
  />
);
const Hero = () => {
  const { currentAccount, formData, sendTransaction, handleChange, isLoading } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };
  return (
    <>
      <section>
        <div className="bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-coolGray-900">
            <h1 className="text-5xl font-semibold leading-none sm:text-6xl xl:max-w-3xl dark:text-coolGray-900">
              Send crypto without any hassle.
            </h1>
            <p className="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl dark:text-coolGray-900">
              Experience the crypto world. Buy and sell crypto on Cryptolink.
            </p>
            <div className="flex flex-wrap justify-center">
              {currentAccount && (
                <button
                  type="button"
                  className="px-8 flex items-center py-3 m-2 text-lg font-semibold rounded-md bg-black text-gray-50"
                >
                  <SiEthereum fontSize={21} className="mx-2" />{" "}
                  {currentAccount ? shortenAddress(currentAccount) : ""}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mx-auto mb-12 -mt-20 rounded-lg  lg:-mt-40 bg-violet-400">
          <div className="p-8 rounded ">
            <h1 className="font-medium text-3xl">Send Crypto</h1>

            <form>
              <div className="mt-8 grid lg:grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="addressTo"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                  >
                    Address To
                  </label>
                  <Input
                    name="addressTo"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="amount"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                  >
                    Amount
                  </label>
                  <Input
                    name="amount"
                    type="number"
                    handleChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="keyword"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                  >
                    Keyword (GIF)
                  </label>
                  <Input
                    name="keyword"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                  >
                    Message
                  </label>
                  <Input
                    name="message"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full font-bold md:w-3/4 mx-auto py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-800 active:bg-blue-700 disabled:opacity-50"
                >
                  {isLoading ? <Loader color="white" /> : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Transactions />
    </>
  );
};

export default Hero;
