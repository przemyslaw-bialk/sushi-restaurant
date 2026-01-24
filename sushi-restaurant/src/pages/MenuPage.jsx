import Navbar from "../components/Navbar";
import logo from "../assets/logo_menu.png";
import bg from "../assets/background_menu.png";
import bg_nigiri from "../assets/background_nigiri.png";
import bg_sets from "../assets/background_sets.png";
import { Link } from "react-router";
import MenuVegan_26 from "../components/Menu/MenuVegan_26";
import MenuVege_32 from "../components/Menu/MenuVege_32";
import HosomakiSet from "../components/Menu/HosomakiSet";
import StartSet from "../components/Menu/StartSet";
import FriendSet from "../components/Menu/FriendsSet";
import ClassicSet from "../components/Menu/ClassicSet";
import FutomakiSet from "../components/Menu/FutomakiSet";
import FutomakiXLSet from "../components/Menu/FutomakiXLSet";
import TempuraSet from "../components/Menu/TempuraSet";
import PankoSet from "../components/Menu/PankoSet";
import CrispySet from "../components/Menu/CrispySet";
import SalmonSet from "../components/Menu/SalmonSet";
import GrillSet from "../components/Menu/GrillSet";
import ShareSet from "../components/Menu/ShareSet";
import PartySet from "../components/Menu/PartySet";
import EventSet from "../components/Menu/EventSet";
import CelebrationSet from "../components/Menu/CelebrationSet";

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
        <div className="mt-[17%] flex flex-col items-start justify-center md:items-start md:justify-start">
          <MenuVegan_26 />
          <MenuVege_32 />
          <ClassicSet />
          <HosomakiSet />
          <CrispySet />
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
      linear-gradient(
        to left,
        rgba(5, 3, 3, 0) 0%,
        rgba(5, 3, 3, 0.1) 15%,
        rgba(5, 3, 3, 0.7) 40%,
        rgba(5, 3, 3, 0.9) 50%,
        rgba(5, 3, 3, 1) 55%
      ),
      url(${bg_nigiri})
    `,
        }}
      >
        <div className="m-auto flex max-w-[1200px] flex-col items-start justify-center md:items-start md:justify-start">
          <FriendSet />
          <StartSet />
          <TempuraSet />
          <FutomakiSet />
          <FutomakiXLSet />
        </div>
      </div>
      <div className="relative m-auto max-w-[1200px]">
        <PankoSet />
        <SalmonSet />
        <GrillSet />
        <ShareSet />
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
      linear-gradient(
        to left,
        rgba(5, 3, 3, 0) 0%,
        rgba(5, 3, 3, 0.1) 15%,
        rgba(5, 3, 3, 0.7) 40%,
        rgba(5, 3, 3, 0.9) 50%,
        rgba(5, 3, 3, 1) 55%
      ),
      url(${bg_sets})
    `,
        }}
      >
        <div className="m-auto flex max-w-[1200px] flex-col items-start justify-center md:items-start md:justify-start">
          <PartySet />
          <EventSet />
          <CelebrationSet />
        </div>
      </div>
      <div className="relative m-auto max-w-[1200px]">
        <h3 className="ml-5 mt-5 text-left text-3xl font-bold">ROLLS</h3>
        <PankoSet />
        <SalmonSet />
        <GrillSet />
      </div>
    </div>
  );
};

export default MenuPage;
