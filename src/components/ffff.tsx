"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { delay } from "framer-motion/dom";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }
  return (
    <section className="bg-bodyColor  sticky top-0 z-50 h-20 w-full px-4 lg:h-[12vh]">
      <div className="max-w-container max-auto font-titleFont flex h-full items-center justify-between py-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="#home"
            className="scroll-mt-[90px]"
            onClick={handleScroll}
          >
            <Image
              width={50}
              height={50}
              quality="95"
              priority={true}
              src="/logoo.png"
              alt="logo"
              className="mdl:ml-6 scroll-mt-10"
            />
          </Link>
        </motion.div>
        <div className="mdl:inline-flex hidden items-center gap-7">
          <ul className="flex flex-wrap gap-7 text-[13px]">
            <Link
              href="#about"
              onClick={handleScroll}
              className="text-textDark hover:text-textGreen nav-link flex cursor-pointer scroll-mt-10 items-center gap-1 font-medium duration-300"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-textGreen">01.</span>
                About
              </motion.li>
            </Link>
            <Link
              href="#skills"
              onClick={handleScroll}
              className="text-textDark hover:text-textGreen nav-link flex cursor-pointer scroll-mt-10 items-center gap-1 font-medium duration-300"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-textGreen">02.</span>
                Skills
              </motion.li>
            </Link>
            <Link
              href="#projects"
              onClick={handleScroll}
              className="text-textDark hover:text-textGreen nav-link flex cursor-pointer scroll-mt-10 items-center gap-1 font-medium duration-300"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                <span className="text-textGreen">03.</span>
                Projects
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className="text-textDark hover:text-textGreen nav-link flex cursor-pointer scroll-mt-10 items-center gap-1 font-medium duration-300"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.6 }}
              >
                <span className="text-textGreen">04.</span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/ahmed-alhusaini-CV.pdf" target="_blank">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.7 }}
              className="text-textGreen border-textGreen hover:bg-hoverColor rounded-md border px-4 py-2 text-[13px] duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Small Icon Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setShowMenu(true)}
          className="mdl:hidden text-textGreen group: flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl"
        >
          <span className="bg-textGreen inline-flex h-[2px] w-full transform transition-all duration-300 ease-in-out group-hover:translate-x-2"></span>
          <span className="bg-textGreen inline-flex h-[2px] w-full translate-x-3 transform transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="bg-textGreen inline-flex h-[2px] w-full translate-x-1 transform transition-all duration-300 ease-in-out group-hover:translate-x-3"></span>
        </motion.div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="mdl:hidden absolute right-0 top-0 flex h-screen w-full flex-col items-end bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="scrollbarHide relative flex h-full w-[80%] flex-col items-center overflow-y-scroll bg-[#112240] px-4 py-10"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-textGreen absolute right-4 top-4 cursor-pointer text-3xl hover:text-red-500"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col gap-7 text-base">
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="text-textDark hover:text-textGreen nav-link flex cursor-pointer scroll-mt-16 items-center gap-1 font-medium duration-300"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.3 }}
                    >
                      <span className="text-textGreen">01.</span>
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="#skills"
                    onClick={handleScroll}
                    className="text-textDark hover:text-textGreen nav-link flex cursor-pointer scroll-mt-10 items-center gap-1 font-medium duration-300"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.4 }}
                    >
                      <span className="text-textGreen">02.</span>
                      Skills
                    </motion.li>
                  </Link>
                  <Link
                    href="#projects"
                    onClick={handleScroll}
                    className="text-textDark hover:text-textGreen nav-link flex cursor-pointer scroll-mt-10 items-center gap-1 font-medium duration-300"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.5 }}
                    >
                      <span className="text-textGreen">03.</span>
                      Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={handleScroll}
                    className="text-textDark hover:text-textGreen nav-link flex cursor-pointer scroll-mt-10 items-center gap-1 font-medium duration-300"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.6 }}
                    >
                      <span className="text-textGreen">04.</span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/ahmed-alhusaini-CV.pdf" target="_blank">
                  <motion.button
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.7 }}
                    className="text-textGreen border-textGreen hover:bg-hoverColor rounded-md border px-4 py-2 text-[13px] duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="inline-flex w-full items-center justify-center gap-4 py-6 xl:hidden">
                  <motion.a
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                    href="https://github.com/ProfMoriartey"
                    target="_blank"
                  >
                    <span className="bg-bodyColor hover:border-textGreen hover:text-textGreen inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/ahmed-alhusaini-75b1621a4"
                    target="_blank"
                  >
                    <span className="bg-bodyColor hover:border-textGreen hover:text-textGreen inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6, ease: "easeIn" }}
                    href="https://instagram.com/ahmedalhusaini_?igshid=OGQ5ZDc2ODk2ZA=="
                    target="_blank"
                  >
                    <span className="bg-bodyColor hover:border-textGreen hover:text-textGreen inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2">
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                </div>
              </div>
              <motion.a
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8, ease: "easeIn" }}
                href="mailto:ahmed.a.alhusaini@gmail.com"
                className="text-textGreen mt-4 w-72 text-center text-sm tracking-widest"
              >
                <p>ahmed.a.alhusaini@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
