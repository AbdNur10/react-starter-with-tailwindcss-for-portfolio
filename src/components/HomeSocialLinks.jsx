import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const HomeSocialLinks = ({data,index}) => {
  const [hover,setHover]=useState(false)
  return (
    <motion.a  
    key={index}
     href={data.uri}  
     initial={{opacity:0, y:25}}
     animate={{opacity:1, y:0}}
     exit={{opacity:0, y:25}}
     transition={{delay : index *0.3}}
    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[2px] cursor-pointer"  
    onMouseEnter={() => setHover(true)}   
    onMouseLeave={() => setHover(false)}   
  > 
        <AnimatePresence>
          {
            hover && (
              <motion.div className={`absolute inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10`}></motion.div>
            )
          }

              <div className="w-full h-full rounded-full flex items-center justify-center bg-bgPrimary ">
                  <data.Icon className={`text-texlight`}/>
              </div>
        </AnimatePresence>
    </motion.a>
  );
};

export default HomeSocialLinks;
