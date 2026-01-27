import Navbar from "../components/Navbar";
import logo from "../assets/logo_menu.png";
import bg from "../assets/background_menu.png";
import bg_nigiri from "../assets/background_nigiri.png";
import bg_sets from "../assets/background_sets.png";
import waves from "../assets/waves.png";
import { Link } from "react-router";
import VeganSet from "../components/Menu/VeganSet";
import VegeSet from "../components/Menu/VegeSet";
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
import RollsMenu from "../components/RollsMenu";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

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
        <div className="relative">
          <Link
            to="/"
            className="absolute left-5 top-5 z-10 hidden h-16 md:block"
          >
            <img src={logo} className="h-7" alt="Logo" />
          </Link>
        </div>

        <Navbar />
        <FadeInWhenVisible>
          <div className="mt-[17%] flex flex-col items-start justify-center md:items-start md:justify-start">
            <RollsMenu />
          </div>
        </FadeInWhenVisible>
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
        <FadeInWhenVisible>
          <div className="m-auto flex max-w-[1200px] flex-col items-start justify-center md:items-start md:justify-start">
            <h3 className="ml-5 mt-5 text-left text-3xl font-bold uppercase">
              zestawy
            </h3>
            <VeganSet />
            <VegeSet />
            <HosomakiSet />
            <FutomakiSet />
            <FutomakiXLSet />
          </div>
        </FadeInWhenVisible>
      </div>
      <FadeInWhenVisible>
        <div className="relative m-auto max-w-[1200px]">
          <SalmonSet />
          <TempuraSet />
          <GrillSet />
          <PankoSet />
        </div>
      </FadeInWhenVisible>
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
        <FadeInWhenVisible>
          <div className="m-auto flex max-w-[1200px] flex-col items-start justify-center md:items-start md:justify-start">
            <CrispySet />
            <StartSet />
            <ClassicSet />
            <ShareSet />
            <PartySet />
          </div>
        </FadeInWhenVisible>
      </div>
      <FadeInWhenVisible>
        <div>
          <div className="m-auto max-w-[1200px]">
            <EventSet />
            <CelebrationSet />
          </div>
          <img src={waves} className="mt-44 w-full" />
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default MenuPage;
