import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


function MobileMenu({ closeMenu, productsSubmenu, linesSubmenu }) {
  const [showProducts, setShowProducts] = useState(false);
  const [showLines, setShowLines] = useState(false);

  return (
    <div
      className="w-full h-full relative overflow-y-auto flex flex-col p-4"
      style={{

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Close Button */}
      <button className="text-white text-2xl self-end mb-4" onClick={closeMenu}>
        X
      </button>

      {/* Menu Links */}
      <div className="flex flex-col space-y-4 text-white">
        <a href="#home" onClick={closeMenu} className="text-lg">
          Home
        </a>

        {/* Products Submenu */}
        <div>
          <div
            onClick={() => setShowProducts(!showProducts)}
            className="flex justify-between items-center text-lg cursor-pointer"
          >
            <span>Products</span>
            <span>{showProducts ? "▲" : "▼"}</span>
          </div>
          <AnimatePresence>
            {showProducts && (
              <motion.div
                className="mt-2 bg-white/80 rounded"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                {productsSubmenu.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center p-2 border-b border-gray-300 last:border-0"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-8 h-8 object-cover mr-2"
                    />
                    <span className="text-gray-800 text-sm">{item.title}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="#2024-collection" onClick={closeMenu} className="text-lg">
          2024 Collection
        </a>

        {/* Lines Submenu */}
        <div>
          <div
            onClick={() => setShowLines(!showLines)}
            className="flex justify-between items-center text-lg cursor-pointer"
          >
            <span>Lines</span>
            <span>{showLines ? "▲" : "▼"}</span>
          </div>
          <AnimatePresence>
            {showLines && (
              <motion.div
                className="mt-2 bg-white/80 rounded"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                {linesSubmenu.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center p-2 border-b border-gray-300 last:border-0"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-8 h-8 object-cover mr-2"
                    />
                    <span className="text-gray-800 text-sm">{item.title}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Remaining Nav Items */}
        <a href="#about" onClick={closeMenu} className="text-lg">
          About
        </a>
        <a href="#careers" onClick={closeMenu} className="text-lg">
          Careers
        </a>
        <a href="#contact-us" onClick={closeMenu} className="text-lg">
          Contact Us
        </a>
        <a href="#catalogue" onClick={closeMenu} className="text-lg">
          Catalogue
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
