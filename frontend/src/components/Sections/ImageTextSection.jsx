const ImageTextSection = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  subtitle, 
  content, 
  features = [], 
  reverse = false,
  bgColor = 'bg-white',
  overlay = false,
  overlayOpacity = 0.3,
  className = ''
}) => {
  return (
    <section className={`py-20 ${bgColor} ${className}`}>
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Image Section */}
          <div className={`${reverse ? 'lg:col-start-2' : ''}`} data-aos={reverse ? "fade-left" : "fade-right"} data-aos-delay="200">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {overlay && (
                <div 
                  className="absolute inset-0 z-10"
                  style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
                />
              )}
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className={`${reverse ? 'lg:col-start-1' : ''}`} data-aos={reverse ? "fade-right" : "fade-left"} data-aos-delay="400">
            <div className="space-y-6">
              {subtitle && (
                <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide" data-aos="fade-up" data-aos-delay="600">
                  {subtitle}
                </p>
              )}
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" data-aos="fade-up" data-aos-delay="800">
                {title}
              </h2>
              
              {content && (
                <p className="text-xl text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="1000">
                  {content}
                </p>
              )}

              {features.length > 0 && (
                <div className="space-y-4" data-aos="fade-up" data-aos-delay="1200">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay={`${1400 + (index * 100)}`}>
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        {typeof feature === 'string' ? (
                          <p className="text-gray-700 leading-relaxed">{feature}</p>
                        ) : (
                          <>
                            {feature.title && (
                              <h4 className="font-semibold text-gray-900 mb-1">
                                {feature.title}
                              </h4>
                            )}
                            <p className="text-gray-700 leading-relaxed">
                              {feature.description}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
