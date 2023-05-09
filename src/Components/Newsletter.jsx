import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="relative p-5 mx-auto rounded-lg bg-white/50 ring-1 ring-slate-200 max-w-5xl w-full xl:w[95vw] shadow-md top-12">
        <div className="flex justify-between items-center md:flex-col md:gap-5">
          <div className="flex flex-col items-start md:items-center">
            <h1 className="text-4xl md:text-3xl sm:text-2xl text-slate-900 filter drop-shadow-lg font-bold capitalize">
              get in to touch with us
            </h1>
            <p className="font-base font-medium sm:text-sm xms:text-xs">
              Question and Feedback? we would love to hear you.
            </p>
          </div>
          <form className="relative flex items-center justify-center">
            <input
              type="email"
              placeholder="Email Address"
              className="w-96 lg:w-[85vw] py-2 px-5 ring-1 ring-slate-300 shadow-md shadow-slate-200 flex items-center rounded-full placeholder:text-slate-500 focus:outline-emerald-500 "
            />
            <button
              type="submit"
              className="text-base bg-gradient-to-b from-emerald-500 to-green-500 rounded-r-full px-5 py-2 text-white shadow-lg absolute right-0 shadow-emerald-400 transition-all duration-200 active:scale-90 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
