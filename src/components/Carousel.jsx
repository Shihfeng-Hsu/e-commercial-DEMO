"use client";
import React, {
  useState,
  useEffect,
} from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
            <h3 className="text-xl font-bold">
              {image.title}
            </h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
