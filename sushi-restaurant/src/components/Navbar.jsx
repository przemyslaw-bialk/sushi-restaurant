import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from "../assets/logo.png";
import waves from "../assets/waves.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to gallery
  const scrollToGallery = () => {
    if (location.pathname === "/") {
      const el = document.querySelector("#gallery");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector("#gallery");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  // Scroll  to contact
  const scrollToContact = () => {
    if (location.pathname === "/") {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView();
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector("#contact");
        if (el) el.scrollIntoView();
      }, 50);
    }
  };

  // closing mobile menu while resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-auto max-w-[1200px] p-4">
      <nav className="relative flex items-center justify-center text-sushiMain">
        {/* Mobile menu button */}
        {isOpen ? (
          <button
            className="absolute left-0 z-20 block md:hidden"
            onClick={toggleMenu}
          >
            <MdClose size={24} />
          </button>
        ) : (
          <button
            className="absolute left-0 z-20 block md:hidden"
            onClick={toggleMenu}
          >
            <FiMenu size={24} />
          </button>
        )}

        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed left-0 top-0 z-10 flex min-h-screen w-screen flex-col items-center justify-start gap-5 overflow-y-hidden bg-bgMenu duration-300 ease-in">
            <img src={logo} className="mt-8 h-12" />
            <Link to="/menu" className="mt-10" onClick={() => setIsOpen(false)}>
              menu
            </Link>
            <span className="hidden md:block">|</span>
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToGallery();
              }}
            >
              galeria
            </button>
            <span className="hidden md:block">|</span>
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToContact();
              }}
            >
              kontakt
            </button>
            <img src={waves} className="fixed bottom-0" />
          </div>
        )}

        {/* Desktop menu */}
        <div className="fade mt-2 hidden items-center justify-center gap-4 text-center font-semibold uppercase md:flex">
          <Link to="/menu">menu</Link>
          <span className="hidden md:block">|</span>
          <button onClick={scrollToGallery} className="uppercase">
            galeria
          </button>
          <span className="hidden md:block">|</span>
          <button onClick={scrollToContact} className="uppercase">
            kontakt
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
