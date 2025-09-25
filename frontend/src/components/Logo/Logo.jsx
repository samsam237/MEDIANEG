import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ 
  href = "/", 
  width = 40, 
  height = 40, 
  showText = true, 
  className = "",
  textClassName = "text-xl font-bold text-navy-900",
  priority = false 
}) => {
  const logoElement = (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative" style={{ width, height }}>
        <Image
          src="/logo.svg"
          alt="MEDIANEG International"
          fill
          className="object-contain"
          priority={priority}
        />
      </div>
      {showText && (
        <span className={textClassName}>MEDIANEG</span>
      )}
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

export default Logo;
