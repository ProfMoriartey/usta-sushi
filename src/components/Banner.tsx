import React from "react";
import Image from "next/image";

import { SlSocialInstagram } from "react-icons/sl";
import Link from "next/link";

const Banner = () => {
  return (
    <section>
      <div className="mt-28 flex flex-col items-center justify-between sm:mt-0">
        <Image
          src={"/pic5.png"}
          alt={""}
          width={600}
          height={600}
          className=""
        />
        <button className="rounded-md border border-[#f99b90] bg-[#fd4543] px-4 py-2 font-mono text-[13px] text-xl font-bold text-[#fbe9df] sm:hidden ">
          <Link
            href={"https://www.instagram.com/ustasushi/"}
            target="_blank"
            className="flex w-full flex-row items-center justify-center gap-2"
          >
            Usta Sushi{" "}
            <span className="pt-1">
              <SlSocialInstagram />
            </span>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Banner;
