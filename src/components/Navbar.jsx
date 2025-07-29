"use client";
import React, { useState } from "react";

// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import NavItem from "./homecomponents/NavItem";

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative dark:bg-slate-900 bg-white  section-padding-x py-[8px]">
      {/* logo */}
      {/* <img src="/tech.jpg" alt="logo" className="w-[85px] rouded-full" /> */}
      <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        SnapCart
      </h2>

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] md:flex hidden">
        <NavItem href="/" label="Home" />
        <NavItem href="/feature" label="Features" />
        <NavItem href="/blogs" label="Blogs" />
        <NavItem href="/shop" label="Shop" />
      </ul>

      {/* action buttons */}
      <div className="items-center gap-[10px] flex">
        <button className="py-[7px] text-[.9rem] px-[16px] border border-orange-500 rounded-xl bg-black/20  text-white hover:bg-orange-500 transition-all duration-300 sm:flex hidden cursor-pointer">
          Sign in
        </button>
        <button className="py-[7px] text-[.9rem] px-[16px] border border-orange-500 rounded-xl bg-black/20  text-white hover:bg-orange-500 transition-all duration-300 sm:flex hidden cursor-pointer">
          Sign up
        </button>

        <CiMenuFries
          className="text-[1.8rem] dark:text-[#abc2d3] mr-1 text-[#424242]c cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white p-4 text-center absolute top-[65px] dark:bg-slate-700 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
      >
        <div className="relative mb-5">
          <input
            className="py-1.5 pr-4 dark:bg-slate-800 dark:text-[#abc2d3] dark:border-slate-900/50 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute dark:text-slate-400 top-[8px] left-3 text-gray-500 text-[1.3rem]" />
        </div>
        <ul className="items-center gap-[20px] text-[1rem] flex flex-col">
          <NavItem href="/" label="Home" />
          <NavItem href="/features" label="Features" />
          <NavItem href="/blogs" label="Blogs" />
          <NavItem href="/shop" label="Shop" />
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
