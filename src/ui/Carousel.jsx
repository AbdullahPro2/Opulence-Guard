import React, { useEffect, useRef, useState } from 'react';

import CarouselItem from './CarouselItem';
// Images
import CardBlack from '../assets/cardBlack.png';
import growth from '../assets/growth.png';
import savings from '../assets/savings.png';
import cards from '../assets/Service.png';

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

  function handleMouseDown(e) {
    setInDragging(true);
    setInitialDrag(e.clientX || e.touches[0].clientX);
  }
  function handleMouseUp(e) {
    setInDragging(false);
    setFinalDrag(e.clientX || e.changedTouches[0].clientX);
    carouselDiv.current.style.marginLeft = '0px';
    carouselDiv.current.style.marginRight = '0px';
  }
  function handleMouseMove(e) {
    if (isDragging) {
      if (
        initialDrag > e.clientX ||
        (e.touches && initialDrag > e.touches[0].clientX)
      ) {
        carouselDiv.current.style.marginRight = '50px';
        carouselDiv.current.style.marginLeft = '0px';
      } else if (
        initialDrag < e.clientX ||
        (e.touches && initialDrag < e.touches[0].clientX)
      ) {
        carouselDiv.current.style.marginLeft = '50px';
        carouselDiv.current.style.marginRight = '0px';
      }
    }
  }

  useEffect(() => {
    carouselDiv.current.style.transform = `translateX(-${carousel * 100}%)`;
    const numberOfChildren = carouselDiv.current.children.length;
    setCarouselCount(Array.from({ length: numberOfChildren }));
    if (initialDrag !== finalDrag) {
      if (finalDrag < initialDrag && carousel < carouselCount.length - 1) {
        setCarousel((prev) => prev + 1);
        setInitialDrag(0);
        setFinalDrag(0);
      } else if (finalDrag > initialDrag && carousel > 0) {
        setCarousel((prev) => prev - 1);
        setInitialDrag(0);
        setFinalDrag(0);
      }
    }
  }, [carousel, finalDrag, carouselCount.length]);

  return (
    <div
      className={`relative  overflow-hidden ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      <div
        ref={carouselDiv}
        className={`duration-600 flex select-none bg-slate-500 transition-all ease-in `}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onTouchStart={(e) => handleMouseDown(e)}
        onTouchEnd={(e) => handleMouseUp(e)}
        onTouchMove={(e) => handleMouseMove(e)}
      >
        <div className="min-w-full">
          <CarouselItem
            image={CardBlack}
            text_1="Empower Your Finances with Opulence Guard"
            text_2="Seamless banking experiences tailored just for you"
            btn_1="Get Started Now"
            btn_2="Explore More"
            bg1="from-[#e4e95d]"
            bg2="to-[#e89d1f]"
            textcolor="text-black"
            bgBtn="bg-[#333]"
            btnText="text-yellow-200"
          />
        </div>
        <div className="min-w-full">
          <CarouselItem
            image={growth}
            text_1="Unlocking Financial Freedom, One Click at a Time"
            text_2="Secure, Seamless, and Simple Banking for the Modern World Join Us Today and Elevate Your Banking Experience"
            btn_1="Get Started Now"
            btn_2="Explore More"
            bg1="from-[#fbd07c]"
            bg2="to-[#e89d1f]"
            textcolor="text-black"
            bgBtn="bg-[#333]"
            btnText="text-yellow-200"
          />
        </div>
        <div className="min-w-full">
          <CarouselItem
            image={savings}
            text_1="Transform Your Life with Smart Savings"
            text_2="Saving money has never been this easy and rewarding.Secure your future with our seamless and modern banking solutions."
            btn_1="Start Saving Now"
            btn_2="Explore More"
            bg1="from-[#fbd07c]"
            bg2="to-[#ff930f]"
            textcolor="text-black"
            bgBtn="bg-[#333]"
            btnText="text-yellow-200"
          />
        </div>
        <div className="min-w-full">
          <CarouselItem
            image={cards}
            text_1=" Exceptional Customer Service, Always"
            text_2="Our team is dedicated to providing you with the best customer service experience. Your satisfaction is our priority."
            btn_1="Connect with us"
            btn_2="Contact Us"
            bg1="from-[#ffd78a]"
            bg2="to-[#f4762d]"
            textcolor="text-black"
            bgBtn="bg-[#333]"
            btnText="text-yellow-200"
          />
        </div>
      </div>
      <div className=" mt-2 flex items-center justify-center gap-1">
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
