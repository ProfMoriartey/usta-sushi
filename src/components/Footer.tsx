import React from "react";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";

const Footer = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between">
        <div className="inline-flex w-full items-center justify-center gap-4 py-6 xl:hidden">
          <a href="https://www.instagram.com/ustasushi/" target="_blank">
            <span className="bg-bodyColor hover:border-textGreen hover:text-textGreen inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 text-xl text-[#2c1c1c] transition-all duration-300 hover:-translate-y-2">
              <SlSocialInstagram />
            </span>
          </a>
        </div>
        <div className="flex h-12 w-2/3 flex-col items-center justify-center">
          <p className="max-w-[600px] text-center text-xs text-[#2c1c1c]">
            © 2023 Ahmed Alhusaini. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
