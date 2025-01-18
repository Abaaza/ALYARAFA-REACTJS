// Slider.jsx
import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import emailjs from 'emailjs-com';

// Sample slides data
const sliderContent = [
  {
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/22.webp',
    mobile: 'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_6958.webp',
    showWelcome: true,
    objectPositionDesktop: 'center',
    objectPositionMobile: 'center',
  },
  {
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00349-3.webp',
    mobile: 'https://d1yp2xq08uy96k.cloudfront.net/images/VANMOB.webp',
    objectPositionDesktop: '50% 20%',
    objectPositionMobile: 'center',
  },
  {
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/Aly-Arafa_1_1_1.mp4',
    mobile: 'https://d1yp2xq08uy96k.cloudfront.net/images/Nu_1_1.mp4',
  },
  {
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/555.webp',
    mobile: 'https://d1yp2xq08uy96k.cloudfront.net/images/Arafa-culling-71-DSC03988.webp',
  },
  {
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF0483.webp',
    mobile: 'https://d1yp2xq08uy96k.cloudfront.net/images/sfadsf.webp',
  },
  {
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/DSCF8701-scaled.webp',
    mobile: 'https://d1yp2xq08uy96k.cloudfront.net/images/Arafa-culling-204-DSC04516.webp',
  },
  // 6th Slide => Footer
  {
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/545.webp',
    mobile: 'https://picsum.photos/390/844?random=999',
    showFooter: true,
  },
];

function Slider() {
  const containerRef = useRef(null);

  // For controlling the scroll
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // --- Modal State ---
  const [modalOpen, setModalOpen] = useState(false);

  // Modal form data
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    color: 'orange', // default color
    size: '50cm',    // default size
  });

  // Update form data on input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Open modal
  const handlePreOrder = () => {
    setModalOpen(true);
  };

  // Close modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Submit form => sends email via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Concatenate all form data into one string
    const templateParams = {
      user_name: `Name: ${formData.name}
Phone: ${formData.number}
Color: ${formData.color}
Size: ${formData.size}`,
    };

    emailjs
      .send(
        'service_4hrebk8',
        'template_1zxs0jz',
        templateParams,
        '1mIy5IpEpJPFCN01g'
      )
      .then((response) => {
        alert('Pre-order submitted successfully!');
        setModalOpen(false);
      })
      .catch((error) => {
        alert('There was an error sending your pre-order.');
        console.log('EmailJS FAILED...', error);
      });
  };

  // Listen for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle wheel scroll for snap slides
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      setIsScrolling(true);
      const delta = Math.sign(e.deltaY);
      const height = window.innerHeight;
      const currentScroll = container.scrollTop;
      const targetScroll =
        Math.round(currentScroll / height) * height + delta * height;

      // Keep within bounds
      if (
        targetScroll >= 0 &&
        targetScroll <= (sliderContent.length - 1) * height
      ) {
        container.scrollTo({
          top: targetScroll,
          behavior: 'smooth',
        });
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    container.addEventListener('wheel', handleScroll, { passive: false });
    return () => container.removeEventListener('wheel', handleScroll);
  }, [isScrolling]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {sliderContent.map((slide, index) => {
        // --- Slide with the footer pinned at the bottom (desktop) ---
        if (slide.showFooter) {
          return (
            <div
              key={index}
              className="relative w-full snap-start snap-always bg-black text-white"
              // Force the container to be 100vh on desktop
              style={{ height: isMobile ? 'auto' : '100vh' }}
            >
              {/* Desktop => image (or video) in the remaining space, footer pinned at bottom */}
              {!isMobile && (
                <div className="flex flex-col h-full">
                  {/* Image/Video: fill the remaining vertical space */}
                  <div className="flex-auto relative">
                    {slide.desktop.endsWith('.mp4') ? (
                      <video
                        src={slide.desktop}
                        autoPlay
                        loop
                        muted
                        playsInline
                        // Absolutely fill the parent
                        className="absolute w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={slide.desktop}
                        alt="Footer Slide"
                        // Absolutely fill the parent
                        className="absolute w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Footer pinned at the bottom */}
                  <div className="flex-none">
                    <Footer />
                  </div>
                </div>
              )}

              {/* Mobile => simpler layout */}
              {isMobile && (
                <div>
                  <Footer />
                </div>
              )}
            </div>
          );
        }

        // --- All other slides ---
        return (
          <div
            key={index}
            className="relative h-screen w-full snap-start snap-always"
          >
            {/* Desktop vs Mobile image/video */}
            {isMobile
              ? slide.mobile.endsWith('.mp4')
                ? (
                  <video
                    src={slide.mobile}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={slide.mobile}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: slide.objectPositionMobile || 'center' }}
                  />
                )
              : slide.desktop.endsWith('.mp4')
              ? (
                <video
                  src={slide.desktop}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ objectPosition: slide.objectPositionDesktop || 'center' }}
                />
              ) : (
                <img
                  src={slide.desktop}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: slide.objectPositionDesktop || 'center' }}
                />
              )
            }

            {/* Optional welcome overlay on the 1st slide */}
            {slide.showWelcome && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 text-shadow">
                    WELCOME TO THE DALA FAMILY
                  </h2>
                  <button
                    onClick={handlePreOrder}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 
                      backdrop-blur-sm text-white border-2 border-white 
                      px-8 py-4 rounded-lg transition-all duration-300 
                      transform hover:scale-105"
                  >
                    PRE ORDER NOW
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* --- Modal for Pre-Order Form --- */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 
                     bg-black bg-opacity-70"
        >
          <div className="bg-white  bg-opacity-70 p-6 rounded shadow-lg w-11/12 max-w-md relative">
            <button
              onClick={handleModalClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-xl mb-4 font-bold text-center">
              Dala Horse Pre-order Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium">Name:</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1 font-medium">Phone Number:</label>
                <input
                  required
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="e.g. 01002003000"
                />
              </div>

              {/* Color */}
              <div>
                <label className="block mb-1 font-medium">Color:</label>
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="orange">Orange</option>
                  <option value="green">Green</option>
                  <option value="brown">Brown</option>
                  <option value="yellow">Yellow</option>
                </select>
              </div>

              {/* Size */}
              <div>
                <label className="block mb-1 font-medium">Size:</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="50cm">50cm</option>
                  <option value="70cm">70cm</option>
                  <option value="90cm">90cm</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-300"
              >
                Submit Pre-Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Optional text-shadow style injection
const styles = `
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
const styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Slider;
