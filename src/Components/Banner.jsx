import React from "react";

const Banner = ({ bannerApi }) => {
  const { imgSrc, btnText, title, text } = bannerApi;

  return (
    <>
      <div className="relative w-full max-w-5xl mx-auto mb-5 lg:w-[95vw]">
        <div className="relative flex items-center">
          <img
            src={imgSrc}
            alt="banner/img"
            className="h-[38vh] w-full rounded-lg"
          />
        </div>
        <div className="absolute top-[5rem] w-[95%] h-full left-12 flex flex-col items-start md:items-center md:justify-center overflow-hidden  md:left-0 md:top-0">
          <h1 className="text-3xl font-bold text-center filter drop-shadow-lg text-slate-900">
            {title}
          </h1>
          <p className="text-base sm:text-sm">{text}</p>
          <button
            type="button"
            className="py-1.5 px-5 bg-gradient-to-b from-gray-900 to-slate-800 text-slate-300 text-sm shadow-lg rounded-full transition-all duration-300 active:scale-110 my-2">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
