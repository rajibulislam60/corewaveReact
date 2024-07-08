import React from 'react';
import Container from './Container';
import Image from './Image';
import List from './List';
import ListItem from './ListItem';
import Button from './Button';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-[100px] mb-[50px]">
      <Container>
        <div className="footerArea">
          <div className="row flex justify-between">
            <div className="col-lg-3">
              <Image src="images/logo.png" alt="Footer logo" />
              <List className="mt-[26px]">
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="mukimsdesign@gmail.com"
                />
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="+88 01767630044"
                />
              </List>
              <div className="flex gap-1 text-[#06C279] mt-[25px] text-[30px]">
                <FaFacebook />
                <AiFillTwitterCircle />
                <IoLogoLinkedin />
              </div>
            </div>
            <div className="col-lg-2">
              <h3 className="text-[20px] font-semibold leading-[30px] mb-[25px]">
                Services
              </h3>
              <List className="mt-[26px]">
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="Web Design"
                />
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="Web Development"
                />
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="SEO Marketing"
                />
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="UI/UX Analysis"
                />
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="Digital Marketing"
                />
              </List>
            </div>
            <div className="col-lg-2">
              <h3 className="text-[20px] font-semibold leading-[30px] mb-[25px]">
                Help
              </h3>
              <List className="mt-[26px]">
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="Account"
                />
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="Support Center"
                />
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="Privacy Policy"
                />
                <ListItem
                  className="text-[14px] text-[#7B7B7B] leading-[22px] font-normal"
                  item="Terms & Conditions"
                />
              </List>
            </div>
            <div className="col-lg-3">
              <h3 className="text-[20px] font-semibold leading-[30px] mb-[20px]">
                Contact Us
              </h3>
              <div>
                <input
                  className="border rounded px-[15px] py-[13px] w-[337px] mb-[14px]"
                  type="text"
                  placeholder="Enter your mail"
                />
                <Button
                  className="w-[187px] bg-[#06C279] text-white px-5 py-2 rounded text-[16px] font-semibold hover:bg-white hover:text-black border border-[#06C279]"
                  name="Request & Callback"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer