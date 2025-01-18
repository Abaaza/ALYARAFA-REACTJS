// Footer.jsx

import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Footer = () => {
  // States for Subscription form
  const [subName, setSubName] = useState("");
  const [subEmail, setSubEmail] = useState("");

  // Handle subscription form submission via EmailJS
  const handleSubscription = (e) => {
    e.preventDefault();

    // If your EmailJS template has only {{user_name}}, pack everything in one var:
    const templateParams = {
      user_name: `Subscription Request
Name: ${subName}
Email: ${subEmail}`,
    };

    emailjs
      .send(
        "service_4hrebk8",    // Service ID
        "template_1zxs0jz",   // Template ID
        templateParams,
        "1mIy5IpEpJPFCN01g"   // Public/User Key
      )
      .then((response) => {
        alert("Subscription request sent successfully!");
        console.log("EmailJS SUCCESS:", response.status, response.text);
        // Reset form
        setSubName("");
        setSubEmail("");
      })
      .catch((error) => {
        alert("There was an error sending your subscription.");
        console.log("EmailJS FAILED...", error);
      });
  };

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
              href="https://www.facebook.com/alyarafafurniture?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/alyarafa.eg/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.youtube.com/@alyarafafurniture1581"
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
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/nu" className="hover:text-gray-300">
                NU
              </Link>
            </li>
            <li>
              <Link to="/collection" className="hover:text-gray-300">
                2024 Collection
              </Link>
            </li>
            <li>
              <Link to="/vandu" className="hover:text-gray-300">
                Van Du
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gray-300">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/catalogue" className="hover:text-gray-300">
                Catalogue
              </Link>
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
          {/* Subscription Form */}
          <form className="space-y-3 text-xs" onSubmit={handleSubscription}>
            {/* Name */}
            <div>
              <label htmlFor="sub-name" className="block text-xs mb-1">
                Name
              </label>
              <input
                id="sub-name"
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 text-gray-800 rounded focus:outline-none text-xs"
                value={subName}
                onChange={(e) => setSubName(e.target.value)}
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="sub-email" className="block text-xs mb-1">
                Email
              </label>
              <input
                id="sub-email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 text-gray-800 rounded focus:outline-none text-xs"
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 bg-gray-700 hover:bg-gray-600 text-xs px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>

          {/* Blog & Shop Links */}
          <div className="mt-6 space-x-4 hidden md:block">
            <Link to="/blog" className="underline hover:text-gray-300 text-xs">
              Blog
            </Link>
            <Link to="/shop" className="underline hover:text-gray-300 text-xs">
              Shop
            </Link>
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
