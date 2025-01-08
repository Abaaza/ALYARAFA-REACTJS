// LivingSpaces.js
import React, { useState } from 'react';

const sampleProducts = [
  {
    id: 1,
    name: 'Awesome Sneakers',
    description:
      'These sneakers are crafted with the finest materials and designed to make a bold statement wherever you go.',
    images: [
      'https://picsum.photos/seed/sneaker1/600/400',
      'https://picsum.photos/seed/sneaker2/600/400',
      'https://picsum.photos/seed/sneaker3/600/400',
      'https://picsum.photos/seed/sneaker4/600/400',
      'https://picsum.photos/seed/sneaker5/600/400',
      'https://picsum.photos/seed/sneaker6/600/400',
      'https://picsum.photos/seed/sneaker7/600/400',
      'https://picsum.photos/seed/sneaker8/600/400',
      'https://picsum.photos/seed/sneaker9/600/400',
    ],
  },
  {
    id: 2,
    name: 'Stylish Jacket',
    description:
      'A lightweight jacket perfect for spring and fall. Durable, water-resistant, and fashion-forward.',
    images: [
      'https://picsum.photos/seed/jacket1/600/400',
      'https://picsum.photos/seed/jacket2/600/400',
    ],
  },
  {
    id: 3,
    name: 'Classic Watch',
    description:
      'An elegant watch that combines timeless style with modern functionality. Crafted for those who value quality.',
    images: [
      'https://picsum.photos/seed/watch1/600/400',
      'https://picsum.photos/seed/watch2/600/400',
      'https://picsum.photos/seed/watch3/600/400',
    ],
  },
  {
    id: 4,
    name: 'Leather Backpack',
    description:
      'Carry all your essentials in style with this premium leather backpack. Perfect for work, travel, or everyday use.',
    images: [
      'https://picsum.photos/seed/backpack1/600/400',
      'https://picsum.photos/seed/backpack2/600/400',
    ],
  },
];

const LivingSpaces = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setActiveImageIndex(0);
  };

  const modalImages = selectedProduct?.images || [];

  const handleImageScroll = (direction) => {
    if (direction === 'next') {
      setActiveImageIndex((prev) =>
        prev === modalImages.length - 1 ? 0 : prev + 1
      );
    } else {
      setActiveImageIndex((prev) =>
        prev === 0 ? modalImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer flex flex-col"
              onClick={() => handleOpenModal(product)}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-2 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <button className="mt-auto bg-gray-400 text-white py-2 px-4 rounded shadow hover:bg-gray-300 transition text-sm">
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              bg-white 
              rounded-lg 
              shadow-lg 
              w-[90vw]
              max-w-4xl
              h-[90vh] 
              overflow-y-auto
              mx-auto 
              my-6 
            "
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Body */}
            <div className="p-6 md:flex">
              {/* Main Image & Thumbnails Section */}
              <div className="md:w-1/2 flex flex-col items-center">
                {/* Main Image */}
                <div className="relative w-full mb-4">
                  <img
                    src={modalImages[activeImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-auto object-cover rounded"
                  />
                  {/* Next/Prev buttons */}
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 px-2 py-1 rounded-r"
                    onClick={() => handleImageScroll('prev')}
                  >
                    &lt;
                  </button>
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 px-2 py-1 rounded-l"
                    onClick={() => handleImageScroll('next')}
                  >
                    &gt;
                  </button>
                </div>

                {/* Thumbnails (2 rows of 4 if 8 images) */}
                <div className="grid grid-cols-4 gap-2">
                  {modalImages.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className={`cursor-pointer rounded ${
                        idx === activeImageIndex
                          ? 'ring-2 ring-blue-500'
                          : 'ring-1 ring-gray-200'
                      }`}
                      onClick={() => setActiveImageIndex(idx)}
                    >
                      <img
                        src={imgUrl}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-16 object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-600 mt-2">
                  {selectedProduct.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LivingSpaces;
