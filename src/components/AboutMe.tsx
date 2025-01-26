import React from 'react';
import { BookOpen, Coffee, Code, Heart } from 'lucide-react';

export function AboutMe() {
  return (
    <div className="space-y-8 px-[5%]">
      <div className="bg-white rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.3)] p-8">
        <div className="text-center mb-8">
          <img
            src="https://github.com/martinrojasmet/portfolio/raw/main/profile-pic.png"
            alt="Profile pic"
            className="h-64 mx-auto mb-4"
          />
        </div>

        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            Hi! I'm Martin, a Systems Engineer driven to improve people's lives through the use of technology 
            and optimization. I enjoy math and challenging myself with complex problems. 
            Looking to learn and grow, one step at a time. And, deeply committed to protecting 
            our planet, with the goal to contribute to sustainability and the enviroment through 
            my apps.
          </p>
          
          <p>
            This is a page in which I will be uploading the side-projects I do. I figured it would be a way 
            to keep myself motivated to do more in the future. Maybe in the future I'll add some other sections
            about myself. I hope you enjoy it.
          </p>
        </div>

      </div>
    </div>
  );
}