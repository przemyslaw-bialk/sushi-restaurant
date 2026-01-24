import Navbar from "../components/Navbar";
import logo from "../assets/logo_menu.png";
import bg from "../assets/background_menu.png";
import { Link } from "react-router";
import MenuVegan_26 from "../components/Menu/MenuVegan_26";
import MenuVege_32 from "../components/Menu/MenuVege_32";
import HosomakiSet from "../components/Menu/HosomakiSet";

const MenuPage = () => {
  return (
    <div
      className="relative m-auto h-screen w-full bg-[#1C1B17] bg-cover bg-center bg-no-repeat py-1"
      style={{
        backgroundImage: `
    linear-gradient(
      to bottom,
      rgba(5, 3, 3, 0) 0%,
      rgba(5, 3, 3, 0.1) 20%,
      rgba(5, 3, 3, 0.3) 40%,
      rgba(5, 3, 3, 0.6) 60%,
      rgba(5, 3, 3, 1) 80%
    ),
    url(${bg})
  `,
      }}
    >
      <div className="relative m-auto max-w-[1200px]">
        <Link
          to="/"
          className="absolute left-6 top-0 hidden h-10 w-auto md:block"
        >
          <img src={logo} className="h-7" alt="Logo" />
        </Link>
        <Navbar />
        <div className="mt-[20%] flex flex-col items-start justify-center md:items-start md:justify-start">
          <MenuVegan_26 />
          <MenuVege_32 />
          <HosomakiSet />
        </div>
      </div>
      <div>test</div>
    </div>
  );
};

export default MenuPage;
