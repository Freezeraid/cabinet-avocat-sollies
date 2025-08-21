'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <div className="bg-primary text-white rounded-lg shadow-soft-lg p-4 flex items-center justify-between">
        <div className="flex-1 mr-4">
          <p className="font-medium text-sm">
            Besoin d'un avocat ?
          </p>
          <p className="text-xs opacity-90">
            Consultation sur rendez-vous
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
