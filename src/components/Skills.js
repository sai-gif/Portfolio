import React from 'react';
import { ChipIcon } from '@heroicons/react/solid';
import { skills } from '../data';

// Define a mapping of skill names to Font Awesome icons
const skillIcons = {
  HTML5: <i className="fab fa-html5 text-orange-500 text-2xl"></i>,
  CSS3: <i className="fab fa-css3-alt text-blue-500 text-2xl"></i>,
  JavaScript: <i className="fab fa-js-square text-yellow-500 text-2xl"></i>,
  React: <i className="fab fa-react text-blue-400 text-2xl"></i>,
  Python: <i className="fab fa-python text-yellow-500 text-2xl"></i>,
  'Tailwind CSS': <i className="fab fa-tailwind text-blue-500 text-2xl"></i>,
  Git: <i className="fab fa-git text-red-500 text-2xl"></i>,
  'C/C++': <i className="fas fa-code text-gray-500 text-2xl"></i>,
  SQL: <i className="fas fa-database text-blue-500 text-2xl"></i>,
};

const Skills = () => {
  return (
    <section id="skills" className="bg-purple-900 text-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <ChipIcon className="w-10 inline-block mb-4 text-green-500" />
          <h1 className="text-4xl font-medium title-font mb-4">
            Skills & Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            "These skills showcase my expertise and proficiency in various technologies, with each percentage
             reflecting my mastery and capability in the corresponding area."
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 w-1/3 mb-4">
              <div className="bg-white rounded flex p-4 flex-col h-full items-start" style={{ backgroundColor: '#f0f0f0' }}>
                <div className="flex items-center mb-2">
                  {/* Render the icon dynamically based on the skill name */}
                  {skillIcons[skill.name]}
                  <span className="font-medium text-purple-700 ml-2">
                    {skill.name}
                  </span>
                </div>
                <div className="relative w-full h-6 bg-purple-700 rounded-md mt-2 overflow-hidden">
                  <div
                    className="absolute h-full bg-purple-500 rounded-md"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
