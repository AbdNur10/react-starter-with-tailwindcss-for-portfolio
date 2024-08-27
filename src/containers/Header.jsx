import React from "react";
import { Menus } from "../utils/helper";
import {MenuItem} from '../components'

const Header = () => {
  return (
    <div className="fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen 
    justify-center lg:w-32 flex items-end lg:items-center pb-8 lg:pb-0 z-50 ">
      <div className="px-3 py-2 lg:py-12
       rounded-full border border-[rgba(255,255,255,.3)] flex flex-row lg:flex-col justify-center items-center
       gap-12 duration-200 backdrop-blur-md
       "  style={{boxShadow:'inset 0px 0px 10px rgba(255,255,255,.4)'}}>
          {Menus && Menus.map((item,index)=>(
            <MenuItem key={index} menu={item} index={index} />
          ))}
       </div>
    </div>
  );
};

export default Header;
