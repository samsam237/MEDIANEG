import Image from 'next/image';
import Link from 'next/link';

/**
 * Logo compact pour les espaces restreints
 */
export const LogoCompact = ({ href = "/", size = 32, className = "" }) => {
  const logoElement = (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/logo.png"
        alt="MEDIANEG"
        fill
        className="object-contain"
      />
    </div>
  );

  return href ? (
    <Link href={href} className="hover:opacity-80 transition-opacity duration-200">
      {logoElement}
    </Link>
  ) : (
    logoElement
  );
};

/**
 * Logo avec texte pour les headers
 */
export const LogoWithText = ({ 
  href = "/", 
  logoSize = 40, 
  textSize = "text-lg",
  textColor = "text-navy-900",
  className = "",
  priority = false 
}) => {
  const logoElement = (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative" style={{ width: logoSize, height: logoSize }}>
        <Image
          src="/logo.png"
          alt="MEDIANEG International"
          fill
          className="object-contain"
          priority={priority}
        />
      </div>
      <span className={`font-bold ${textSize} ${textColor}`}>
        MEDIANEG
      </span>
    </div>
  );

  return href ? (
    <Link href={href} className="hover:opacity-80 transition-opacity duration-200">
      {logoElement}
    </Link>
  ) : (
    logoElement
  );
};

/**
 * Logo pour les pages d'erreur ou de chargement
 */
export const LogoCentered = ({ size = 120, className = "" }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src="/logo.png"
          alt="MEDIANEG International"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

/**
 * Logo pour les favicons et icônes
 */
export const LogoIcon = ({ size = 24, className = "" }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/logo.png"
        alt="MEDIANEG"
        fill
        className="object-contain"
      />
    </div>
  );
};
