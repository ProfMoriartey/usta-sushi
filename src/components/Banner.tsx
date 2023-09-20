import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <Image
        src={"/pic5.png"}
        alt={""}
        width={600}
        height={600}
        className="items-center justify-center align-middle"
      />
    </section>
  );
};

export default Banner;
