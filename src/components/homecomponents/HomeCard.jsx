"use client";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

const products = [
  {
    id: 1,
    title: "Smartwatch Series X",
    subtitle: "Stay connected on the go",
    price: "$129.99",
    image: "/assets/earbuds1.jpg",
    category: "Smartwatch",
  },
  {
    id: 2,
    title: "Noise Buds Pro",
    subtitle: "Crystal clear sound",
    price: "$79.99",
    image: "/assets/earbuds2.jpg",
    category: "Earbuds",
  },
  {
    id: 3,
    title: "SnapCam 4K",
    subtitle: "Capture every moment",
    price: "$199.99",
    image: "/assets/earbuds3.jpg",
    category: "Camera",
  },
];

const HomeCard = () => {
  const cardTitle = useRef();
  const cardSubTitle = useRef();
  const cardRefs = useRef([]); // holds all product card refs

  // TITLE + SUBTITLE animation
  useGSAP(() => {
    const splitText = new SplitText(cardTitle.current, { type: "words" });
    const splitSubText = new SplitText(cardSubTitle.current, {
      type: "lines",
    });

    const tlTitle = gsap.timeline({
      scrollTrigger: {
        trigger: cardTitle.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tlTitle.from(splitText.words, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
      ease: "power3.out",
    });

    const tlSub = gsap.timeline({
      scrollTrigger: {
        trigger: cardSubTitle.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tlSub.from(splitSubText.lines, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });

    return () => {
      splitText.revert();
      splitSubText.revert();
    };
  }, []);

  // CARD flip animation
  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          rotateY: 90,
          transformOrigin: "center",
        },
        {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "power4.out",
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="section-padding-x py-6 lg:py-12">
      <h1
        ref={cardTitle}
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
      >
        Future Products
      </h1>
      <p
        ref={cardSubTitle}
        className="text-lg md:text-xl text-center text-muted max-w-2xl mx-auto mb-10"
      >
        Explore the latest smartwatches, earbuds, and gadgets at unbeatable
        prices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition transform-gpu"
          >
            <div className="w-full h-56 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg w-full hover:scale-105 transform transition-all duration-300 ease-in-out"
              />
            </div>

            <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
            <p className="text-muted mb-2">{product.subtitle}</p>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-lg font-bold mb-4 text-primary">
                {product.price}
              </p>
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <button className="bg-black/80 text-white px-4 py-2 rounded-xl border border-orange-500 font-medium hover:bg-orange-500 transition cursor-pointer">
              See Details
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-black/80 text-white px-8 py-2 rounded-xl border border-orange-500 font-medium hover:bg-orange-500 transition cursor-pointer">
          See More
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
