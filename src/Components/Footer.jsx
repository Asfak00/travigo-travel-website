import React from "react";

const Footer = ({ footerApi }) => {
  const { titles, sociallinks, links } = footerApi;

  return (
    <>
      <footer className="pt-24 pb-7 bg-gradient-to-b from-emerald-400 to-green-300 ">
        <div className="grid grid-cols-3 items-center justify-center ">
          {titles?.map((title, i) => (
            <div key={i} className="flex flex-col justify-center items-center ">
              <h1
                key={i}
                className="font-bold text-xl lg:text-base mb-3 uppercase">
                {title.title}
              </h1>
            </div>
          ))}
          {links?.map((link, i) =>
            link?.map((item, i) => (
              <p
                key={i}
                className="flex items-center justify-center flex-col text-sm md:text-xs mt-2 font-mono cursor-pointer hover:underline hover:text-slate-900 hover:scale-110 transition-all duration-200">
                {item.link}
              </p>
            ))
          )}
        </div>
        <div>
          <div className="h-[0.1vh] w-10/12 md:w-11/12 mx-auto bg-black my-8"></div>

          <div className="flex justify-between items-center px-24 md:px-3 md:flex-col-reverse">
            <p className="text-sm md:text-center md:mt-8 md:text-xs ">
              Copyright<sup className="font-bold">&copy;</sup> all reserved
              rights 2023{" "}
              <a href="https://github.com/asfak00" className="font-bold">
                Rahi Ahmed
              </a>
            </p>
            <div className="flex items-center justify-center gap-5 md:gap-2">
              {sociallinks?.map((socialLink, i) => (
                <img
                  src={socialLink.icon}
                  alt="socialLink/icon"
                  className="w-5 h-5 hover:scale-125 cursor-pointer transition-all duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
