import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
    >
      <FaChevronLeft />
    </button>
  );
};

export const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
    >
      <FaChevronRight />
    </button>
  );
};
