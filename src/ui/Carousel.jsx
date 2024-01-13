import React, { useEffect, useRef, useState } from 'react';
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';

function Carousel() {
  const [carousel, setCarousel] = useState(0);
  const carouselDiv = useRef();
  const [carouselCount, setCarouselCount] = useState([]);
  const [isDragging, setInDragging] = useState(false);
  const [initialDrag, setInitialDrag] = useState(0);
  const [finalDrag, setFinalDrag] = useState(0);

  function handleNext() {
    if (carousel < carouselCount.length - 1) {
      setCarousel((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (carousel > 0) {
      setCarousel((prev) => prev - 1);
    }
  }
  function handleClick(e, index) {
    setCarousel((prev) => (prev = index));
  }

  useEffect(() => {
    carouselDiv.current.style.transform = `translateX(-${carousel * 100}%)`;
    const numberOfChildren = carouselDiv.current.children.length;
    setCarouselCount(Array.from({ length: numberOfChildren }));
  }, [carousel]);

  function handleMouseDown(e) {
    setInDragging(true);
    console.log('mouseDown');
    setInitialDrag(e.clientX);
    console.log('initial:', e.clientX);
  }
  function handleMouseUp(e) {
    setInDragging(false);
    console.log('mouseUp');
    setFinalDrag(e.clientX);
    console.log('final:', e.clientX);
  }
  function handleMouseMove(e) {
    if (isDragging) {
      console.log(e.clientX);
    }
  }

  return (
    <div className="relative cursor-grab overflow-hidden">
      <div
        ref={carouselDiv}
        className="duration-400 flex select-none bg-slate-500 transition-all ease-in "
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <div className="min-w-full">
          <Carousel1 />
        </div>
        <div className="min-w-full">
          <Carousel2 />
        </div>
        <div className="min-w-full">
          <Carousel1 />
        </div>
        <div className="min-w-full">
          <Carousel2 />
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-1">
        {carouselCount.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full border-2 border-yellow-950 ${
              carousel === index
                ? 'h-4 w-4 border-transparent bg-yellow-400'
                : ''
            }`}
            onClick={(e) => handleClick(e, index)}
          ></div>
        ))}
      </div>

      <button
        className="absolute right-0 top-[50%] z-50 hidden translate-y-[-50%] cursor-pointer  text-5xl xl:inline-block"
        onClick={handleNext}
      >
        &rarr;
      </button>
      <button
        className="absolute top-[50%] z-10 hidden translate-y-[-50%] cursor-pointer text-5xl  xl:inline-block"
        onClick={handlePrev}
      >
        &larr;
      </button>
    </div>
  );
}

export default Carousel;
