import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">
          &copy; 2025 Your Company Name. All Rights Reserved.
        </p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-4 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-4 text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-4 text-sm">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
