import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RES_CARD_CDN } from "../utils/constants";
import "../style/entitled.css";

const EntitledSlide = ({ entitledData }) => {
  // Ref to the scrollable container
  const sliderRef = useRef(null);

  // Scroll Left Function
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -400, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Scroll Right Function
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 400, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full px-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold ms-4">What's on your mind?</h2>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded shadow"
          >
            Prev
          </button>
          <button
            onClick={scrollRight}
            className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded shadow"
          >
            Next
          </button>
        </div>
      </div>

      {/* Scrollable Section */}
      <div
        ref={sliderRef}
        className="flex space-x-8 overflow-x-auto no-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {entitledData.map((entitle) => (
          <Link
            key={entitle.action.text}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="w-48 h-48">
              <img
                className="w-full h-full object-contain"
                src={RES_CARD_CDN + entitle.imageId}
                alt={entitle.action.text}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EntitledSlide;
