import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from "../assets/logo.png";
import waves from "../assets/waves.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navigate = useNavigate();
  const location = useLocation();

  // scroll to gallery
  const scrollToGallery = () => {
    if (location.pathname === "/") {
      document.querySelector("#gallery")?.scrollIntoView();
    } else {
      navigate("/");
      setTimeout(() => {
        document.querySelector("#gallery")?.scrollIntoView();
      }, 50);
    }
  };

  // scroll to contact
  const scrollToContact = () => {
    if (location.pathname === "/") {
      document.querySelector("#contact")?.scrollIntoView();
    } else {
      navigate("/");
      setTimeout(() => {
        document.querySelector("#contact")?.scrollIntoView();
      }, 50);
    }
  };

  // close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // disable scroll on mobile when menu is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

  return (
    <div className="mx-auto max-w-[1200px] p-4">
      <nav className="relative flex items-center justify-center text-sushiMain">
        {/* mobile menu button */}
        <button
          className="absolute left-0 z-30 block md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
        </button>

        {/* mobile menu */}
        <div
          className={`fixed left-0 top-0 z-20 flex min-h-screen w-screen flex-col items-center gap-6 bg-bgMenu transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <img src={logo} alt="logo" className="mt-8 h-12" />

          <Link to="/menu" className="mt-10" onClick={() => setIsOpen(false)}>
            menu
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToGallery();
            }}
          >
            galeria
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToContact();
            }}
          >
            kontakt
          </button>
          <img
            src={waves}
            alt="golden waves"
            className="fixed bottom-0 w-full"
          />
        </div>

        {/* desktop menu */}
        <div className="fade mt-2 hidden items-center gap-4 font-semibold uppercase md:flex">
          <Link to="/menu">menu</Link>
          <span>|</span>
          <button onClick={scrollToGallery} className="uppercase">
            galeria
          </button>
          <span>|</span>
          <button onClick={scrollToContact} className="uppercase">
            kontakt
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
