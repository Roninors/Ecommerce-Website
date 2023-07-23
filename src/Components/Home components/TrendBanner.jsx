function TrendBanner() {
  return (
    <div className="relative flex items-center justify-center ">
      <div className="bg-trend-banner bg-cover bg-center w-full h-[20vh] lg:h-[40vh] opacity-50"></div>
      <div className=" flex items-center justify-center  absolute  ">
        <h1 className="font-pop font-bold text-2xl md:text-4xl text-center lg:text-5xl">TRENDS FOR THE SEASON</h1>
      </div>
    </div>
  );
}

export default TrendBanner;
