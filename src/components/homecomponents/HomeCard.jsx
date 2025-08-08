"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import toast from "react-hot-toast";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomeCard = () => {
  const [products, setProducts] = useState([]);
  const cardTitle = useRef();
  const cardSubTitle = useRef();
  const cardRefs = useRef([]);

  console.log(products);
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      const parsed = JSON.parse(stored);
      const sorted = parsed.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setProducts(sorted);
    }
  }, []);

  // ✨ GSAP Animations
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

  // Card animation
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
  }, [products]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    toast.success("Product deleted successfully.");
  };
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

      <Swiper
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
      >
        {products.length === 0 && (
          <SwiperSlide>
            <p className="text-center col-span-3 text-lg font-medium">
              No products added yet.
            </p>
          </SwiperSlide>
        )}

        {products.map((product, index) => (
          <SwiperSlide key={product.id || index}>
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition transform-gpu"
            >
              <div className="w-full h-56 relative mb-4 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg w-full h-[190px] object-cover hover:scale-105 transform transition-all duration-300 ease-in-out"
                />
              </div>

              <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
              <p className="text-muted mb-2">{product.subtitle}</p>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-lg font-bold mb-4 text-primary">
                  ${product.price}
                </p>
                <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Link href={`/product-details?id=${product.id}`}>
                  <button className="bg-black/80 text-white text-sm px-3 py-1.5 rounded-xl border border-orange-500 font-medium hover:bg-orange-500 transition cursor-pointer">
                    See Details
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-black/80 text-white text-sm px-3 py-1.5 rounded-xl border border-orange-500 font-medium hover:bg-orange-500 transition cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <button className="custom-prev absolute left-2 top-1/2 z-10 bg-black/80 text-white p-2 rounded-full hover:bg-orange-500">
          <ChevronLeft size={20} />
        </button>
        <button className="custom-next absolute right-2 top-1/2 z-10 bg-black text-white p-2 rounded-full hover:bg-orange-500">
          <ChevronRight size={20} />
        </button>
      </Swiper>

      <div className="text-center mt-8">
        <button className="bg-black/80 text-white px-8 py-2 rounded-xl border border-orange-500 font-medium hover:bg-orange-500 transition cursor-pointer">
          See More
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
