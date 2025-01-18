import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // For toggling submenus on mobile
  const [showProducts, setShowProducts] = useState(false);
  const [showLines, setShowLines] = useState(false);

  // We'll generate a random background for the *mobile* menu only.
  const [mobileBg, setMobileBg] = useState("");

  useEffect(() => {
    // For example, we pick a random ID for picsum, up to 999
    const random = Math.floor(Math.random() * 1000);
    const url = `https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9410.webp`;
    setMobileBg(url);
  }, []);

  // Desktop + mobile data:
  const productsSubmenu = [
    {
      title: "Dining Rooms",
      image: 'https://d1yp2xq08uy96k.cloudfront.net/images/DSC_1890.webp',
      to: "/diningrooms",
    },
    {
      title: "Living Spaces",
      image: "https://d1yp2xq08uy96k.cloudfront.net/images/DSC06908-1.webp",
      to: "/livingspaces",
    },
  ];

  const linesSubmenu = [
    {
      title: "Nu",
      image: "https://d1yp2xq08uy96k.cloudfront.net/images/nu.webp",
      to: "/nu",
    },
    {
      title: "VanDu",
      image: "https://d1yp2xq08uy96k.cloudfront.net/images/vandu.webp",
      to: "/vandu",
    },
  ];

  // Desktop: show/hide dropdown on hover
  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Desktop: close dropdown on click
  const handleDropdownClick = () => {
    setActiveDropdown(null);
  };

  // Toggle entire mobile menu
  const toggleMobileMenu = () => { 
    setShowMobileMenu((prev) => !prev);
    // Reset mobile submenus
    setShowProducts(false);
    setShowLines(false);
  };

  return (
    <>
      {/* 
        Desktop only: A thin bar at the top with "Shop" & "Blog" 
        hidden on mobile (md:hidden).
      */}
      <div className="fixed top-0 left-0 right-0 h-6 bg-black bg-opacity-85 text-white hidden md:flex items-center justify-end px-4 text-[0.625rem] z-50">
        <Link to="/shop" className="mx-2 hover:text-gray-200">
          Shop
        </Link>
        <Link to="/blog" className="mx-2 hover:text-gray-200 mr-20">
          Blog
        </Link>
      </div>

      {/* 
        MAIN NAVBAR 
        Shifts down for desktop (md:top-6) to avoid top bar, 
        sits at top on mobile (top-0).
      */}
      <nav
        className="
          fixed
          top-0 md:top-6
          left-0 right-0
          z-50
          h-[10vh]
          flex items-center justify-between
          bg-black bg-opacity-50
          backdrop-blur-sm
          px-4 py-2
        "
      >
        {/* DESKTOP LEFT NAV */}
        <ul className="hidden md:flex space-x-6 text-white px-16">
          {/* HOME */}
          <li>
            <Link to="/" className="hover:text-gray-200 transition-colors text-xs">
              Home
            </Link>
          </li>

          {/* PRODUCTS w/ Hover Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-gray-200 transition-colors inline-flex items-center text-xs cursor-pointer">
              Products
              <span className="ml-1 text-sm">▼</span>
            </span>
            {/* DROPDOWN (2 columns, side by side) */}
            {activeDropdown === "products" && (
              <motion.div
                className="absolute top-full left-0 w-[35rem] bg-white shadow-lg rounded-md mt-1 z-50"
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 3 }}
              >
                <div className="flex">
                  {productsSubmenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className="relative w-1/2 h-40 flex items-center justify-center text-white overflow-hidden"
                      onClick={handleDropdownClick}
                    >
                      {/* Background image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Dark overlay for better text visibility */}
                      <div className="absolute inset-0 bg-black bg-opacity-30" />
                      {/* Title text */}
                      <span className="relative z-10 bg-black bg-opacity-60 px-3 py-1 rounded text-sm">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </li>

          {/* 2024 COLLECTION */}
          <li>
            <Link
              to="/collection"
              className="hover:text-gray-200 transition-colors text-xs"
            >
              2024 Collection
            </Link>
          </li>

          {/* LINES w/ Hover Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("lines")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-gray-200 transition-colors inline-flex items-center text-xs cursor-pointer">
              Lines
              <span className="ml-1 text-sm">▼</span>
            </span>
            {/* DROPDOWN (2 columns, side by side) */}
            {activeDropdown === "lines" && (
              <motion.div
                className="absolute top-full left-0 w-[35rem] bg-white shadow-lg rounded-md mt-1 z-50"
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 3 }}
              >
                <div className="flex">
                  {linesSubmenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className="relative w-1/2 h-40 flex items-center justify-center text-white overflow-hidden"
                      onClick={handleDropdownClick}
                    >
                      {/* Background image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30" />
                      <span className="relative z-10 bg-black bg-opacity-60 px-3 py-1 rounded text-sm">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </li>
        </ul>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-white">
          <Link to="/">
        <img
                            src="https://s3.me-south-1.amazonaws.com/www.wall-masters.com/images/LOGO3.png"
                            className="w-auto h-10 object-cover mr-2"
                          />
                            </Link>
        </div>

        {/* DESKTOP RIGHT NAV */}
        <ul className="hidden md:flex space-x-6 text-white px-16 justify-end">
          <li>
            <Link to="/aboutus" className="hover:text-gray-200 transition-colors text-xs">
              About
            </Link>
          </li>
          <li>
            <Link to="/careers" className="hover:text-gray-200 transition-colors text-xs">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-gray-200 transition-colors text-xs">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/catalogue" className="hover:text-gray-200 transition-colors text-xs">
              Catalogue
            </Link>
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <FaBars />
        </div>
      </nav>

      {/* MOBILE MENU (SLIDE FROM LEFT) */}
      <AnimatePresence>
        {showMobileMenu && (
         <motion.div
         className="fixed top-0 left-0 h-full w-[75%] z-50 shadow-xl"
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         exit={{ x: "-100%" }}
         style={{
           backgroundImage: `url(${mobileBg})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
       >
         {/* Semi-transparent overlay */}
         <div
           style={{
             position: "absolute",
             inset: 0,
             backgroundColor: "black",
             opacity: 0.5, // 50% opacity
             zIndex: 0,
           }}
         ></div>
       
         {/* Content */}
         <div className="relative z-10 flex flex-col h-full overflow-y-auto bg-black bg-opacity-50 p-4">
           {/* CLOSE BUTTON */}
           <button
             className="text-white text-2xl self-end mb-4"
             onClick={toggleMobileMenu}
           >
             X
           </button>

              {/* 
                TOP BAR LINKS for mobile (Shop, Blog)
                each with border-b to separate 
              */}
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="text-white text-xl py-2 border-b border-white"
              >
                Home
              </Link>
 
              {/* HOME */}

              {/* PRODUCTS (Mobile) */}
              <div className="py-2 border-b border-white">
                <div
                  onClick={() => setShowProducts((prev) => !prev)}
                  className="flex justify-between items-center cursor-pointer text-xl text-white"
                >
                  <span>Products</span>
                  <span>{showProducts ? "▲" : "▼"}</span>
                </div>
                <AnimatePresence>
                  {showProducts && (
                    <motion.div
                      className="bg-gray-200 bg-opacity-40 rounded mt-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      {productsSubmenu.map((item, i) => (
                        <Link
                          key={i}
                          to={item.to}
                          onClick={toggleMobileMenu}
                          className="flex items-center p-2 border-b border-white last:border-b-0"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-15 h-10 object-cover mr-2"
                          />
                          <span className="text-xl text-black">
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2024 Collection */}
              <Link
                to="/collection"
                onClick={toggleMobileMenu}
                className="text-white text-xl py-2 border-b border-white"
              >
                2024 Collection
              </Link>

              {/* LINES (Mobile) */}
              <div className="py-2 border-b border-white">
                <div
                  onClick={() => setShowLines((prev) => !prev)}
                  className="flex justify-between items-center cursor-pointer text-xl text-white"
                >
                  <span>Lines</span>
                  <span>{showLines ? "▲" : "▼"}</span>
                </div>
                <AnimatePresence>
                  {showLines && (
                    <motion.div
                      className="bg-gray-200 bg-opacity-40 rounded mt-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      {linesSubmenu.map((item, i) => (
                        <Link
                          key={i}
                          to={item.to}
                          onClick={toggleMobileMenu}
                          className="flex items-center p-2 border-b border-white last:border-b-0"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-15 h-10 object-cover mr-2"
                          />
                          <span className="text-md text-black">
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ABOUT */}
              <Link
                to="/aboutus"
                onClick={toggleMobileMenu}
                className="text-white text-xl py-2 border-b border-white"
              >
                About
              </Link>

              {/* CAREERS */}
              <Link
                to="/careers"
                onClick={toggleMobileMenu}
                className="text-white text-xl py-2 border-b border-white"
              >
                Careers
              </Link>

              {/* CONTACT US */}
              <Link
                to="/contactus"
                onClick={toggleMobileMenu}
                className="text-white text-xl py-2 border-b border-white"
              >
                Contact Us
              </Link>

              {/* CATALOGUE */}
              <Link
                to="/catalogue"
                onClick={toggleMobileMenu}
                className="text-white text-xl py-2 border-b border-white"
              >
                Catalogue
              </Link>
              <Link
                to="/shop"
                onClick={toggleMobileMenu}
                className="text-white text-xl py-2 border-b border-white"
              >
                Shop
              </Link>

              <Link
                to="/blog"
                onClick={toggleMobileMenu}
                className="text-white text-xl py-2 border-b border-white"
              >
                Blog
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
