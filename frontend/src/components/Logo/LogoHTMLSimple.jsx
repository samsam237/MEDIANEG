import React from 'react';

const LogoHTMLSimple = ({ 
  className = "", 
  size = "medium",
  showIcon = true,
  iconSrc = "/logo.svg",
  textColor = "text-white",
  accentColor = "text-primary-400"
}) => {
  // Tailles prédéfinies pour usage simple
  const sizes = {
    small: {
      container: "gap-2",
      icon: "h-6 w-6",
      medianeg: "text-sm",
      international: "text-xs"
    },
    medium: {
      container: "gap-3",
      icon: "h-8 w-8",
      medianeg: "text-lg",
      international: "text-sm"
    },
    large: {
      container: "gap-4",
      icon: "h-12 w-12",
      medianeg: "text-xl",
      international: "text-base"
    }
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <div className={`logo-container flex items-center ${currentSize.container} ${className}`}>
      {showIcon && (
        <div className="logo-m flex-shrink-0">
          <img 
            src={iconSrc} 
            alt="MEDIANEG International Logo" 
            className={`${currentSize.icon} object-contain`}
          />
        </div>
      )}
      <div className="logo-text flex flex-col">
        <p className={`medianeg font-bold leading-tight m-0 ${currentSize.medianeg} ${textColor}`}>
          MEDIANEG
        </p>
        <p className={`international uppercase m-0 leading-tight ${currentSize.international} ${accentColor}`}>
          INTERNATIONAL
        </p>
      </div>
    </div>
  );
};

export default LogoHTMLSimple;
