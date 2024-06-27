import { BadgeCheckIcon } from "@heroicons/react/outline"; 
import React from "react";
import { certificates } from "../data";

export default function Certificates() {
  return (
    <section id="certificates" className="text-gray-400 bg-purple-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BadgeCheckIcon className="mx-auto inline-block w-10 mb-4 text-green-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Certificates I've Achieved
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            "Here are a few certificates I've achieved."
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {certificates.map((certificate) => (
            <a
              href={certificate.link}
              key={certificate.image}
              className="sm:w-1/2 w-full p-4"
              style={{ position: "relative", zIndex: "1" }}
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={certificate.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-purple-800 opacity-0 hover:opacity-100 hover:border-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {certificate.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {certificate.title}
                  </h1>
                  <p className="leading-relaxed text-gray-300">
                    {certificate.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}