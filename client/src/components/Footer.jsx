import React from 'react';
// Make sure to install FontAwesome by running: npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
    <footer className=" text-black text-2xl py-3 text-center fixed bottom-0 left-0 w-full ">
      <div className="flex justify-center space-x-12">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/_sunny_480"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 duration-300 hover:scale-125"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        {/* GeeksforGeeks */}
                <a
          href="https://www.geeksforgeeks.org/user/sg747a5ll/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 duration-300 font-semibold hover:scale-125"
        >
         GFG
        </a>


        {/* LinkedIn */}  
        <a
          href="https://www.linkedin.com/in/sunny-gupta-a436302b0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 duration-300 hover:scale-125"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
       
        {/* Leetcode */}
          <a
          href="https://leetcode.com/u/sg7472209/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 duration-300 hover:scale-125"
        >
          <FontAwesomeIcon icon={faCode} size="lg" />
        </a>
        {/* Gmail */}
          <a
          href="mailto:sg7472209@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 duration-300 text-3xl font-bold hover:scale-125"
        >
          G
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/sunnygupta667"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black duration-300 hover:scale-125"
        >

          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        

      </div>
    </footer>
  );
};

export default Footer;
