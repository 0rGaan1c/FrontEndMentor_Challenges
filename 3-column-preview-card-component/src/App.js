import React from "react";
import IconLuxury from "./images/icon-luxury.svg";
import IconSedans from "./images/icon-sedans.svg";
import IconSuvs from "./images/icon-suvs.svg";

const App = () => {
  return (
    <>
      <div className="w-11/12 mx-auto my-20 md:flex md:mt-44 md:justify-center">
        <div className="pl-11 pt-11 pb-11 pr-14 rounded-t-md bg-orange md:rounded-t-none md:rounded-l-md md:pt-12 md:w-80">
          <img src={IconSedans} alt="" />
          <h1 className="heading">Sedans</h1>
          <p className="font-lexend text-gray text-opacity-90 font-thin">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <div className="button text-orange hover:text-white">Learn More</div>
        </div>
        <div className="pl-11 pt-11 pb-11 pr-14 bg-cyan md:w-80">
          <img src={IconSuvs} alt="" />
          <h1 className="heading">SUVs</h1>
          <p className="font-lexend text-gray text-opacity-90 font-thin">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <div className="button text-cyan  hover:text-white">Learn More</div>
        </div>
        <div className="pl-11 pt-11 pb-11 pr-14 rounded-b-md bg-darkcyan md:rounded-b-none md:rounded-r-md md:w-80">
          <img src={IconLuxury} alt="" />
          <h1 className="heading">Luxury</h1>
          <p className="font-lexend text-gray text-opacity-90 font-thin">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <div className="button text-darkcyan hover:text-white">
            Learn More
          </div>
        </div>
      </div>
      <div className="text-center mb-4">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-"
          className="text-blue-800 font-bold hover:underline"
        >
          FrontEnd Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/0rGaan1c"
          className="text-blue-800 font-bold hover:underline"
        >
          0rGaan1c
        </a>
      </div>
    </>
  );
};

export default App;
