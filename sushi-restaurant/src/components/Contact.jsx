import bg from "../assets/test.jpg";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { HiPhone } from "react-icons/hi";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen bg-cover bg-center bg-no-repeat"
    >
      <div
        className="m-auto flex max-w-[1200px] flex-col items-center justify-center px-4 md:items-start md:pl-8"
        id="contact"
      >
        <FadeInWhenVisible>
          <h2 className="mt-20 text-center text-3xl font-semibold uppercase md:text-left">
            BĄDŹ Z NAMI <br /> w kontakcie!
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="fade mt-6 flex gap-4">
            <a
              href="https://www.facebook.com/people/SEA-ROLL/61585226447408/"
              target="_blank"
              rel="noreferrer"
            >
              <TiSocialFacebook className="rounded-full bg-sushiAccent p-1 text-5xl text-black" />
            </a>
            <a
              href="https://www.instagram.com/searollsushi"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram className="rounded-full bg-sushiAccent p-1 text-5xl text-black" />
            </a>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="mt-20 flex w-full max-w-[600px] flex-col gap-8">
            <div className="flex items-start gap-3">
              <CiClock2 className="rounded-full bg-sushiAccent p-1 text-4xl text-black" />
              <div>
                <p className="text-2xl font-semibold">Godziny otwarcia:</p>
                <p className="text-[#D5D6D6]">Pon - Wt: nieczynne</p>
                <p className="text-[#D5D6D6]">
                  od Środy do Niedzieli od{" "}
                  <span className="font-bold text-white">13:00 - 21:00</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <SlLocationPin className="rounded-full bg-sushiAccent p-1 text-4xl text-black" />
              <div>
                <p className="text-xl font-semibold">Władysławowo</p>
                <p className="text-xl font-semibold">Ul. Hallera 7A</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HiPhone className="rounded-full bg-sushiAccent p-1 text-4xl text-black" />
              <div>
                <a
                  href="tel:+48724708642"
                  className="text-xl font-semibold hover:underline"
                >
                  +48 724 708 642
                </a>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Contact;
