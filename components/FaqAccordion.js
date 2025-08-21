'use client';

import { useState } from 'react';

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg card-shadow">
          <button
            className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-lg"
            onClick={() => toggleFaq(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-neutral-text pr-4">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                <svg
                  className={`w-5 h-5 text-primary transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </button>
          
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-4">
              <div className="text-gray-600 leading-relaxed">
                {typeof faq.answer === 'string' ? (
                  <p>{faq.answer}</p>
                ) : (
                  faq.answer
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
