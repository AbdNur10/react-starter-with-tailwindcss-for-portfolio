import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
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
            Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" />
        </motion.div>
      </div>

      {/* main section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start mt-5">
          <p
            className=" text-transparent bg-clip-text bg-gradient-to-r 
             from-primary  to-secondary"
          >
            My Skills and Word Experience
          </p>
          <p className="text-texlight text-base text-justify tracking-wide ">
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
            <a
              className="text-green-200 underline-offset-1"
              href="https://calendly.com/mehdihasan/free-strategy-cal"
            >
              {" "}
              https://calendly.com/mehdihasan/free-strategy-cal
            </a> <br/>

            <span className=" text-primary mt-5">EXPERIENCE</span>: I have led the marketing strategy for multiple
            companies. I also run my own 7 Figure POD business. So I fully
            understand effective marketing is not about generating more likes
            and followers - it's about developing and growing a business with
            stable sales.
          </p>
        </div>
        <div className="w-full justify-center items-center flex flex-col gap-3 px-8">
          <SkillCard
            skills={"Advertising"}
            percentage={"95%"}
            color={"#FF3F3F"}
          />
          <SkillCard
            skills={"Paid Social Media"}
            percentage={"97%"}
            color={"blue"}
          />
          <SkillCard skills={"Esty"} percentage={"95%"} color={"orange"} />
          <SkillCard
            skills={"Online Marketing"}
            percentage={"95%"}
            color={"#FF3F3F"}
          />
          <SkillCard
            skills={"Tiktok Marketing"}
            percentage={"100%"}
            color={"green"}
          />
          <SkillCard
            skills={"Pinterest Marketing"}
            percentage={"95%"}
            color={"yellow"}
          />
          <SkillCard
            skills={"Print on Demand"}
            percentage={"100%"}
            color={"green"}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
