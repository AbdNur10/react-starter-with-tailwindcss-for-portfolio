import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import Image2 from "../assets/img/img2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className=" flex justify-center items-center flex-col gap-12 my-12"
    >
      <div className="w-full flex items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" />
          <p
            className="
            text-transparent bg-clip-text bg-gradient-to-r 
             from-primary  to-secondary"
          >
            About
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" />
        </motion.div>
      </div>

      {/* main section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
        <div className="w-full justify-center items-center flex px-8">
          <div
            className="w-full lg:w-96 p-[2px] rounded-md 
            bg-gradient-to-br from-primary to-secondary relative"
          >
            <img
              src={Image2}
              className="w-full h-60% object-contain rounded-md"
            />
            <div
              className=" absolute w-full h-full -top-3 -left-2 rounded-md
               bg-gradient-to-br from-primary to-secondary blur-[5px] -z-10 "
            ></div>
          </div>
        </div>
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-base text-justify tracking-wide mt-20">
            I bring over 8+ years of eCommerce, Digital Marketing and sales
            panning experience to clients. Started my Print-on-Demand Journey
            back in 2015 and sold more than 500K units of product ever since. "I
            wish I had called you sooner" is a common comment I hear from my
            clients. As an active eCommerce entrepreneur myself who is actively
            selling on Etsy, Amazon and Shopify, I got tired of seeing potential
            store owners not getting desired results because of wrong marketing
            and promotion having said that I have seen a few people doing great
            but not having enough time for them-self as they are always busy
            uploading and managing their own store. I launched eComimpactor in
            2021 to help struggling entrepreneurs achieve their goal and help
            people automate their businesses by implementing proper SOPs and
            people in place. Me and my team will help you to find the loophole
            and solve it. Book me for a free strategic session:
            <a  className='text-green-200 underline-offset-1'href="https://calendly.com/mehdihasan/free-strategy-cal"> https://calendly.com/mehdihasan/free-strategy-cal</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
