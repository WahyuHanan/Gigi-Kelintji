export default function Hero() {
  return (
    <div className="hero overflowX-hidden">
      <div className="container grid lg:grid-cols-2 grid-cols-1 mx-auto 2xl:pt-20 xl:pt-15 lg:pt-40 pt-32 p-2">
        <div className="box lg:mt-0 md:mt-5 items-center text-center place-content-center" data-aos="fade-right">
          <p className="md:text-2xl text-xl">⭐⭐⭐⭐⭐ 1000++ Verified reviews</p>
          <h1 className="md:text-9xl  md:mt-5 text-8xl mt-2 ">GIGI</h1>
          <h1 className="md:text-7xl md:mt-15 xl:mt-12  text-6xl mt-8">KELINTJI</h1>
          <p className="md:text-2xl xl:mt-10 text-2xl mt-15">
            Delicious <span className=" italic">Homemade</span> Treats
          </p>
        </div>
        <div className="box min-w-fit z-0 mx-auto" data-aos="fade-left">
          <img src="public\img\fruit1-r.png" alt="" className="size-[500px] animate-[float_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
