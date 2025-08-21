import Link from 'next/link';
import Button from './Button';

export default function Card({ 
  title, 
  description, 
  href, 
  buttonText = 'En savoir plus',
  icon,
  image,
  date,
  tags = [],
  className = '',
  variant = 'default'
}) {
  const baseClasses = 'bg-white rounded-lg card-shadow overflow-hidden h-full flex flex-col';
  const classes = `${baseClasses} ${className}`;

  const content = (
    <>
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        {icon && (
          <div className="mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              {icon}
            </div>
          </div>
        )}
        
        {date && (
          <div className="text-sm text-gray-500 mb-2">
            {new Date(date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        )}
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="text-xl font-serif font-semibold text-neutral-text mb-3 flex-shrink-0">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
          {description}
        </p>
        
        {href && (
          <div className="mt-auto">
            <Button 
              href={href} 
              variant="ghost" 
              className="p-0 h-auto font-medium"
            >
              {buttonText}
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Button>
          </div>
        )}
      </div>
    </>
  );

  if (href && variant === 'clickable') {
    return (
      <Link href={href} className={`${classes} hover:shadow-soft-lg transition-shadow duration-300 cursor-pointer`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={classes}>
      {content}
    </div>
  );
}
