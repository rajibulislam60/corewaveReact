import React from 'react';
import Container from './Container';
import Button from './Button';
import Image from './Image';

const About = () => {
  return (
    <div>
      <Container>
        <div className="aboutArea mt-[85px] mb-[100px]">
          <div className="row flex justify-between items-center">
            <div className="col-lg-6">
              <div className="aboutText">
                <h2 className="text-[45px] text-[#1B1B1B] font-semiblod leading-[54px] max-w-[445px]">
                  Experience the power of Corewave
                </h2>
                <p className="text-[16px] text-[#7B7B7B] font-medium leading-[30px] max-w-[550px] mt-[29px] mb-[45px]">
                  Are you ready to take your business to the next level? Look no
                  further than Corewave. Our innovative technology and expert
                  team can help you unlock your business's full potential. By
                  harnessing the power of Corewave, you can streamline your
                  operations, improve efficiency
                </p>
                <Button
                  className="bg-[#EEFFF9] text-[#06C279] text-[16px] font-semibold px-5 py-2 max-w-[132px]"
                  name="Learn More"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <Image src="images/about.png" alt="About Image" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About