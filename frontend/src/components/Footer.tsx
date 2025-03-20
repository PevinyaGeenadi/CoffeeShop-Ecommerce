import logofooter from "../assets/coffee.png";

function Footer() {
  return (
    <footer className="text-white body-font bg-[#181919]">
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex flex-col items-start pl-12 py-5">
            <img src={logofooter} height={250} width={140} />
            
          </div>
          <p className="mt-2 text-smtext-[#fafafa] pl-10">
          Experience the rich aroma of freshly brewed coffee. From classic 
          espresso to handcrafted beverages, enjoy the perfect cup every time.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
            OUR MENU
            </h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Espresso</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Cold Brew</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Frappuccino</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Teavana Tea</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
            ABOUT US
            </h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Our Story</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Ethical Sourcing</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Community Impact</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Careers</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
            SUPPORT
            </h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Contact Us</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Order Status</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Gift Cards</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">FAQs</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
            SOCIALS
            </h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Instagram</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Facebook</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">Twitter</a>
              </li>
              <li>
                <a className="text-[#fafafa] hover:text-gray-400" href="#">YouTube</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-4  flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm mx-auto sm:text-left">
            © 2025 Roastoria. All rights reserved. Terms & Conditions | Privacy
            Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;