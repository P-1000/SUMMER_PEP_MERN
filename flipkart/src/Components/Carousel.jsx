import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const carouselImages = [
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cc633426b89ad841.png?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/17a2c4ed00866b1a.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a859e5c525a11ef9.jpg?q=20",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mx-4 my-4">
      <img
        src={carouselImages[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-auto"
      />
      <button
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white h-24 w-10 items-center text-black shadow-md p-2 rounded-sm"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white h-24 w-10 items-center text-black shadow-md p-2 rounded-sm"
      >
        <FaChevronRight  className="mx-1"/>
      </button>
    </div>
  );
};

export default Carousel;
