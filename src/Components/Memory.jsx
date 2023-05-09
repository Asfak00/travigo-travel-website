import React from "react";

const Memory = ({ memory }) => {
  const { title, subtitle, text, img, experience } = memory;

  return (
    <>
      <div className="relative mt-16 sm:mb-7">
        <div className="travigo-container flex justify-between items-center xl:gap-9 gap-16 lg:flex-col-reverse">
          <div className="flex justify-start items-center lg:justify-center w-full max-w-md">
            <img src={img} alt="memory/img" className="w-auto h-[55vh]" />
          </div>

          <div className="grid w-full items-center max-w-2xl lg:text-center">
            <h1 className="font-bold text-5xl md:text-3xl lg:text-4xl text-slate-900 filter drop-shadow-lg">
              {title}
            </h1>
            <h1 className="font-bold text-5xl ml:text-3xl lg:text-4xl text-slate-900 filter drop-shadow-lg">
              {subtitle}
            </h1>
            <p className="text-base my-5 sm:text-sm">{text}</p>
            <div className="grid grid-cols-3 items-center gap-7 md:gap-2">
              {experience?.map((item, i) => (
                <div
                  key={i}
                  className="py-2 px-7 bg-gradient-to-b from-emerald-300 to-green-300 text-slate-900 rounded-lg h-auto w-auto flex items-center flex-col text-center hover:scale-110 transition-all duration-300 cursor-pointer">
                  <h1>{item.number}</h1>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memory;
