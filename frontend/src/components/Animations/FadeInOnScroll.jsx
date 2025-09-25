import { useEffect, useRef, useState } from 'react';

const FadeInOnScroll = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 600,
  threshold = 0.1,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return isVisible ? 'translateY(0)' : 'translateY(30px)';
      case 'down':
        return isVisible ? 'translateY(0)' : 'translateY(-30px)';
      case 'left':
        return isVisible ? 'translateX(0)' : 'translateX(30px)';
      case 'right':
        return isVisible ? 'translateX(0)' : 'translateX(-30px)';
      default:
        return 'translateY(0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
