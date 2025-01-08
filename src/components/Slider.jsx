// Slider.js

import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';

// Sample slides data
// (Added optional `objectPositionDesktop` and `objectPositionMobile` for demonstration)
const sliderContent = [
  
  {
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/Aly-Arafa_1_1_1.mp4',
    mobile: 'https://d1yp2xq08uy96k.cloudfront.net/images/Nu_1_1.mp4',
    // No object position needed for videos, but you can still define them
  },
  {
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/22.webp',
    mobile: 'https://d1yp2xq08uy96k.cloudfront.net/images/IMG_6958.webp',
    showWelcome: true,
    // Example of controlling position
    objectPositionDesktop: 'center',   // or '50% 50%', etc.
    objectPositionMobile: 'center',
  },
  {
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/AGO00349-1.webp',
    mobile: 'https://d1yp2xq08uy96k.cloudfront.net/images/VANMOB.webp',
    // Position the desktop image closer to the top, for example:
    objectPositionDesktop: '50% 20%',
    // Position mobile center
    objectPositionMobile: 'center',
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
    desktop: 'https://d1yp2xq08uy96k.cloudfront.net/images/VANMOB.webp',
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
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const handlePreOrder = () => {
    console.log('Pre-order clicked');
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {sliderContent.map((slide, index) => {
        // If it's our 6th slide with the Footer
        if (slide.showFooter) {
          return (
            <div
              key={index}
              className="relative w-full snap-start snap-always"
              style={{ height: isMobile ? 'auto' : '100vh' }}
            >
              {/* Desktop view => top half image, bottom half footer */}
              {!isMobile && (
                <div className="flex flex-col h-full">
                  {/* Top half => the image */}
                  <div className="h-2/5">
                    {/* Check if desktop is mp4, otherwise show image */}
                    {slide.desktop.endsWith('.mp4') ? (
                      <video
                        src={slide.desktop}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={slide.desktop}
                        alt="Footer Slide"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  {/* Bottom half => Footer */}
                  <div className="h-3/5 overflow-auto bg-black text-white">
                    <Footer />
                  </div>
                </div>
              )}

              {/* Mobile view => Hide the image, just show the Footer normally */}
              {isMobile && (
                <div className="bg-black text-white">
                  <Footer />
                </div>
              )}
            </div>
          );
        }

        // All other slides (1–5)
        return (
          <div
            key={index}
            className="relative h-screen w-full snap-start snap-always"
          >
            {/* Decide if it's an image or video based on extension */}
            {isMobile
              ? slide.mobile.endsWith('.mp4')
                ? // VIDEO (mobile)
                  <video
                    src={slide.mobile}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    // If you want to control video position, you can use objectPosition with inline style
                    // style={{ objectPosition: slide.objectPositionMobile || 'center' }}
                  />
                : // IMAGE (mobile)
                  <img
                    src={slide.mobile}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      // Control the objectPosition if defined
                      objectPosition: slide.objectPositionMobile || 'center',
                    }}
                  />
              : slide.desktop.endsWith('.mp4')
              ? // VIDEO (desktop)
                <video
                  src={slide.desktop}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  // style={{ objectPosition: slide.objectPositionDesktop || 'center' }}
                />
              : // IMAGE (desktop)
                <img
                  src={slide.desktop}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    // Control the objectPosition if defined
                    objectPosition: slide.objectPositionDesktop || 'center',
                  }}
                />
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
    </div>
  );
}

// Optional global text shadow
const styles = `
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
const styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Slider;
