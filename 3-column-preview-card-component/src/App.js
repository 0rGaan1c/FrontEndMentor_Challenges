import React from "react";
import IconLuxury from "./images/icon-luxury.svg";
import IconSedans from "./images/icon-sedans.svg";
import IconSuvs from "./images/icon-suvs.svg";

const App = () => {
  return (
    <>
      <div className="w-11/12 mx-auto my-20">
        <div className="pl-11 pt-11 pb-11 pr-14 rounded-t-md bg-orange">
          <img src={IconSedans} alt="" />
          <h1 className="heading">Sedans</h1>
          <p className="font-lexend text-gray text-opacity-90 font-thin">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <div className="button text-orange">Learn More</div>
        </div>
        <div className="pl-11 pt-11 pb-11 pr-14 bg-cyan">
          <img src={IconSuvs} alt="" />
          <h1 className="heading">SUVs</h1>
          <p className="font-lexend text-gray">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <div className="button text-cyan text-opacity-90 font-thin">
            Learn More
          </div>
        </div>
        <div className="pl-11 pt-11 pb-11 pr-14 rounded-b-md bg-darkcyan">
          <img src={IconLuxury} alt="" />
          <h1 className="heading">Luxury</h1>
          <p className="font-lexend text-gray text-opacity-90 font-thin">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <div className="button text-darkcyan">Learn More</div>
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
