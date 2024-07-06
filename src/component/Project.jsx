import React from 'react';
import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import ProjectCard from './ProjectCard';
import Button from './Button';

const Project = () => {
  return (
    <div>
      <Container>
        <div className="projectArea text-center mt-[91px] mb-[91px]">
          <div className="projectTitle">
            <h2 className="text-[45px] tsxt-[#1B1B1B] font-semibold leading-[54px] mb-[33px]">
              Our Latest Project
            </h2>
            <List className="flex gap-[73px] justify-center">
              <ListItem
                className="text-[16px] font-medium text-[#7B7B7B] hover:text-[#06C279]"
                item="Mobile App"
              />
              <ListItem
                className="text-[16px] font-medium text-[#7B7B7B] hover:text-[#06C279]"
                item="Web Development"
              />
              <ListItem
                className="text-[16px] font-medium text-[#7B7B7B] hover:text-[#06C279]"
                item="UI/UX Design"
              />
              <ListItem
                className="text-[16px] font-medium text-[#7B7B7B] hover:text-[#06C279]"
                item="Graphic Design"
              />
              <ListItem
                className="text-[16px] font-medium text-[#7B7B7B] hover:text-[#06C279]"
                item="Motion Graphic"
              />
            </List>
          </div>
          <div className="projectItem mt-[53px]">
            <div className="row flex justify-between">
              <div className="col-lg-4">
                <ProjectCard
                  src="images/protfolio.png"
                  h5="Portfolio Landing Page"
                />
              </div>
              <div className="col-lg-4">
                <ProjectCard src="images/plate.png" h5="Plant Landing Page" />
              </div>
              <div className="col-lg-4">
                <ProjectCard
                  src="images/real.png"
                  h5="Real Estate Landing Page"
                />
              </div>
            </div>
            <Button
              className="max-w-[170px] bg-[#06C279] text-white px-5 py-2 rounded text-[16px] font-semibold hover:bg-white hover:text-black border border-[#06C279] mx-auto mt-[32px] duration-[0.4s]"
              name="View All Projects"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project