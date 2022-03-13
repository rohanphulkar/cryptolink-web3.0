import logo from './logo.png'
import { TransactionContext } from "../context/TransactionContext";
import { SiEthereum } from "react-icons/si";
import { useContext } from "react";
import { Link } from "react-router-dom";
import shortenAddress from "../utils/shortenAddress";
const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} className="w-14 rounded" />
          <span className="ml-3 text-3xl">Cryptolink</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-gray-800 text-lg justify-center">
          <Link
            to="/"
            className="mx-5 font-medium hover:border-b hover:transition-all hover:ease-in hover:duration-700 hover:border-gray-900 cursor-pointer hover:text-gray-900"
          >
            Send Crypto
          </Link>
          <Link
            to="/market"
            className="mx-5 font-medium hover:border-b hover:transition-all hover:ease-in hover:duration-700 hover:border-gray-900 cursor-pointer hover:text-gray-900"
          >
            Market
          </Link>

          <button
            type="button"
            className="px-3 md:px-5 py-1 md:py-2 m-2 text-base md:text-lg font-semibold rounded-md bg-gray-900 hover:bg-gray-800 text-gray-50"
            onClick={connectWallet}
          >
            {!currentAccount ? (
              "Connect Wallet"
            ) : (
              <div className="flex items-center">
                <SiEthereum fontSize={21} className="mr-2" />
                {shortenAddress(currentAccount)}
              </div>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
