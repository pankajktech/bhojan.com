const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      {Array(4)
        .fill()
        .map((e, index) => (
          <div
            key={index}
            className="bg-slate-300 m-10 w-72 h-96 animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
