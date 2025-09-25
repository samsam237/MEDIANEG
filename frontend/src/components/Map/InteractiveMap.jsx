const InteractiveMap = ({ 
  className = '',
  height = 'h-96',
  showTitle = true,
  title = 'Notre Localisation',
  subtitle = 'Venez nous rendre visite à notre bureau de Neuchâtel'
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {showTitle && (
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      )}
      
      <div className={`${height} w-full`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.45857963227!2d6.9289264!3d46.991968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e0a11baad4ecd%3A0x684cf9e8172b428d!2sGrand-Rue%201A%2C%202000%20Neuch%C3%A2tel%2C%20Suisse!5e0!3m2!1sfr!2scm!4v1758818822040!5m2!1sfr!2scm"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation MEDIANEG International - Grand Rue 1A, 2000 Neuchâtel, Suisse"
          className="w-full h-full"
        />
      </div>
      
      {/* Informations supplémentaires */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Grand-Rue 1A, 2000 Neuchâtel</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Accès facile en transport public</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
