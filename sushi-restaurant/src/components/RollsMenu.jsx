import HosomakiMenu from "../components/Menu/HosomakiMenu";
import NigiriMenu from "../components/Menu/NigiriMenu";
import FutomakiMenu from "../components/Menu/FutomakiMenu";
import UramakiMenu from "../components/Menu/UramakiMenu";
import FutomakiPankoMenu from "../components/Menu/FutomakiPankoMenu";
import FutomakiTempuraMenu from "../components/Menu/FutomakiTempuraMenu";
import FutomakiAlmondMenu from "../components/Menu/FutomakiAlmondMenu";

const RollsMenu = () => {
  return (
    <div>
      <div className="m-auto max-w-[1200px]">
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
    </div>
  );
};

export default RollsMenu;
