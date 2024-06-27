import React from "react";
import { AnnotationIcon } from '@heroicons/react/solid';

const VolunteerExperience = () => {
  return (
    <section id="volunteer" className="bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <AnnotationIcon className="w-10 inline-block mb-4 text-purple-900" />
          <h1 className="text-4xl font-medium title-font text-purple-900 mb-4">
            Volunteer Experience
          </h1>
        </div>
        <div className="flex flex-col lg:w-4/5 sm:mx-auto -mx-2">
          <div className="p-2 mb-2">
            <div className="bg-purple-800 rounded p-4 flex flex-col h-full items-center">
              <div className="flex items-center mb-2">
                <AnnotationIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-2" />
                <span className="text-white font-medium">Seva Bharathi, Hyderabad, Telangana - Summer 2019</span>
              </div>
              <p className="text-white mb-1">
                Engaged in community outreach in Hyderabad's slums, promoting education and cleanliness, offering guidance to residents. Also, provided support at Gandhi Hospital by serving meals to patients and assessing the hospital's conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteerExperience;
