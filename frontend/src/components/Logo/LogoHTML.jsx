import React from 'react';

const LogoHTML = ({ 
  className = "", 
  size = "large",
  showIcon = true,
  iconSrc = "/logo.svg"
}) => {
  // Tailles prédéfinies
  const sizes = {
    small: {
      container: "gap-2",
      icon: "h-8 w-8",
      medianeg: "text-lg",
      international: "text-xs tracking-wide"
    },
    medium: {
      container: "gap-3",
      icon: "h-12 w-12",
      medianeg: "text-2xl",
      international: "text-sm tracking-widest"
    },
    large: {
      container: "gap-4",
      icon: "h-16 w-16",
      medianeg: "text-4xl",
      international: "text-lg tracking-[0.2em]"
    },
    xlarge: {
      container: "gap-6",
      icon: "h-20 w-20",
      medianeg: "text-6xl",
      international: "text-xl tracking-[0.25em]"
    }
  };

  const currentSize = sizes[size] || sizes.large;

  return (
    <div className={`logo-container flex items-center ${currentSize.container} ${className}`}>
      {showIcon && (
        <div className="logo-m flex-shrink-0">
          <img 
            src={iconSrc} 
            alt="MEDIANEG International Logo" 
            className={`${currentSize.icon} object-contain filter brightness-0 invert`}
          />
        </div>
      )}
      <div className="logo-text flex flex-col text-left">
        <p className={`medianeg font-bold text-white leading-tight m-0 ${currentSize.medianeg}`}>
          MEDIANEG
        </p>
        <p className={`international text-primary-400 uppercase m-0 leading-tight ${currentSize.international}`}>
          INTERNATIONAL
        </p>
      </div>
    </div>
  );
};

export default LogoHTML;
