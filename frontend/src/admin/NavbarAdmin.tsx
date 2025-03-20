import logo from "../assets/logonew.png";
import prof from "../assets/Computer Icons User profile, avatar transparent background PNG clipart.jpeg";

const NavbarAdmin = () => {
  return (
    <nav className="bg-white py-3 shadow-md flex items-center px-4">
      <div className="flex-none">
        <img src={logo} alt="Logo" height={70} width={76} />
      </div>
      <div className="flex-grow text-center">
        <h1 className="uppercase font-bold text-green-900 tracking-widest">
          Coffee Shop Admin Panel
        </h1>
      </div>
      <div className="flex-none">
        <img
          src={prof}
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-green-900"
        />
      </div>
    </nav>
  );
};

export default NavbarAdmin;
