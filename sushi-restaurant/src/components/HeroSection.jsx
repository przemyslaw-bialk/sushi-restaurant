import bg from "../assets/background_hero.jpg";
import Navbar from "./Navbar";
import logo from "../assets/logo_sun.png";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
    >
      <Navbar />

      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center text-sushiMain md:items-start md:text-left">
          {/* LOGO */}

          <img
            src={logo}
            className="fade mt-24 w-[240px] md:ml-[4rem] md:mt-32 md:w-[360px]"
            alt="logo"
          />

          {/* TEXT */}
          <div className="fade md:ml-[4rem]">
            <h1 className="perspective-distant mt-[-2rem] text-center text-5xl font-bold uppercase tracking-widest text-[#FDB44B] md:text-left">
              sea & <span className="sushi">roll</span>
            </h1>
            <h2 className="mt-12 text-xl font-semibold uppercase tracking-widest text-[#fffefe]">
              Sushi restauracja
            </h2>
            <p className="text-xl font-extralight uppercase text-[#D5D6D6]">
              Władysławowo.
            </p>
            <p className="mt-4 max-w-md rounded-md py-2 text-[#D5D6D6] shadow-lg shadow-black/10">
              Zapraszamy na nasze media społecznościowe <br />
              – tam znajdziesz wszystkie AKTUALNOŚCI <br />
              oraz bieżące PROMOCJE!
            </p>
          </div>

          {/* ICONS */}
          <div className="fade mt-6 flex gap-4 md:ml-[4rem]">
            <a
              href="https://www.facebook.com/people/SEA-ROLL/61585226447408/"
              target="_blank"
              rel="noreferrer"
            >
              <TiSocialFacebook className="rounded-full bg-sushiAccent p-1 text-4xl text-black" />
            </a>
            <a
              href="https://www.instagram.com/searollsushi"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram className="rounded-full bg-sushiAccent p-1 text-4xl text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
