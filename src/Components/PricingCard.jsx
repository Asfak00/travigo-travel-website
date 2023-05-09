import React from "react";

const PricingCard = ({ plan }) => {
  const { planicon, title, text, plantype, plancontent, buttonText } = plan;

  return (
    <>
      <div className="p-5 rounded-lg bg-slate-50/5 shadow-md ring-1 ring-slate-200 shadow-slate-300 xsm:p-3 transition-all duration-200 hover:scale-105 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-5">
            <img
              src={planicon}
              alt="planIcon/img"
              className="w-14 h-14 lg:h-12 lg:w-12"
            />
            <div>
              <h1 className="text-gray-900 text-lg filter drop-shadow-lg font-semibold lg:text-base md:text-sm">
                {title}
              </h1>
              <p className="text-slate-900 font-normal text-sm lg:text-xs">
                {text}
              </p>
            </div>
          </div>

          <div>
            <h1>{plantype}</h1>
          </div>
        </div>

        <hr className="h-[0.1vh] bg-slate-200 my-6" />

        <div className="grid items-center gap-3">
          {plancontent?.map((content, i) => (
            <div className="flex items-start gap-4">
              <div>
                <img
                  src={content.iconbox}
                  alt="icon/img"
                  className="lg:w-5 lg:h-5"
                />
              </div>
              <div>
                <h1 className="font-normal text-lg filter drop-shadow-lg text-gray-900 lg:text-base hover:text-emerald-500 cursor-pointer transition-all ease-in-out">
                  {content.text}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="grid items-center justify-center">
          <button className="button-emrad mt-6">{buttonText}</button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
