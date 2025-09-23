'use client';

import { Calendar, ChevronRight } from 'lucide-react';

const Timeline = ({ items = [] }) => {
  if (!items.length) {
    return (
      <div className="text-center py-12">
        <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">Aucun élément de chronologie disponible</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id || index} className="relative flex items-start space-x-6">
            {/* Timeline dot */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {item.year}
              </div>
              {index < items.length - 1 && (
                <ChevronRight className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-300" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 bg-white rounded-lg shadow-md p-6 border border-gray-100 animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-primary-600">{item.year}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
