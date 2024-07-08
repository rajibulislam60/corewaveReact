import React from 'react';
import Container from './Container';
import Button from './Button';
import Image from './Image';

const Trail = () => {
  return (
    <div className="bg-[#06C279]">
      <Container>
        <div className="trailArea">
          <div className="row items-center flex justify-between">
            <div className="col-lg-9">
              <h2 className="text-[45px] font-semibold leading-[54px] text-white mb-[38px]">
                Don't worries, start your free trial today!
              </h2>
              <Button
                className="w-[144px] bg-black text-white px-5 py-2 rounded text-[16px] font-semibold hover:bg-white hover:text-black"
                name="Get Free Trial"
              />
            </div>
            <div className="col-lg-3">
                <Image src="images/trail.png" alt="Woman"/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Trail