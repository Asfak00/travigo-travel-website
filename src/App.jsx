import React from "react";
import {
  Navbar,
  Footer,
  Hero,
  Memory,
  Explore,
  Advertise,
  Pricing,
  Banner,
  Newsletter,
} from "./Components";

import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  footerAPI,
} from "./Data/data";

function App() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore explore={placesAPI} title="Explore The Beauty Of World" />
      <Advertise brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <Banner bannerApi={bannerAPI} />
      <Newsletter />
      <Footer footerApi={footerAPI} />
    </>
  );
}

export default App;
