import React from "react";
import PricingCard from "./PricingCard";

const Pricing = ({ pricingapi }) => {
  const { title, text, btn1, btn2, plans } = pricingapi;

  return (
    <>
      <div className="my-16 relative lg:my-7">
        <div className="travigo-container">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-slate-900 text-center lg:text-4xl xms:text-xl md:text-3xl sm:text-2xl">
              {title}
            </h1>
            <p className="text-xl mt-2 lg:text-sm text-center text-gray-900">
              {text}
            </p>
            <div className="flex justify-between items-center my-12">
              <button type="button" className="button-emrad lg:w-auto">
                {btn1}
              </button>
              <button type="button" className="button-light lg:w-auto">
                {btn2}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-10">
            {plans?.map((plan, i) => (
              <PricingCard plan={plan} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
