import React from "react";

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        <div className="text-center md:text-left mb-4 md:mb-0">
          
          <p className="text-lg mb-1">Sai Kumar Reddy</p>
          <p className="text-base font-bold">Engineer</p>
        </div>
        <div className="flex items-center space-x-4">
         <a href="mailto:saikumarkaluvakolu@gmail.com" className="text-white hover:text-gray-300 transition-all transform hover:translate-x-1">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/saikumarkaluvakolu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all transform hover:translate-x-1">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/sai-gif" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all transform hover:translate-x-1">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
     
      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2024 Sai Kumar Reddy. All rights reserved.</p>
      </div>
    </footer>
  );
}
