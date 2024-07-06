import React from 'react';
import Image from './Image';

const ProjectCard = ({src, h5}) => {
  return (
    <div className="max-w-[424px] bg-white hover:border hover:border-gray-200 rounded-lg hover:shadow">
      <a href="#">
        <Image src={src} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {h5}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-70">
          Web development is the art of creating engaging and visually appealing
          websites
        </p>
      </div>
    </div>
  );
}

export default ProjectCard