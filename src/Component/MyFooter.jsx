import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 

function MyFooter() {
  return (
    
    <footer className=" border-t-2 border-t-slate-800 rounded-2xl text-white py-6">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a href="#" className="hover:underline">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <FaTwitter />
            </a>
          </li>
        </ul>
        <h3 className="text-center text-gray-400">
          © 2035 by On My Screen. Powered and secured by Google
        </h3>
      </div>
    </footer>
  );
}

export default MyFooter;
