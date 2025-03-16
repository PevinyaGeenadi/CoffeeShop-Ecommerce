import logo from "../assets/coffee.png";

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-[#dae3e9]">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo} height={70} width={70} />
            <span className="ml-3 text-xl">Starbucks</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
          Experience the rich aroma of freshly brewed coffee. From classic 
          espresso to handcrafted beverages, enjoy the perfect cup every time.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            OUR MENU
            </h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-gray-600 hover:text-gray-800">Espresso</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Cold Brew</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Frappuccino</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Teavana Tea</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            ABOUT US
            </h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-gray-600 hover:text-gray-800">Our Story</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Ethical Sourcing</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Community Impact</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            CUSTOMER SERVICE
            </h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Order Status</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Gift Cards</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQs</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            CONNECT WITH US
            </h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-gray-600 hover:text-gray-800">Instagram</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Facebook</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Twitter</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">YouTube</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-green-90">
        <div className="container mx-auto py-4  flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm mx-auto sm:text-left">
            © 2025 Starbucks. All rights reserved. Terms & Conditions | Privacy
            Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;