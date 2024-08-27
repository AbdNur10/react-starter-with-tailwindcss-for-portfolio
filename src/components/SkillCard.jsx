import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skills, percentage, color, move }) => {
  return (
    <div
      className={`border border-[rgba(255,255,255,.3)]
         rounded-md px-8 py-3 cursor-pointer group w-full
         flex items-center justify-between relative gap-2
         `}
         style={{boxShadow:'inset 0px 0px 10px rgba(255,255,255,0.3)'}}
    >
     <div className="flex-1 flex-col flex items-start justify-start gap-2"
     
     >
     <p className="text-base text-white">{skills}</p>
     <div className="w-full h-1 rounded-md overflow-hidden bg-[rgba(255,25,255,0.2)] relative">
          <motion.div className="h-full absolute top-0 left-0"
          style={{background:color}}
          initial={{width:0}}
          animate={{width:percentage}}
          transition={{duration:1.5}}
          >

          </motion.div>
     </div>
     </div>
     <div className="w-16 h-12 rounded-md relative flex justify-center items-center" 
     style={{border:`1px solid ${color}`}}>
        <motion.div 
                  style={{background:color}}
                  initial={{height:0}}
                  animate={{height:percentage}}
                  transition={{duration:1.5}}
        className="w-full flex justify-center items-center absolute bottom-0 left-0">
          <p className="text-bgPrimary font-bold z-10 tracking-wider">{percentage}</p>
        </motion.div>
     </div>
    </div>
  );
};

export default SkillCard;
