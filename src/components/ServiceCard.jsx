import React from "react";  

const ServiceCard = ({ count, text }) => {  
  return (  
    <div  
      className="w-full lg:w-52 h-32 flex items-center justify-center group border border-[rgba(255,255,255,0.3)] flex-col gap-2 hover:border-primary rounded-md bg-bgPrimary cursor-pointer relative"  
      style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }} // Fixed 'rgba' typo  
    >  
      <div className="hidden group-hover:block absolute inset-0 blur-md bg-gradient-to-br from-primary to-secondary -z-10"></div> {/* Corrected the inset to inset-0 */}  
      <div className="flex flex-col items-center justify-center">  
        <p className="text-2xl text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary capitalize tracking-widest">  
          {count}  
        </p>  
        <p className="text-base text-texlight group-hover:text-white">{text}</p>  
      </div>  
    </div>  
  );  
};  

export default ServiceCard;