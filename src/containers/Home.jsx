import React from "react";
import Image from "../assets/img/Image.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section*/}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello ! It's me
            <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
              {" "}
              Mehdi Masud
            </span>
          </h2>
          <h2 className="text-2xl lg:text-4xl text-texlight mt-5">
            Also I'm a {""}
            <HeroTypeWritter
              words={["Agency Owner..", "Freelancer..", "BusinessMan..","Graphic Designer.."]}
              speed={100}
            />
          </h2>

          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            magnam aspernatur dolor a dolorum expedita eum voluptas, nam libero
            provident eius velit atque deserunt quidem repudiandae! Magnam modi
            culpa inventore!
          </p>

          <div className="flex items-center justify-center gap-12 mt-6">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>
          <a
            href="#"
            style={{boxShadow:'inset 0px 0px 10px rgba(255,255,255,.4)'}}
            className="mt-10 border border-[rgba(255,255,255,0.3)]
             rounded-xl px-8 py-3 active:95 group hover:border-primary mb-8"
          >
            <p className="text-texlight
            group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r 
            group-hover: from-primary group-hover: to-secondary">Hire Me</p>
          </a>
        </div>
        {/* image section*/}
        <div className="w-full h-full flex items-end justify-center lg:items-center">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            src={Image}
            className="w-[400px] h-[400px] object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
