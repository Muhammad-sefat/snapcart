"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
gsap.registerPlugin(useGSAP, SplitText);

const HomeBanner = () => {
  const router = useRouter();
  const titleText = useRef();
  const subTitleText = useRef();
  useGSAP(() => {
    const splitTitle = new SplitText(titleText.current, { type: "words" });
    const splitSubTitle = new SplitText(subTitleText.current, {
      type: "lines",
    });
    const tl = gsap.timeline();
    tl.from(splitTitle.words, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.from(splitSubTitle.lines, {
      y: 50,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);
  const handleClick = () => {
    router.push("/add-product");
  };
  return (
    <div className="relative w-full h-[80vh]">
      <img
        className="w-full h-full object-cover"
        src="/assets/banner.jpg"
        alt="Banner Image"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 ref={titleText} className="text-4xl md:text-6xl font-bold mb-4">
          Discover the Future of Tech
        </h1>
        <p
          ref={subTitleText}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6"
        >
          Explore the latest smartwatches, earbuds, and gadgets at unbeatable
          prices.
        </p>
        <button
          // ref={buttonRef}
          onClick={handleClick}
          className="relative bg-black/50 hover:bg-orange-500 border border-orange-500 transition px-6 py-2.5 rounded-xl font-semibold text-white cursor-pointer"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
