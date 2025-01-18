// DiningRooms.js
import React, { useState } from 'react';

const sampleProducts = [

  {
    id: 9,
    name: '91',
    description:
    'Gather your family and loved ones around our 91 dining room. Because family is not an important thing, it’s everything.',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF3671-Edit-Edit-1-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1801-Edit-Edit-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1827.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1855-Edit.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1815-Edit.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/Arafa-culling-204-DSC04516.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/Arafa-culling-270-DSC04668.webp',
    ],
  },

  {
    id: 11,
    name: 'FATIMA',
    description:
    'Elegance Redefined: Gather around a slice of sophistication. Our slender Fatimadining table with its finely engraved surface merges aesthetics with functionality, creating a dining experience that’s both intimate and exquisite. Perfect for those who appreciate the delicate art of dining.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC07245.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC_1890.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC07306.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC07262.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC_1901.webp',
    ],
  },

  {
    id: 22,
    name: 'Tijdloos Dining Room',
    description:
      'Elegance and Comfort Unite: A Perfect Blend of Wood, White Marble, and Serene Blue-Grey Fabrics in this Exquisite Dining Room.',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00653.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/20221020_151611-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/20221020_151546-scaled.webp',


    ],
  },

  {
    id: 25,
    name: 'Luxe Dining Room',
    description:
      'Elegance meets vibrancy in this stunning dining room. The rich hues of the orange chairs infuse energy into the space, while the sleek marble top table exudes timeless sophistication. A perfect blend of style and comfort, this setting invites you to savor both delicious meals and delightful conversations',

    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00634.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG-1512-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00638.webp',
    ],
  },

  {
    id: 31,
    name: 'COMPACT',
    description:
      'COMPACT a stunning set that combines natural materials with modern design in a space savvy design while not compromising  on style or elegance. The chairs are upholstered in soft velvet, providing both comfort and style. The wooden legs of the chairs and table is expertly crafted to showcase the natural grain and texture of the wood.',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/cover-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9204.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9256.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9297.webp',
    ],
  },
  {
    id: 32,
    name: 'ORBIT',
    description:
      'the epitome of sophistication and elegance. orbit features a sleek marble tabletop that is both durable and beautiful, while the wooden legs and base provide a natural warmth and richness to the design. The leather chairs not only add a touch of luxury, but also provide comfortable seating for hours of dining pleasure.',
    
    images: [ 
      'https://d1yp2xq08uy96k.cloudfront.net/images/cover.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4584-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00710.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4587.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9420.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9430-2.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9419-1.webp',
    ],
  },
  {
    id: 33,
    name: 'BRANDO',
    description:
    'BRANDO a stunning work of art that seamlessly integrates natural materials with modern design. The chairs are crafted from natural materials, such as wood and woven fibers, providing both comfort and style. The wooden frame of the chairs and table is expertly crafted to showcase the natural beauty of the materials.',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF2017.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF2004.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1996.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1998.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF2005-2.webp',

    ],
  },
  {
    id: 34,
    name: 'FIKA',
    description:
"FIKA a stunning piece of furniture that combines natural materials with modern design. The chairs are upholstered in supple suede leather, providing both comfort and style. The wooden frame of the chairs and table is expertly crafted to showcase the natural grain and texture of the wood.",
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00489-2.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00456.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00464.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00481.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00510.webp',
  
    ],
  },
];

const DiningRooms = () => {
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

export default DiningRooms;
