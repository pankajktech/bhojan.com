const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {Array(8)
        .fill(" ")
        .map(() => (
          <>
            <div className="bg-slate-300 m-10 w-72 h-80 animate-pulse">
             
            </div>
          </>
        ))}
    </div>
  );
};

export default Shimmer;
