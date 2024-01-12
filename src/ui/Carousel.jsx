import React, { useRef, useState } from 'react';
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';

const itemWidth = 100; // Set your item width in pixels

function Carousel() {
  const [dragStart, setDragStart] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const carouselRef = useRef(null);
  const maxTranslate = -300; // Set the maximum translate limit in pixels

  const handleDragStart = (event) => {
    setDragStart(event.clientX || event.touches[0].clientX);
  };

  const handleDragMove = (event) => {
    const currentX = event.clientX || event.touches[0].clientX;
    const deltaX = currentX - dragStart;
    setTranslateX((prevTranslateX) => {
      const newTranslateX = prevTranslateX + deltaX;
      return Math.min(0, Math.max(maxTranslate, newTranslateX));
    });
    setDragStart(currentX);
  };

  const handleDragEnd = () => {
    const nearestSlide = Math.round(translateX / itemWidth) * itemWidth;
    setTranslateX(nearestSlide);
  };

  const handleNext = () => {
    setTranslateX((prev) => Math.max(prev - itemWidth, maxTranslate));
  };

  const handlePrev = () => {
    setTranslateX((prev) => Math.min(prev + itemWidth, 0));
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${translateX}%)` }}
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragMove}
        onTouchMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <Carousel1 />
        <Carousel2 />
        <Carousel1 />
        <Carousel2 />
      </div>
      <button
        className={`absolute left-2 top-1/2 -translate-y-1/2 transform rounded-md bg-teal-300 p-3 ${
          translateX === 0 ? 'invisible' : 'visible'
        }`}
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className={`absolute right-2 top-1/2 -translate-y-1/2 transform rounded-md bg-teal-300 p-3 ${
          translateX === maxTranslate ? 'invisible' : 'visible'
        }`}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
