import React from 'react';
import Image from './Image';
import { FaStar } from "react-icons/fa";

const ClientCard = ({h2, p, name}) => {
  return (
    <div>
      <div className="clientId flex flex-col items-center w-[424px] bg-white border border-gray-200 rounded-lg hover:shadow py-[44px] hover:bg-[#F1F1F1]">
        <Image src="images/client.png" alt="Client" />
        <h2 className="text-[24px] font-semibold leading-[30px] mt-[15px]">
          {h2}
        </h2>
        <div className="flex">
          <FaStar className="text-[#FAB93C]" />
          <FaStar className="text-[#FAB93C]" />
          <FaStar className="text-[#FAB93C]" />
          <FaStar className="text-[#FAB93C]" />
          <FaStar className="text-[#FAB93C]" />
        </div>
        <p className=" mx-auto text-[16px] text-[#7B7B7B] font-normal leading-[24px] mt-[20px] w-[310px]">
          {p}
        </p>
        <h4 className="text-[18px] font-semibold leading-[30px] mt-[15px]">
          {name}
        </h4>
        <h5 className="text-[16px] text-[#7B7B7B] font-normal leading-[24px]">
          Happy Seller
        </h5>
      </div>
    </div>
  );
}

export default ClientCard