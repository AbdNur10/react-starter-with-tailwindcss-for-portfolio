import React from "react";
import { motion } from "framer-motion";

const Alert = ({ status = "success", message }) => {
  // Configuration for different alert statuses
  const statusConfig = {
    success: {
      bgColor: "bg-green-400",
      borderColor: "border-green-400",
      textColor: "text-white",
    },
    warning: {
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-400",
      textColor: "text-texlight",
    },
    danger: {
      bgColor: "bg-red-400",
      borderColor: "border-red-400",
      textColor: "text-white",
    },
  };

  const config = statusConfig[status.toLowerCase()];

  return (
    <motion.div
    initial={{opacity:0,x:50}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:50}}
      className={`fixed top-12 right-12 px-4 py-3 rounded-md border w-auto overflow-hidden backdrop-blur-md ${config.borderColor}`}
    >
      <p className={`${config.textColor}`}>{message}</p>
      <div className="absolute inset-x-0 h-1 bottom-0 bg-[rgba(255,255,255,0.5)]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className={`${config.bgColor} h-full`}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Alert;
