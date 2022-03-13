function shortenAddress(address) {
  return `${address.slice(0, 6)}.....${address.slice(address.length - 4)}`;
}

export default shortenAddress;
