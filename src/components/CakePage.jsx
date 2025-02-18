import Slider from "./Slider";

// Card Slider

export default function CakePage() {
  return (
    <div className="cakePage text-center mt-20">
      <div className="container mx-auto p-4">
        <h1 className="text-8xl text-black mb-40" data-aos="fade-left">
          Or...{" "}
        </h1>

        <h1 className="text-7xl/tight mb-40 transition-all" data-aos="zoom-in-up">
          sumthin <span className="text-pink-400">SWEETS...</span>
        </h1>
      </div>
      <Slider />
    </div>
  );
}
