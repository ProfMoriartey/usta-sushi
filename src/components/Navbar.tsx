import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <section className="sticky top-0 z-50 h-20 w-full  lg:h-[12vh]">
      <div className=" flex w-full flex-row items-center justify-between bg-[#c5c5d8] py-1">
        <div>
          <Link href="#home">
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
          <a href="/ahmed-alhusaini-CV.pdf" target="_blank">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.7 }}
              className="border-textGreen mt-5 rounded-md border bg-[#ff5454] px-4 py-2 text-[13px] text-[#000000] duration-300 hover:bg-[#9a9a83]"
            >
              Menu
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
