"use client";

import React, { use } from "react";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/modeToggle";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="  fixed w-full flex justify-between items-center py-1 px-7 md:px-12 backdrop-blur-lg z-50 ">
      <p className="hidden">{theme}</p>
      <div className="bg-white/0 rounded-full p-1">
        <Link href={"/"}>
          <Image
            src={
              theme?.toLowerCase() === "light"
                ? "/images/logo.webp"
                : "/images/logo-dark.webp"
            }
            width={540}
            height={540}
            className="w-[64px]"
            alt="logo"
          />
        </Link>
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;
