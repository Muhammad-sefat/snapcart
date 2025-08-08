"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroller = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis with default options
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Function to handle the animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);

    // Clean-up function to destroy Lenis instance on unmount
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once

  return <>{children}</>;
};

export default SmoothScroller;
