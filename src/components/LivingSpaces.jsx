// LivingSpaces.js
import React, { useState } from 'react';

const sampleProducts = [
  {
    id: 2,
    name: 'ALPINE & CLARK',
    description:
    'Elegance meets modernity: Our plush velvet  ALPINE sofa featuring a seamlessly designed leg, harmonizing the comfort of fabric with the sleek touch of metal. A masterpiece of style and sophistication for your living space.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/SQ-AL-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/Alpine.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/Alpine-4-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/Arafa-culling-300-DSC04951.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/Arafa-culling-278-DSC04809.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC01094-Edit-scaled.webp',
      
    ],
  },
  {
    id: 3,
    name: 'LEEDS',
    description:
    'Elevate your living space with timeless elegance. Our exquisite LEEDS sofa, adorned with an ethereal ester paint finish and meticulously engraved wood detailing, seamlessly blends artistry and comfort. Experience the epitome of sophistication as you relax in style.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC01105-Edit.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/SQ.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC01112-Edit.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4278.webp',
    ],
  },
  {
    id: 4,
    name: 'ANDY ROSE',
    description:
    'Embrace Elegance and Craftsmanship: Our exquisitely handcrafted ANDY ROSE sofa adorned with captivating Captonih patterns in the backrest and intricate wood engravings is a timeless masterpiece that seamlessly blends artistry and comfort.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/square-x-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1534-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF1678-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4313.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4327.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4316.webp',
      
    ],
  },
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
    id: 7,
    name: 'CAPITAL',
    description:
    'Effortless Elegance: Embrace the Tranquil Charms of Scandinavian Minimalism with Our Exquisite Sofa. Clean lines and organic textures harmonize in perfect balance, inviting you to unwind in understated luxury. A sanctuary of comfort and style, where simplicity speaks volumes.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/SSS.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9076.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9138.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9124.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8696-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9071-2.webp',
    ],
  },
  {
    id: 8,
    name: 'SCANIA',
    description:
    'Effortless Elegance: Embrace the Tranquil Charms of Scandinavian Minimalism with Our Exquisite Sofa. Clean lines and organic textures harmonize in perfect balance, inviting you to unwind in understated luxury. A sanctuary of comfort and style, where simplicity speaks volumes.”',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_6402-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9076.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_6402.webp',
    ],
  },
  
  {
    id: 10,
    name: 'CARLA',
    description:
    'Subtle colors and an elegant design. Carla Set',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC06908-1-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC06910.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9153.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF9140.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSC06946.webp',
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
    id: 23,
    name: 'See Through',
    description:
'Embrace the Elegance: Lounging in style on this chic pink sofa, adorned with intricate cane wood details. A perfect blend of comfort and sophistication, this piece adds a touch of whimsy to any space.',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00674.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00766.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00692.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00677.webp',
    ],
  },
  {
    id: 24,
    name: 'LUCA',
    description:
      'Introducing the Luca L-shaped sofa and chair set  a piece that seamlessly blends unique design with versatility. luca’s sleek lines and bold color scheme create a contemporary aesthetic that can work in both formal and informal setups.Luca’s included chair provides additional seating options without sacrificing style, making it the perfect complement to the L-shaped sofa. Crafted with high-quality materials and expert craftsmanship, this set is a true testament to the highest standards of quality and design.Whether you’re hosting a formal dinner party or enjoying a casual night in with friends, the Luca set is the ultimate statement piece that will elevate the design of any room. Experience the perfect balance of style and comfort with Luca.',

    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/cover-7.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8667-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8672-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8680-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8681-scaled.webp',

    ],
  },

  {
    id: 26,
    name: 'KANZ',
    description:
      'Introducing Kanz, the vibrant set that will infuse your living space with energy and style. The bold orange and white color scheme creates a playful and eye-catching aesthetic that is sure to impress.  The sleek and modern design of Kanz effortlessly blends with any decor, adding a touch of sophistication to your home. Whether you’re entertaining guests or relaxing with family, Kanz is the perfect statement piece that will elevate the design of any room. With its unique and captivating color scheme and unmatched comfort, Kanz is the ultimate set for those who demand the best.',

    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/cover-6.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00328.webp',
    ],
  },
  {
    id: 27,
    name: 'Maisonette & Mirage',
    description:
      'Maisonette & Mirage , an innovative design, the actant of sociability and contemporary hosting',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00349-1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00348.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00391.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00419.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00447.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00516.webp',
    ],
  },
  {
    id: 28,
    name: 'FUSION',
    description:
    'Discover the epitome of luxury and style with the Fusion ndulge in the ultimate luxury experience, where comfort and style meet in perfect harmony. It’s a set that will transform any living space into a haven of relaxation and refinement, leaving you breathless with its beauty and elegance.. This masterpiece of furniture design is a true testament to the highest possible standards of quality and craftsmanship.',

    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/cover-5.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4558.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4559.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4565.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF4567.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/Fusion2.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/Fusion1.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/Fusion3.webp',
    ],
  },
  {
    id: 29,
    name: 'Ambiance & Bovet',
    description:
      'The Ambiance luxury sofa and chairs set is a stunning addition to any living space. The set features a beautiful teal and white fabric that creates a sophisticated and serene atmosphere. The plush cushions offer exceptional comfort, while the elegant wooden legs provide a stylish contrast to the fabric. The attention to detail and high-quality craftsmanship make this set a true statement piece that will elevate the design of any room.',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/cover-2.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00616.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00622.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG-2224-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG-2229-scaled.webp',

    ],
  },
  {
    id: 30,
    name: 'FREDA',
    description:
      'Subtle colors and an elegant design. Carla Set',
    images: [
      'https://d1yp2xq08uy96k.cloudfront.net/images/cover-4.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG-1510-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG-1506-scaled.webp',
      'https://d1yp2xq08uy96k.cloudfront.net/images/IMG-1562-scaled.webp',

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
