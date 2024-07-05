import React from 'react';
import Container from './Container';
import Image from './Image';
import Button from './Button';

const Bannar = () => {
  return (
    <div className="bg-[#EEFFF9]">
      <Container>
        <div className="bannarArea">
          <div className="row flex items-center justify-between">
            <div className="col-lg-6">
              <h1 className="text-[60px] text-[#1B1B1B] font-light leading-[72px]">
                Empower Your Team <br />
                <span className="font-bold">With CoreWave's</span>
              </h1>
              <p
                className="text-[20px] text-[#717171] font-normal leading-[30px] max-w-[511px] mt-[34px]
              mb-[51px]"
              >
                Boost Productivity and Wellness in Your Organization with
                CoreWave's Advanced Tools and Techniques
              </p>
              <div className="bannarBtn flex gap-[20px]">
                <Button
                  className="bg-[#06C279] text-white px-5 py-2 rounded text-[16px] font-semibold hover:bg-white hover:text-black border border-[#06C279]"
                  name="Explore More"
                />
                <Button
                  className="bg-[#06C279] text-white px-5 py-2 rounded text-[16px] font-semibold hover:bg-white hover:text-black border border-[#06C279]"
                  name="Watch Video"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <Image src="images/bannar.png" alt="Bannar Image" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Bannar