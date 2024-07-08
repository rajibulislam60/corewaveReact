import React from 'react';
import Container from './Container';
import ClientCard from './ClientCard';

const Client = () => {
  return (
    <div>
      <Container>
        <div className="clientArea text-center mt-[91px] mb-[91px]">
          <div className="clientTitle">
            <h2 className="text-[45px] tsxt-[#1B1B1B] font-semibold leading-[54px] mb-[33px]">
              What Our Clients Saying
            </h2>
          </div>
          <div className="clientItem">
            <div className="row flex gap-[24px]">
              <div className="col-lg-4">
                <ClientCard
                  h2="Excellent Team!"
                  p="The customer service team at this company was very responsive and helpful when I had questions about their products."
                  name="Farhan Rio"
                />
              </div>
              <div className="col-lg-4">
                <ClientCard
                  h2="Excellent Team!"
                  p="The customer service team at this company was very responsive and helpful when I had questions about their products."
                  name="Farhan Rio"
                />
              </div>
              <div className="col-lg-4">
                <ClientCard
                  h2="Excellent Team!"
                  p="The customer service team at this company was very responsive and helpful when I had questions about their products."
                  name="Farhan Rio"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Client