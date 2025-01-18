// Collection.js
import React, { useState } from 'react';

const sampleProducts = [
 
  {
    id: 5,
    name: 'NORDIC',
    description:
    'Crafted from Nature’s Beauty: This exquisite wood engraving showcases the timeless elegance of olive wood, a true work of art that reflects both the strength of the material and the mastery of the craftsman’s hand.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_6401.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC06849.webp',
    ],
  },
  {
    id: 6,
    name: 'NORMAN & ENZO',
    description:
    'Luxury meets comfort: Our upholstered sofa effortlessly combines clean curves with the opulence of velvet and the softness of linen, creating a seating experience like no other.',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4549-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/Arafa-culling-185-DSC04412.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8750-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8710-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8696-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF0657.webp',
      
    ],
  },
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
    id: 1,
    name: 'The Modern Dala Horse Collection',
    description:
      'Inspired by the iconic Swedish Dala Horse, this modern reimagining features sleek, glossy finishes in deep green and rich burgundy tones. These handcrafted sculptures, available in varying sizes, symbolize strength, tradition, and craftsmanship while adding a contemporary touch to any space. Perfect for collectors or as a statement decor piece, The Modern Dala Horse Collection combines heritage with modern design aesthetics.',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/s4.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/s2.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/s1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/s4.webp',

    ],
  },
  {
    id: 12,
    name: 'Avantgarde',
    description:
      'Avantgarde , Plush curves and soft tones make for an ultra chic sofa with unmatched comfort',
    images: [ 
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC05210-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_6400-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1883.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9410.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9409.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC05208-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC05233-scaled.webp',
    ],
  },
  {
    id: 13,
    name: 'ORION & WHITEY',
    description:
    'Elegance Redefined: Gather around a slice of sophistication. Our slender Fatimadining table with its finely engraved surface merges aesthetics with functionality, creating a dining experience that’s both intimate and exquisite. Perfect for those who appreciate the delicate art of dining.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00346.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1960.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1940.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1938-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1901.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00518.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00342.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00346.webp',
    ],
  },
  {
    id: 14,
    name: 'Rover L- Shape',
    description:
      'Elevate your living space with the perfect blend of modern design and luxurious comfort. Our off-white linen Rover sofa adds a touch of sophistication to any room, inviting you to unwind in style. Experience relaxation like never before.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1889.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00547.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1893.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1909.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1925-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1927-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00550.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00532.webp',
    ],
  },
  {
    id: 15,
    name: 'Luini Premium',
    description:
      'LUINI  PREMIUM  | The elegance that is missing from your living room',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00397-2-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00412-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8566-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00756-1.webp',

    ],
  },
  {
    id: 16,
    name: 'Luini',
    description:
      'Elegance intertwined: Embrace the luxurious comfort of this beige Chanelia fabric sofa, enveloped in sophistication as leather belts embrace its timeless design.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8614-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8624.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8614.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8575-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1985.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8569-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00550.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8566-scaled.webp',
    ],
  },
  {
    id: 17,
    name: 'Pedro L- Shape',
    description:
      'Unwind in Style: Embrace the Perfect Blend of Comfort and Elegance with our Pedro L-Shape Sofa featuring Luxurious Linen Fabrics and Invigorating Green Leather Accents. A Contemporary Masterpiece for Your Living Space.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00353.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00719.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00723.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/chairs-postPedro1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/chairs-postPedro3.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00713.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00289.webp',
    ],
  },
  {
    id: 18,
    name: 'Amstel & Alpine Klass',
    description:
      'Amstel Elegance: Where Dutch Design Meets Cozy Comfort. Sink into the allure of our wooden grey sofa adorned with rich navy blue cushions, named after the picturesque city of Amstel. Experience a touch of Netherlands’ charm right in your living space.',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00572.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_1760-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_1565-1-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_1567-scaled.webp',

    ],
  },
  {
    id: 19,
    name: 'Valle',
    description:
      'Valle is a sofa with a bold personality that combines essential design , contemporary Lines and a high level of craftsmanship',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4521.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9327.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9325.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9320.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4531.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4527.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4522.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00567.webp',
    ],
  },
  {
    id: 20,
    name: 'Leven & Sabrina',
    description:
      'Elegance and Comfort Combined: Relax in Style on our Courbe Leven  Sofa, where timeless design meets ultimate relaxation.',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00664.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00663.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00658.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG-1574-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00665.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00660.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00657.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG-1569-1-scaled.webp',
    ],
  },
  {
    id: 21,
    name: 'Essence',
    description:
      'Elegance Redefined: Sink into the luxurious comfort of our semi-classic sofa and chairs, adorned with ultra-wide rosy backs that embrace you in timeless style and soothing softness. Experience the perfect blend of classic charm and modern comfort, making every moment on this furniture a delightful retreat.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00645-2.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00772.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00648.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00707.webp',

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

const Collection = () => {
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

export default Collection;
