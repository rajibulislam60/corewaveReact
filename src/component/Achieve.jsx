import React from 'react';
import Container from './Container';
import Button from './Button';
import AchieveItem from './AchieveItem';

const Achieve = () => {
  return (
    <div className="bg-[#EEFFF9] pt-[70px] pb-[70px] rounded-tl-[300px] rounded-br-[300px]">
      <Container>
        <div className="achieveArea">
          <div className="row flex justify-between items-center">
            <div className="col-lg-6">
              <h2 className="max-w-[437px] text-[45px] text-[#1B1B1B] leading-[54px] font-semibold mb-[30px]">
                Take your business to new heights with our top services.
              </h2>
              <p className="max-w-[543px] text-[16px] text-[#7B7B7B] leading-[26px] font-normal mb-[30px]">
                At our company, we pride ourselves on offering a variety of
                services to meet the diverse needs of our clients. Whether
                you're looking for marketing assistance, website design, or IT
                support, we've got you covered
              </p>
              <Button
                className="bg-[#06C279] text-white text-[16px] font-semibold px-5 py-2 max-w-[177px]"
                name="Get In Touch Now"
              />
            </div>
            <div className="col-lg-6">
              <div className="row flex gap-[40px]">
                <div className="col-lg-6">
                  <AchieveItem h2="Project Done" h3="1200+" />
                  <br />
                  <AchieveItem h2="Project Done" h3="1200+" />
                </div>
                <div className="col-lg-6 mt-[95px]">
                  <AchieveItem h2="Project Done" h3="1200+" />
                  <br />
                  <AchieveItem h2="Project Done" h3="1200+" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Achieve