import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";

const Navbar = () => {
  return (
    <section className="sticky top-0 z-50 h-20 w-full  lg:h-[12vh]">
      <div className=" flex w-full flex-row items-center justify-between bg-[#fbe9df] py-1">
        <div>
          <Link href="">
            <Image
              src={"/logo.png"}
              alt={""}
              width={180}
              height={180}
              className="ml-8 mt-1 scroll-mt-10"
              priority={true}
            />
          </Link>
        </div>
        <div className="mdl:inline-flex mt-5 flex flex-row items-center gap-7 pr-10">
          {" "}
          <div className="">
            <Link href="https://www.instagram.com/ustasushi/" target="_blank">
              <SlSocialInstagram
                size={40}
                className="invisible transition-all duration-300 hover:-translate-y-2 sm:visible"
              />
            </Link>
          </div>
          <Link href="/Menu">
            <button className="rounded-md border border-[#f99b90] bg-[#fd4543] px-4 py-2 font-mono text-[13px] text-xl font-bold text-[#fbe9df] duration-300 hover:-translate-y-2">
              Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
