import tel from "../assets/tel.png";
import { FaPhoneVolume } from "react-icons/fa6";
import FadeInWhenVisible from "./FadeInWhenVisible";

const OrderByPhone = () => {
  return (
    <div className="relative m-auto flex max-w-[1200px] flex-col pt-5 md:flex-row md:gap-11 md:p-10">
      {/* left IMG*/}
      <div className="flex flex-1 items-center justify-center">
        <img
          src={tel}
          alt="Telefon"
          className="h-[340px] object-cover md:h-auto"
        />
      </div>

      {/* right text */}
      <FadeInWhenVisible>
        <div className="flex flex-1 flex-col justify-start gap-2 p-4 text-center md:text-left">
          <h2 className="mt-5 text-3xl font-bold">
            Zamów <br />
            przez telefon
          </h2>
          <p className="text-[#D5D6D6]">Masz ochotę na sushi?</p>
          <p className="mt-4 text-[#D5D6D6]">
            Zamów szybko i wygodnie telefonicznie
            <br /> i ciesz się ulubionym smakiem bez wychodzenia z domu.
          </p>
          <p className="mt-6 text-[#D5D6D6]">
            Świeże składniki, szybka realizacja i wybór, który najbardziej Ci
            pasuje.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <div className="mt-10 flex transform items-center gap-3 rounded-lg bg-sushiAccent px-4 py-2 text-black transition-transform duration-200 hover:translate-y-[-5px]">
              <FaPhoneVolume className="text-2xl md:inline-block" />
              <a href="tel:+48724708642" className="text-xl font-semibold">
                724-708-642
              </a>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default OrderByPhone;
