import React from 'react';
import Container from './Container';
import ServicesItem from './ServicesItem';
import Button from './Button';

const Services = () => {
  return (
    <div className="bg-[#EEFFF9] pt-[70px] pb-[70px] rounded-tl-[300px] rounded-br-[300px]">
      <Container>
        <div className="servicesArea">
          <div className="row flex gap-[113px] items-center">
            <div className="col-lg-7">
              <div className="row flex gap-[40px]">
                <div className="col-lg-6 mt-[133px]">
                  <ServicesItem h2="Web Development" />
                  <br />
                  <ServicesItem h2="UI/UX Analysis" />
                </div>
                <div className="col-lg-6">
                  <ServicesItem h2="SEO Marketing" />
                  <br />
                  <ServicesItem h2="Graphic Design" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <h2 className="max-w-[437px] text-[45px] text-[#1B1B1B] leading-[54px] font-semibold mb-[30px]">
                We offer a variety of services such as
              </h2>
              <p className="max-w-[543px] text-[16px] text-[#7B7B7B] leading-[26px] font-normal mb-[30px]">
                At our company, we pride ourselves on offering a variety of
                services to meet the diverse needs of our clients. Whether
                you're looking for marketing assistance, website design, or IT
                support, we've got you covered
              </p>
              <Button
                className="bg-[#DAF6EB] text-[#06C279] text-[16px] font-semibold px-5 py-2 max-w-[132px]"
                name="All Services"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services