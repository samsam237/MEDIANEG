import Image from 'next/image';
import Link from 'next/link';

/**
 * Composant Logo optimisé pour les logos avec texte intégré
 * (comme le logo MEDIANEG qui contient déjà le nom)
 */
const LogoWithText = ({ 
  href = "/", 
  width = 150, 
  height = 80, 
  className = "",
  priority = false 
}) => {
  const logoElement = (
    <div 
      className={`relative ${className}`} 
      style={{ width: className ? undefined : width, height: className ? undefined : height }}
    >
      <Image
        src="/logo.svg"
        alt="MEDIANEG International"
        fill
        className="object-contain"
        priority={priority}
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

export default LogoWithText;
