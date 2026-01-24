import HosomakiMenu from "../components/Menu/HosomakiMenu";
import NigiriMenu from "../components/Menu/NigiriMenu";
import FutomakiMenu from "../components/Menu/FutomakiMenu";
import UramakiMenu from "../components/Menu/UramakiMenu";
import FutomakiPankoMenu from "../components/Menu/FutomakiPankoMenu";
import FutomakiTempuraMenu from "../components/Menu/FutomakiTempuraMenu";
import FutomakiAlmondMenu from "../components/Menu/FutomakiAlmondMenu";
import waves from "../assets/waves.png";

const RollsMenu = () => {
  return (
    <div>
      <div className="m-auto max-w-[1200px]">
        <h3 className="ml-5 mt-5 text-left text-3xl font-bold uppercase">
          MENU
        </h3>
        <div className="md:grid md:grid-cols-3">
          <HosomakiMenu />
          <NigiriMenu />
          <FutomakiAlmondMenu />
          <FutomakiMenu />
          <UramakiMenu />
          <div>
            <FutomakiPankoMenu />
            <FutomakiTempuraMenu />
          </div>
        </div>
      </div>
      <img src={waves} className="mt-44 w-full" />
    </div>
  );
};

export default RollsMenu;
