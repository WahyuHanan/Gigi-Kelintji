export default function SaladPage() {
  return (
    <div className="salad-page overflow-hidden pt-5">
      <div className=" w-full grid lg:grid-cols-2 grid-cols-1">
        <div className="box lg:order-2 order-1">
          <h1 className="text-5xl/loose p-4" data-aos="fade-up">
            MADE BY ORDER!!! <span className="text-pink-400  ">FRESH</span> RIGHT INTO YOUR TUMMY...
          </h1>
          <img src="public\img\img-ingredients\hand-salad2.png" alt="" className=" translate-y-5 size-max" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500" />
        </div>
        <div className="box-image order-1 place-content-center p-4">
          <img src="public\img\img-ingredients\GK.jpg" alt="" className="rounded-4xl shadow-3xl border-4 w-lvh mx-auto" data-aos="fade-right" />
        </div>
      </div>
    </div>
  );
}
