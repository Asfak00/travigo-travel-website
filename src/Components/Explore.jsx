import React from "react";

const Explore = ({ explore, title }) => {
  return (
    <>
      <div className="relative my-16 lg:my-12">
        <div className="travigo-container">
          <h1 className="text-5xl font-bold text-slate-900 text-center lg:text-4xl xms:text-xl md:text-3xl sm:text-2xl mb-5">
            {title}
          </h1>

          <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 items-center gap-5">
            {explore?.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-evenly gap-5 cursor-pointer sm:gap-3 rounded-lg hover:scale-105 transition duration-200 hover:bg-emerald-500 ">
                <div className="flex  items-start">
                  <img
                    src={item.placeImg}
                    alt="explore/img"
                    className="w-20 h-20 sm:w-16 sm:h-16 rounded-lg object-cover filter drop-shadow-md"
                  />
                </div>
                <div className="flex items-start flex-col text-slate-900">
                  <h1 className="text-lg sm:text-sm font-bold">
                    {item.location}
                  </h1>
                  <p className="font-normal sm:text-xs lg:text-sm text-base">
                    {item.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
