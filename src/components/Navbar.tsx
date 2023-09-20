import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <section className="sticky top-0 z-50 h-20 w-full  lg:h-[12vh]">
      <div className=" flex w-full flex-row items-center justify-between bg-[#fbe9df] py-1">
        <div>
          <Link href="">
            <Image
              src={"/logo.png"}
              alt={""}
              width={120}
              height={120}
              className="ml-8 mt-1 scroll-mt-10"
              priority={true}
            />
          </Link>
        </div>
        <div className="mdl:inline-flex flex flex-row items-center gap-7 pr-10">
          {" "}
          <a href="/Menu">
            <button className="text-l mt-3 rounded-md border border-[#f99b90] bg-[#fd4543] px-4 py-2 text-[13px] text-[#2c1c1c] duration-300 hover:bg-[#f99b90]">
              Menu
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
