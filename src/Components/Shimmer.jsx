const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-10 my-10 justify-center">
      {Array(8)
        .fill()
        .map((e, index) => (
          <div
            key={index}
            className="w-80 h-80 bg-slate-200 animate-pulse rounded-md"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
