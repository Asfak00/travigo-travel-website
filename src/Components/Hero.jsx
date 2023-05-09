import React from "react";

const Hero = ({ hero }) => {
  const { title, subtitle, img, btn1, btn2, text } = hero;
  return (
    <>
      <div className="flex flex-col w-auto h-auto bg-gradient-to-b from-emerald-200 to-white">
        <div className="travigo-container grid items-start justify-items-center">
          <div className="grid items-center justify-items-center mt-28 mb-16 md:mt-28 md:mb-12">
            <h1 className="text-7xl lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl filter text-black font-bold ">
              {title}
            </h1>
            <h1 className="text-7xl lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl filter text-black font-bold ">
              {subtitle}
            </h1>
            <p className="text-base my-5 sm:text-sm text-center ">{text}</p>
            <div className="flex items-center justify-center sm:w-ful sm:flex-col gap-11 sm:gap-3">
              <button className="button-emrad">{btn1}</button>
              <button className="button-light">{btn2}</button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={img}
              alt="dashboard/image"
              className="h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] xsm:object-contain drop-shadow-emrad"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
