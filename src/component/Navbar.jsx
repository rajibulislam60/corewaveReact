import React from 'react';
import Container from './Container';
import Image from './Image';
import List from './List';
import ListItem from './ListItem';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="bg-[#EEFFF9]">
      <Container>
        <div className="navbarArea flex justify-between items-center pt-[26px] pb-[26px]">
          <Image src="images/logo.png" alt="Logo" />
          <div className="navbarItem flex gap-[120px] items-center">
            <List className="flex gap-[45px]">
              <ListItem
                className="text-[#1B1B1B] text-[16px] font-medium hover:text-[#06C279]"
                item="Home"
              />
              <ListItem
                className="text-[#1B1B1B] text-[16px] font-medium hover:text-[#06C279]"
                item="About"
              />
              <ListItem
                className="text-[#1B1B1B] text-[16px] font-medium hover:text-[#06C279]"
                item="Portfolio"
              />
              <ListItem
                className="text-[#1B1B1B] text-[16px] font-medium hover:text-[#06C279]"
                item="Services"
              />
              <ListItem
                className="text-[#1B1B1B] text-[16px] font-medium hover:text-[#06C279]"
                item="Blog"
              />
              <ListItem
                className="text-[#1B1B1B] text-[16px] font-medium hover:text-[#06C279]"
                item="Testimonial"
              />
            </List>
            <Button
              className="bg-[#06C279] text-white px-5 py-2 rounded text-[16px] font-semibold hover:bg-white hover:text-[#06C279] border border-[#06C279]"
              name="Register"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar