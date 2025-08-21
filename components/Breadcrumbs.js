import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-4 h-4 text-gray-400 mx-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-primary hover:text-primary-dark transition-colors focus-visible"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
