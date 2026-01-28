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
        <div className="grid grid-cols-1 md:grid md:grid-cols-3">
          <div className="md:order-1">
            <HosomakiMenu />
          </div>
          <div className="md:order-2">
            <NigiriMenu />
          </div>
          <div className="order-last md:order-3">
            <FutomakiAlmondMenu />
          </div>
          <div className="md:order-4">
            <FutomakiMenu />
          </div>
          <div className="md:order-5">
            <UramakiMenu />
          </div>
          <div className="md:order-6">
            <FutomakiPankoMenu />
            <FutomakiTempuraMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollsMenu;
