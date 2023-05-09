import React from "react";

const Advertise = ({ brands }) => {
  return (
    <>
      <div className="w-9/12 lg:w-[90vw] mx-auto flex items-center justify-center gap-6 overflow-x-scroll scroll-smooth scroll-hidden">
        {brands?.map((item, i) => (
          <img
            key={i}
            src={item.iconSrc}
            alt="brand/img"
            className="w-38 h-auto xl:w-32 md:w-18 cursor-pointer hover:scale-105 transition-all duration-300"
          />
        ))}
      </div>
    </>
  );
};

export default Advertise;
