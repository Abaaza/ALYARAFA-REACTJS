import React, { useState, useEffect, useMemo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Make sure to set the workerSrc:
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js`;

const Catalogue = () => {
  const [pdfData, setPdfData] = useState(null);   // This will hold the Blob (or Uint8Array) of the PDF
  const [progress, setProgress] = useState(0);    // For tracking download progress
  const [numPages, setNumPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadedPages, setLoadedPages] = useState([]);
  const [containerWidth, setContainerWidth] = useState(null);
  const [visiblePages, setVisiblePages] = useState(6);

  const pdfUrl = 'https://s3.me-south-1.amazonaws.com/www.wall-masters.com/NUCAT.pdf';

  /**
   * 1) Fetch the PDF file manually with progress tracking
   */
  useEffect(() => {
    let isCancelled = false;

    const fetchPdfWithProgress = async () => {
      setIsLoading(true);
      setError(null);
      setProgress(0);

      try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the total size from headers (may be missing if the server doesn't provide it)
        const contentLength = response.headers.get('content-length');
        const total = contentLength ? parseInt(contentLength, 10) : 0;
        let loaded = 0;

        // We'll accumulate the chunks into an array
        const reader = response.body.getReader();
        const chunks = [];

        // Read the stream
        while (true) {
          const { done, value } = await reader.read();
          if (done || isCancelled) {
            break;
          }
          chunks.push(value);
          loaded += value.length;

          // If total is known, calculate progress. Otherwise, you can display an indeterminate loader
          if (total) {
            setProgress(Math.floor((loaded / total) * 100));
          } else {
            // If no total is available, you might do something else like show a spinner
            setProgress((prev) => (prev < 99 ? prev + 1 : 99)); // Fake progress example
          }
        }

        // Once finished, create a Blob from the chunks
        if (!isCancelled) {
          const blob = new Blob(chunks, { type: 'application/pdf' });
          setPdfData(blob);
          setIsLoading(false);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error('PDF fetch error:', err);
          setError('Failed to load PDF. Please try again later.');
          setIsLoading(false);
        }
      }
    };

    fetchPdfWithProgress();

    // Cleanup to cancel if the component unmounts
    return () => {
      isCancelled = true;
    };
  }, [pdfUrl]);

  /**
   * 2) Handle window resize to keep track of container width
   */
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

  /**
   * 3) Infinite scrolling effect
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
        setVisiblePages((prev) => Math.min(prev + 3, numPages || Infinity));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [numPages]);

  /**
   * 4) Callbacks for react-pdf
   */
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }

  function onDocumentLoadError(err) {
    console.error('PDF load error:', err);
    setError('Failed to load PDF. Please try again later.');
    setIsLoading(false);
  }

  const onPageLoad = (pageNumber) => {
    setLoadedPages((prev) => [...prev, pageNumber]);
  };

  /**
   * 5) Render PDF pages
   */
  const renderPages = useMemo(() => {
    if (!numPages || !containerWidth) return null;

    return Array.from(new Array(visiblePages), (el, index) => {
      const pageNumber = index + 1;
      const isPriority = pageNumber <= 6;

      return (
        <div
          key={`page_${pageNumber}`}
          className={`mt-8 mb-8 ${
            loadedPages.includes(pageNumber) ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
        >
          <div className="flex justify-center">
            <Page
              pageNumber={pageNumber}
              className="shadow-lg"
              loading={
                <div className="w-full text-center py-8 text-gray-600">
                  Loading page...
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

        {/* 
          6) Show loading state:
             - If we're still fetching the PDF file from the network, show the progress bar.
             - If the PDF is fetched, but react-pdf is parsing it, also show a loader or let react-pdf's loading take over.
        */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-gray-600 mb-4">
              Loading Catalogue, Please wait {progress ? `${progress}%` : ''}
            </div>
            {/* Example progress bar */}
            <div className="w-1/2 h-4 bg-gray-300 rounded-full">
              <div
                className="h-4 bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="pdf-container w-full px-4 sm:max-w-3xl lg:max-w-5xl mx-auto">
          {/* 
            7) Only render <Document> once we have the pdfData 
               to prevent react-pdf from attempting to load from the URL again.
          */}
          {pdfData && (
            <Document
              file={pdfData}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                // This loading is shown while react-pdf is parsing the data
                <div className="text-gray-600 py-8 text-center">
                  Parsing PDF...
                </div>
              }
            >
              {renderPages}
            </Document>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
