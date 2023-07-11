function TrendBanner() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="bg-trend-banner bg-cover bg-center w-full h-[25vh] opacity-50"></div>
      <div className=" flex items-center justify-center w-full h-full absolute ">
        <h1 className="font-pop text-lg">TRENDS FOR THE SEASON</h1>
      </div>
    </div>
  );
}

export default TrendBanner;
