const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {Array(8)
        .fill(" ")
        .map((e) => (
          <>
            <div className="bg-slate-400 m-10 w-72 h-96"></div>
          </>
        ))}
    </div>
  );
};

export default Shimmer;
