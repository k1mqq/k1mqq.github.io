"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="sticky top-0 backdrop-blur-md">
      <div className="flex p-0 mb-5 ">
        <Link href="/" className="hover:bg-cyan-900">
          <Image
            src={`/myicon.png`}
            width={60}
            height={60}
            alt="icon"
            className="mx-auto p-0"
          ></Image>
          <p className="text-sm p-1 pt-0">k1mq is here!</p>
        </Link>
        <Link
          href="/blog"
          className="p-6 hover:bg-cyan-900 items-center flex justify-center hidden md:block"
        >
          <p>Blog</p>
        </Link>
        <Link
          href="/link"
          className="p-6 hover:bg-cyan-900 items-center flex justify-center hidden md:block"
        >
          <p>Link</p>
        </Link>
        <div className="flex-auto"></div>
        <div className="p-3 items-center flex justify-center block md:hidden">
          <div className="border p-2 rounded-md">
            <button onClick={toggleMenu}>
              <Image
                src={`/menu.svg`}
                width={30}
                height={30}
                alt="menu"
                className=""
              ></Image>
            </button>
          </div>
        </div>
      </div>
      {openMenu ? (
        <div className="">
            <Link href="/blog" className="flex items-center p-3 border-t-2">blog</Link>
            <Link href="/Link" className="flex items-center p-3 border-t-2">Link</Link>
        </div>
      ) : undefined}
    </header>
  );
}
