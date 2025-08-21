'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Check if CTA was previously closed
    const ctaClosed = localStorage.getItem('stickyCTAClosed');
    if (ctaClosed === 'true') {
      setIsClosed(true);
    }

    const toggleVisibility = () => {
      // Show CTA after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClose = () => {
    setIsClosed(true);
    localStorage.setItem('stickyCTAClosed', 'true');
  };

  if (!isVisible || isClosed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <div className="bg-primary text-white rounded-lg shadow-soft-lg p-3 flex items-center justify-between relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 bg-primary-dark hover:bg-primary-olive text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary shadow-lg"
          aria-label="Fermer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <div className="flex-1 mr-4">
          <p className="font-medium text-sm">
            Défendez vos droits
          </p>
        </div>
        <div className="flex space-x-2">
          <Link
            href="tel:+33494135380"
            className="bg-white text-primary px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            Appeler
          </Link>
          <Link
            href="/contact"
            className="bg-primary-dark text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-olive transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
