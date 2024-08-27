import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return (
    <div className="w-full h-full flex justify-evenly items-center gap-6 mt-24 ml-2 py-2 lg:py-24">
      <ServiceCard count={'1.5k+'} text={'Orders'}/>
      <ServiceCard count={'700+'} text={'Closed'}/>
      <ServiceCard count={'250+'} text={'Pending'}/>
      <ServiceCard count={'50+'} text={'Processing'}/>
    </div>
  );
};

export default ServiceCount;
