const ResponsiveGrid = ({ 
  children, 
  cols = { sm: 1, md: 2, lg: 3 },
  gap = 6,
  className = ''
}) => {
  const getColsClasses = () => {
    const baseClasses = 'grid';
    const gapClass = `gap-${gap}`;
    
    let responsiveClasses = '';
    
    if (cols.sm) responsiveClasses += ` grid-cols-${cols.sm}`;
    if (cols.md) responsiveClasses += ` md:grid-cols-${cols.md}`;
    if (cols.lg) responsiveClasses += ` lg:grid-cols-${cols.lg}`;
    if (cols.xl) responsiveClasses += ` xl:grid-cols-${cols.xl}`;
    if (cols['2xl']) responsiveClasses += ` 2xl:grid-cols-${cols['2xl']}`;
    
    return `${baseClasses} ${gapClass} ${responsiveClasses}`;
  };

  return (
    <div className={`${getColsClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;
