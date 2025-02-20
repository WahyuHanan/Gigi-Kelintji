export default function Navbar() {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.pageYOffset >= 50) {
      navbar.style.top = "-10px";
      navbar.style.scale = "0.7";
      navbar.style.opacity = "80%";
    } else {
      navbar.style.top = "20px";
      navbar.style.scale = "1";
      navbar.style.opacity = "100";
    }
  });

  return (
    <div className="navbar fixed w-screen z-10">
      <div className="box-container w-3/4 mx-auto">
        <div className="container flex h-10 bg-pink-300 rounded-full border-2 my-8 text-center justify-between py-1 p-2 hover:bg-pink-400 drop-shadow-2xl ">
          <i className="ri-menu-2-line text-2xl cursor-pointer"></i>
          <h1 className=" lg:text-2xl md:text-2xl sm:text-3xl text-xl/normal my-auto italic sm:-mt-1">GIGI KELINTJI</h1>
          <i className="ri-creative-commons-nd-line text-2xl cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}
