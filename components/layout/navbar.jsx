"use client";

import Image from "next/image";
import Link from "next/link";
import UserDropdown from "./user-dropdown";

export default function NavBar() {


  return (
    <>
      <div
        className={`fixed top-0 w-full z-30 transition-all`}
      >
        <div className="mx-5 flex h-25 max-w-screen-xl items-center justify-between xl:mx-auto">

          <div>
            <UserDropdown />
          </div>
        </div>
      </div>
    </>
  );
}
