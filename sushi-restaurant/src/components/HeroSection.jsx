import bg from "../assets/background_hero.jpg";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
    >
      <Navbar />
    </div>
  );
};

export default HeroSection;
