import React from "react";
import { motion } from "framer-motion";

function DropdownMenu({ items }) {
  return (
    <motion.div
      className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-48 z-10"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center px-3 py-2 border-b last:border-0 border-gray-200 hover:bg-gray-100 cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-8 h-8 object-cover mr-2"
          />
          <span className="text-sm text-gray-700">{item.title}</span>
        </div>
      ))}
    </motion.div>
  );
}

export default DropdownMenu;
