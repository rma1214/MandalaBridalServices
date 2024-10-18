"use client";

import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeart } from "react-icons/fa"; // Importing the love icon

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/treatments",
    name: "Services",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();
  return (
    <nav className="relative flex flex-col justify-between h-full p-8">
      <div
        className="cursor-pointer text-accent"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-10 text-white text-xl">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              className={`${
                pathname === link.href && "border-b-2 border-accent"
              } uppercase max-w-max mx-auto`}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      {/* Love icons instead of Socials */}
      <div className="flex gap-6 justify-center text-white text-lg">
        <FaHeart className="text-xl" />
        <FaHeart className="text-xl" />
        <FaHeart className="text-xl" />
      </div>
    </nav>
  );
};

export default MobileNav;
