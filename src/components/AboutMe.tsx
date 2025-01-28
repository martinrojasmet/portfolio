import React from 'react';
import { BookOpen, Coffee, Code, Heart } from 'lucide-react';

export function AboutMe() {
  return (
    <div className="space-y-8 md:px-[5%]">
      <div className="md:p-8">
        <div className="flex items-center justify-center p-2 md:p-4 md:pb-9">
          <div className="max-w-full w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 border-b border-slate-300">
              {/* Text Section - First on mobile */}
              <div className="order-1 md:order-2 md:pl-5">
                <h1 className='text-6xl lg:text-8xl leading-tight font-bold text-left content-start'>
                  <span className="block">Hello.</span>
                  <span className="block">I'm <span className='gradient-text'>Martin</span>.</span>
                </h1>
                <h2 className='text-xl lg:text-3xl leading-tight text-slate-600 text-primary_text'>Systems Engineer</h2>
              </div>
              
              {/* Image Section - Second on mobile */}
              <div className="order-2 md:order-1 flex-shrink-0">
                <img
                  src="https://github.com/martinrojasmet/portfolio/raw/main/src/assets/profile-pic.png"
                  alt="Profile pic"
                  className="h-48 md:h-64 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="prose max-w-none text-primary_text text-justify font-light pt-7 md:pt-0">
          <p className="mb-4">
            I'm driven to improve people's lives through the use of technology 
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