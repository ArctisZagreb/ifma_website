"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NAVPATHS } from "@/constants";
export const MobileNavigation = () => {
  const [openNav, setOpenNav] = useState(false);
  const closeNav = () => setOpenNav(false);
  return (
    <>
      <div className="container-wide flex items-center lg:hidden justify-between py-[15px]">
        <div>
          <Link href="/" aria-label="homepage">
            <Image
              src="/assets/logos/ifma.avif"
              width={150}
              height={55}
              alt="ifma logo"
            />
          </Link>
        </div>
        <button
          onClick={() => {
            setOpenNav(true);
          }}
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>
      {
        <div
          className={`${
            openNav ? "opacity-100" : "opacity-0 z-[-20]"
          } fixed left-0 top-0 w-full h-screen bg-base-100 z-30 transition-all duration-300 container-wide flex flex-col gap-[20px] items-center lg:hidden `}
        >
          <div className="w-full flex items-center lg:hidden justify-between py-[15px]">
            <div>
              <Link href="/" aria-label="homepage" onClick={closeNav}>
                <Image
                  src="/assets/logos/ifma.avif"
                  width={150}
                  height={55}
                  alt="ifma logo"
                />
              </Link>
            </div>
            <button onClick={closeNav}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <ul className="grid  grid-cols-2  gap-[15px] text-navMobile">
            {NAVPATHS.map((item, i) => {
              return (
                <li
                  key={item.id}
                  className={`  pb-[20px] ${
                    i % 2 === 1 ? "border-l-[1px]" : ""
                  } text-center `}
                >
                  <Link
                    href={item.path}
                    className={`uppercase text-primary ${
                      i === 3 && "leading-[32px]"
                    }`}
                    onClick={closeNav}
                  >
                    {item.text}
                  </Link>
                  {item.children.length > 0 && (
                    <ul className="pl-[10px] pt-[10px]">
                      {item.children.map((subItem) => {
                        return (
                          <li key={subItem.id} className="mb-[12px]">
                            <Link
                              href={subItem.path}
                              className="uppercase text-nav"
                            >
                              {subItem.text}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      }
    </>
  );
};
