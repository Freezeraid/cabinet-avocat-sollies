export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = false, 
  className = '' 
}) {
  const containerClasses = `${centered ? 'text-center' : ''} ${className}`;
  
  return (
    <div className={containerClasses}>
      <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-neutral-text mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 max-w-3xl leading-relaxed ${centered ? 'text-center mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
