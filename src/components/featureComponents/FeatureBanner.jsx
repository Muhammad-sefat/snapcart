"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const FeatureBanner = () => {
  const router = useRouter();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const splitTitle = new SplitText(titleRef.current, { type: "words" });
    const splitSubtitle = new SplitText(subtitleRef.current, {
      type: "lines",
    });

    const tl = gsap.timeline();
    tl.from(splitTitle.words, {
      y: 60,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.from(splitSubtitle.lines, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.6,
    });
  }, []);

  const handleClick = () => {
    router.push("/add-product");
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <img
        src="/assets/feature.jpg"
        alt="Tech Feature Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-white text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Level Up Your Gear Game
        </h1>
        <p
          ref={subtitleRef}
          className="text-base md:text-xl text-gray-300 max-w-2xl mb-6"
        >
          Browse our curated collection of next-gen smartwatches, earbuds, and
          tech accessories built for your lifestyle.
        </p>
        <button
          onClick={handleClick}
          className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl font-semibold text-white shadow-lg cursor-pointer"
        >
          + Add New Product
        </button>
      </div>
    </div>
  );
};

export default FeatureBanner;
