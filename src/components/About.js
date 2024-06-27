import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import selfie from '../images/selfi.jpg'; // Import the image
import Resume from '../images/Resume.pdf'; 

export default function About() {
  const downloadResume = () => {
    const resumePath = Resume; 
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Sai_Kumar_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="flex flex-col items-start mb-8 mr-8 space-y-4">
          <a href="mailto:saikumarkaluvakolu@gmail.com" className="text-purple-700 hover:text-green-500">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/saikumarkaluvakolu/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-green-500">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
          <a href="https://github.com/sai-gif" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-green-500">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-700">
            Hi, I'm Sai Kumar Reddy Kaluvakolu.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed text-purple-700">
            I am a Computer Science enthusiast fueled by a fervor to ascend as a versatile full-stack developer. My
            ardor extends to the enchanting world of Artificial Intelligence, where I aspire to craft innovative
            solutions. Driven by an insatiable curiosity, I am committed to continuous learning and dedicated to 
            implementing cutting-edge technologies that push the boundaries of what's possible.
          </p>
          <div className="flex justify-center">
            <a
              href="https://sai-gif.github.io/contatct/"
              className="flex items-center text-purple-700 bg-white border-2 border-purple-700 py-2 px-6 focus:outline-none hover:bg-purple-700 hover:text-white rounded text-lg">
              <i className="fas fa-briefcase mr-2"></i> Work With Me
            </a>
            <button
              onClick={downloadResume}
              className="ml-4 flex items-center text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded text-lg">
              <i className="fas fa-file-download mr-2"></i> Resume
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center w-full h-full bg-transparent"
            alt="hero"
            src={selfie} // Use the imported image variable here
          />
        </div>
      </div>
    </section>
  );
}
