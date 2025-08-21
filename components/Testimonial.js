export default function Testimonial({ 
  quote, 
  author, 
  role, 
  rating = 5,
  className = '' 
}) {
  return (
    <div className={`bg-white rounded-lg card-shadow p-6 ${className}`}>
      {/* Rating stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-accent-gold' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 mb-6 leading-relaxed">
        <p className="text-lg italic">
          "{quote}"
        </p>
      </blockquote>

      {/* Author */}
      <div className="border-t pt-4">
        <div className="font-medium text-neutral-text">
          {author}
        </div>
        {role && (
          <div className="text-sm text-gray-500 mt-1">
            {role}
          </div>
        )}
      </div>
    </div>
  );
}
