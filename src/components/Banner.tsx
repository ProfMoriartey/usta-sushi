import React from "react";
import Image from "next/image";
import { BiSushi } from "react-icons/bi";

import { SlSocialInstagram } from "react-icons/sl";
import Link from "next/link";

const Banner = () => {
  return (
    <section>
      <div className="mt-12 flex flex-col items-center justify-between sm:mt-0">
        <div className="relative">
          <Image
            src={"/pic6.png"}
            alt={""}
            width={600}
            height={600}
            className=""
          />
          <Link href={"/menu"}>
            <Image
              src={"/sushi.png"}
              alt={""}
              width={100}
              height={100}
              className="absolute left-[39%] top-[38%] sm:left-[43%]  md:left-[43.75%]"
            />
          </Link>
        </div>

        <span className="h-5"></span>
        <Link href="/menu">
          <button className="w-32 rounded-md border border-[#f99b90] bg-[#fd4543] px-4 py-2 font-mono text-[13px] text-xl font-bold text-[#f6faf4] duration-300 hover:-translate-y-2 sm:hidden">
            Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
