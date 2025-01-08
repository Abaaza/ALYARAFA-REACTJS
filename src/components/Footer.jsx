import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* === Brand Description & Socials === */}
        <div>
          <h2 className="text-sm font-semibold mb-2">Aly Arafa</h2>
          <p className="text-xs leading-relaxed">
            Founded in 1952, Arafa is one of the leading suppliers of high
            quality furniture in Egypt. In 1990, <strong>Aly Arafa</strong> was
            introduced as a sub brand, offering totally innovative choices for
            contemporary designs. Thanks to the potential of the third
            generation, Aly Arafa is now widely recognized as a remarkable
            brand offering unique trends.
          </p>
          {/* Social Icons */}
          <div className="mt-4 flex space-x-4 text-xs">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* === Quick Links (hidden on mobile) === */}
        <div className="hidden md:block">
          <h2 className="text-xs font-semibold ml-12 mb-2">Quick Links</h2>
          <ul className="text-xs space-y-2 ml-12">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="#2024-collection" className="hover:text-gray-300">
                2024 Collection
              </a>
            </li>
            <li>
              <a href="#lines" className="hover:text-gray-300">
                Lines
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-gray-300">
                Careers
              </a>
            </li>
            <li>
              <a href="#contactus" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#catalogue" className="hover:text-gray-300">
                Catalogue
              </a>
            </li>
          </ul>
        </div>

        {/* === Addresses === */}
        <div>
          <h2 className="text-xs font-semibold mb-2">Our Locations</h2>
          <ul className="text-xs leading-relaxed space-y-4">
            <li>
              <strong>New Cairo 1:</strong>
              <br />
              383,385 N Teseen In front of Water Way White 2, New Cairo 1,
              Cairo Governorate 11865
              <br />
              <span className="text-gray-300">(+20102 703 7000)</span>
            </li>
            <li>
              <strong>Mivida Parcel 41 (D-03) Boulevard:</strong>
              <br />
              <span className="text-gray-300">(+201010362373)</span>
            </li>
            <li>
              <strong>Heliopolis:</strong>
              <br />
              14 Nabil El Wakkad St.
              <br />
              <span className="text-gray-300">(+201065516886)</span>
            </li>
          </ul>
        </div>

        {/* === Subscribe Section === */}
        <div>
          <h2 className="text-xs font-semibold mb-2">Subscribe to Updates</h2>
          <p className="text-xs mb-4">
            Stay informed about our latest designs and offers.
          </p>
          <form className="space-y-3 text-xs">
            {/* Name */}
            <div>
              <label htmlFor="sub-name" className="block text-xs mb-1 text-xs">
                Name
              </label>
              <input
                id="sub-name"
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 text-gray-800 rounded focus:outline-none text-xs"
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="sub-email" className="block text-xs mb-1 text-xs">
                Email
              </label>
              <input
                id="sub-email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 text-gray-800 rounded focus:outline-none text-xs"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 bg-gray-700 hover:bg-gray-600 text-xs px-4 py-2 rounded text-xs"
            >
              Subscribe
            </button>
          </form>

          {/* Blog & Shop */}
          <div className="mt-6 space-x-4 hidden md:block">
            <a href="#blog" className="underline hover:text-gray-300 text-xs">
              Blog
            </a>
            <a href="#shop" className="underline hover:text-gray-300 text-xs">
              Shop
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 text-center text-xs text-gray-400">
        © Aly Arafa 2023. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
