import React from "react";

import {
  About,
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  ServiceCount,
  Skills,
} from "./";
import { Socials } from "../utils/helper";
import { AnimatePresence } from "framer-motion";
import { HomeSocialLinks } from "../components";

const App = () => {
  return (
    <div className="w-full xl:w-[1480px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* 
    <div className="w-full xl:w-[1480px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
    */}
      {/*Particels Container */}
        <ParticlesContainer/>
      {/*Header Container */}
      <Header />
      {/*Home Container */}
      <Home />
      {/*Services Container */}
      <ServiceCount />
      {/*About Container */}
      <About />
      {/*Skills Container */}
      <Skills />
      {/*Projects Container */}
      <Projects />
      {/*Contact Container */}
      <Contact />
      {/*Footer Container */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl text-texlight tracking-wide">Mehdi Masud.</p>
        <div className="flex items-center justify-center gap-16 mt-10">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
          <p className="text-texlight text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus quae officiis cupiditate quam esse, ab, aspernatur
            laboriosam accusamus explicabo molestias expedita omnis! Quo nisi
            odit quos, dolor laudantium libero quae?
          </p>
          <p className="text-texlight text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum vero
            sunt accusamus officia, perspiciatis laudantium ipsum nesciunt enim
            optio minima temporibus blanditiis perferendis aperiam dicta ea
            deleniti beatae veniam aut.
          </p>
          <p className="text-texlight text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            veniam dolores aliquid maiores adipisci, ullam mollitia iusto, odit
            corporis voluptas quibusdam? Corporis magnam esse at minus rerum
            tenetur est sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
