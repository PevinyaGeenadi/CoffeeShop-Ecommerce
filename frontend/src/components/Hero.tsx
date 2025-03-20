import { MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-cover bg-no-repeat h-screen w-full"> 
      <div className="mmx-auto max-w-[1540px] px-6 lg:px-40 relative top-32 xs:top-52">
        <h1 className="h1 text-white capitalize max-w-[37rem] ">Your Perfect Cup of Coffee
        <span className="text-green-900"> at Roastoria  </span> </h1>
        <p className="text-gray-300 regular-16 mt-6 max-w-[25rem] opacity-80 transition-all duration-300 hover:opacity-100">
        Welcome to Roastoria , where every sip is an experience. Discover our 
          rich and aromatic coffee, handcrafted beverages, and delicious treats. 
          Relax, recharge, and enjoy your favorite flavors today!
        </p>
        <div className="flexStart !items-center gap-x-4 my-5">
        </div>
        <div className="max-xs:flex-col flex gap-4">
          <NavLink to={""} className={"btn_dark_rounded flexCenter gap-x-3 transition-all duration-300 hover:scale-105 hover:bg-dark-green"}>
            Order now
          </NavLink>
          <NavLink to={""} className={"btn_dark_rounded flexCenter gap-x-2 transition-all duration-300 hover:scale-105 hover:bg-dark-green"}>
            <MdOutlineLocalOffer className="text-2xl transition-all duration-300 transform hover:scale-110" />
            Special Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;



