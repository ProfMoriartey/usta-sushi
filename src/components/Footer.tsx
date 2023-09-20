import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="absolute bottom-0 sm:relative">
      <div className="flex flex-col items-center justify-between">
        <div className="flex h-6 flex-col items-center justify-center">
          <p className="max-w-[900px] text-center text-xs text-[#2c1c1c]">
            © 2023
            <Link
              href={"https://www.instagram.com/ahmedalhusaini_/"}
              target="_blank"
            >
              {" "}
              Ahmed Alhusaini
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
