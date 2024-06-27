import React from "react";
import { AcademicCapIcon } from '@heroicons/react/solid';

const GpaCircle = ({ gpa }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progress = gpa / 4.0;
  const strokeDasharray = `${circumference * progress} ${circumference}`;

  return (
    <div className="flex items-center justify-center mr-4">
      <svg width="80" height="80">
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="grey"
          strokeWidth="6"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="white" // Changed to purple color
          strokeWidth="6"
          strokeDasharray={strokeDasharray}
          transform="rotate(-90 40 40)"
        />
        <text x="50%" y="50%" textAnchor="middle" stroke="white" dy=".3em" fill="grey" fontSize="20px">
          {gpa.toFixed(1)}/4.0
        </text>
      </svg>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <AcademicCapIcon className="w-10 inline-block mb-4 text-purple-900" />
          <h1 className="text-4xl font-medium title-font text-purple-900 mb-4">
            Education
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-purple-900">
            Brief overview of my educational background, showcasing my academic achievements and qualifications.
          </p>
        </div>
        <div className="flex justify-center"> 
          <div className=" max-w-700 px-16"> {/* Updated maximum width to 500px */}
            <div className="p-4 mb-6 bg-purple-800 rounded-lg shadow-md flex items-center"> {/* Centering content card */}
              <GpaCircle gpa={4.0} />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white mb-1">Saint Louis University</h2>
                <p className="text-sm text-gray-300 mb-1">Location: St. Louis, MO</p>
                <p className="text-sm text-gray-300">Master of Sciences, Computer Science - Aug 2023 - May 2025</p>
              </div>
            </div>
            <div className="p-4 mb-6 bg-purple-800 rounded-lg shadow-md flex items-center"> {/* Centering content card */}
              <GpaCircle gpa={3.2} />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white mb-1">Lovely Professional University</h2>
                <p className="text-sm text-gray-300 mb-1">Location: Punjab, India</p>
                <p className="text-sm text-gray-300">Bachelor of Technology, Computer Science Engineering Honors - Aug 2018 - May 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
