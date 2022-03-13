const Loader = ({ color }) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={`w-7 h-7 border-4 border-dotted rounded-full animate-spin border-${color}`}
      ></div>
    </div>
  );
};

export default Loader;
