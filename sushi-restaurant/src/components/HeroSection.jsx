import bg from "../assets/background_hero.jpg";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import { TiSocialFacebook } from "react-icons/ti";

import { IoLogoInstagram } from "react-icons/io";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
    >
      <Navbar />
      <div className="text-sushiMain flex flex-col items-center justify-center p-1">
        <div>
          <img src={logo} className="mt-12 w-[240px]" />
        </div>
        <div className="text-center">
          <h1 className="mt-12 self-start text-xl font-semibold uppercase tracking-widest text-[#fffefe]">
            Sushi restauracja
          </h1>
          <p className="text-xl font-extralight uppercase text-[#D5D6D6]">
            Władysławowo.
          </p>
          <p className="mt-4 rounded-md px-4 py-2 text-[#D5D6D6] shadow-lg shadow-black/10">
            Zapraszamy na nasze media społecznościowe <br /> - tam znajdziesz
            wszystkie AKTUALNOŚCI <br /> oraz bieżące PROMOCJE!
          </p>
        </div>
        <div className="flex items-start justify-center gap-2">
          <a
            href="https://www.facebook.com/people/SEA-ROLL/61585226447408/"
            target="_blank"
          >
            <TiSocialFacebook className="bg-sushiAccent rounded-full p-1 text-3xl text-black" />
          </a>
          <a href="https://www.instagram.com/searollsushi" target="_blank">
            <IoLogoInstagram className="bg-sushiAccent rounded-full p-1 text-3xl text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
