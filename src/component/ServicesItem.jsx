import React from 'react';
import { FaLaptopCode } from "react-icons/fa";

const ServicesItem = ({ h2 }) => {
  return (
    <div>
      <div className="group item max-w-[321px] px-[41px] py-[60px] bg-white hover:bg-[#06C279] rounded duration-[0.4s]">
        <FaLaptopCode className="text-[90px] text-[#06C279] group-hover:text-[#FFFFFF]" />
        <h2 className="text-[20px] text-[#1B1B1B] font-semibold leading-[30px] mt-[14px] group-hover:text-[#FFFFFF]">
          {h2}
        </h2>
        <p className="text-[16px] text-[#7B7B7B] font-normal leading-[24px] mt-[14px] max-w-[260px] group-hover:text-[#FFFFFF]">
          Web development is the art of creating engaging and visually appealing
          websites
        </p>
      </div>
    </div>
  );
};

export default ServicesItem