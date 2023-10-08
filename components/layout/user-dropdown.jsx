"use client";

import useScroll from "@/lib/hooks/use-scroll";
import Link from "next/link";
import { useState } from "react";

export default function UserDropdown() {
  const scrolled = useScroll(50);
  const [navbar, setNavbar] = useState(false);

  return (
    <div id="top">
      <nav
        className={`w-full ${
          navbar || scrolled ? " bg-violet-800/20 backdrop-blur-md " : " "
        } fixed left-0 right-0 top-0 z-10 md:bg-none`}
      >
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
          <div>
            <div className="flex items-center justify-between py-3 md:block md:py-5">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl font-bold text-white ">Aqua</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? "block p-12 md:p-0" : "hidden"
              }`}
            >
              <ul className="h-screen items-center justify-center md:flex md:h-auto ">
                <li className="border-b-2 border-purple-900 py-3  pb-6 text-center text-xl text-white hover:bg-purple-900  md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:underline">
                  <Link
                    href="#top"
                    onClick={() => {
                      setNavbar(!navbar);
                    }}
                  >
                    About
                  </Link>
                </li>
                <li className="border-b-2 border-purple-900 px-6 py-3 pb-6 text-center  text-xl text-white  hover:bg-purple-600  md:border-b-0  md:hover:bg-transparent md:hover:underline">
                  <Link href="#timeline" onClick={() => setNavbar(!navbar)}>
                    Why?
                  </Link>
                </li>
                <li className="border-b-2 border-purple-900 px-6  py-3 pb-6 text-center  text-xl text-white  hover:bg-purple-600  md:border-b-0  md:hover:bg-transparent md:hover:underline">
                  <Link href="#globe" onClick={() => setNavbar(!navbar)}>
                    The Globe
                  </Link>
                </li>
                <li className="border-b-2 border-purple-900 px-6  py-3 pb-6 text-center  text-xl text-white  hover:bg-purple-600  md:border-b-0  md:hover:bg-transparent md:hover:underline">
                  <Link href="#test" onClick={() => setNavbar(!navbar)}>
                    Test
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
