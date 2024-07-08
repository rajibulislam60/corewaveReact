import React from 'react';
import { FaLaptopCode } from "react-icons/fa";

const AchieveItem = ({h2, h3}) => {
  return (
    <div className="group max-w-[261px] px-[65px] py-[40px] bg-white hover:bg-[#06C279] rounded-md duration-[0.4s] text-center">
      <FaLaptopCode className="text-[73px] text-[#06C279] group-hover:text-[#FFFFFF] mx-auto" />
      <h2 className="text-[20px] text-[#1B1B1B] font-semibold leading-[30px] mt-[14px] group-hover:text-[#FFFFFF]">
        {h2}
      </h2>
      <h3 className="text-[30px] text-[#1B1B1B] font-semibold leading-[30px] mt-[14px] group-hover:text-[#FFFFFF]">
        {h3}
      </h3>
    </div>
  );
}

export default AchieveItem