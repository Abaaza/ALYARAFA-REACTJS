import React, { useState, useEffect, useMemo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js`;

const Catalogue = () => {
  const [numPages, setNumPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadedPages, setLoadedPages] = useState([]);
  const [containerWidth, setContainerWidth] = useState(null);
  const [visiblePages, setVisiblePages] = useState(6);

  useEffect(() => {
    const updateWidth = () => {
      const container = document.querySelector('.pdf-container');
      if (container) {
        setContainerWidth(container.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
        setVisiblePages(prev => Math.min(prev + 3, numPages || Infinity));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [numPages]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }

  function onDocumentLoadError(err) {
    console.error('PDF load error:', err);
    setError('Failed to load PDF. Please try again later.');
    setIsLoading(false);

    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setError(null);
          document.querySelector('.pdf-container').setAttribute('data-file', fileReader.result);
        };
        fileReader.readAsDataURL(blob);
      })
      .catch(fetchError => {
        console.error('Fetch error:', fetchError);
        setError('Failed to load PDF after retry. Please check your connection.');
      });
  }

  const onPageLoad = (pageNumber) => {
    setLoadedPages(prev => [...prev, pageNumber]);
  };

  const pdfUrl = 'https://s3.me-south-1.amazonaws.com/www.wall-masters.com/NUCAT.pdf';

  const renderPages = useMemo(() => {
    if (!numPages || !containerWidth) return null;

    return Array.from(new Array(visiblePages), (el, index) => {
      const pageNumber = index + 1;
      const isPriority = pageNumber <= 6;
      
      return (
        <div 
          key={`page_${pageNumber}`}
          className={`mt-8 mb-8 ${loadedPages.includes(pageNumber) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        >
          <div className="flex justify-center">
            <Page
              pageNumber={pageNumber}
              className="shadow-lg"
              loading={
                <div className="w-full text-center py-8 text-gray-600">
                  Loading...
                </div>
              }
              width={containerWidth - 32}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              onLoadSuccess={() => onPageLoad(pageNumber)}
              priority={isPriority}
            />
          </div>
        </div>
      );
    });
  }, [numPages, containerWidth, visiblePages, loadedPages]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full overflow-x-hidden">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 mx-4">
            {error}
          </div>
        )}

        <div className="pdf-container w-full px-4 sm:max-w-3xl lg:max-w-5xl mx-auto">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="text-gray-600 py-8 text-center">Loading PDF...</div>
            }
          >
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="text-gray-600">Loading PDF...</div>
              </div>
            ) : (
              renderPages
            )}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;