
import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services = () => {
  // Show only first 7 items on homepage to match previous layout or slice if needed.
  // The constant has more now, so we slice to keep homepage clean.
  const displayedServices = SERVICES.slice(0, 7);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
          <p className="text-lg text-purple-600 font-medium">Comprehensive US tax solutions for expats, non-residents, and global entrepreneurs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedServices.map((service, index) => {
            const CardContent = (
              <>
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  {service.description}
                </p>
              </>
            );

            const className = `group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br ${service.gradient} text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 block`;

            // If the service has a link, wrap it in a Link component, otherwise use a div
            if ((service as any).link) {
              return (
                <Link to={(service as any).link} key={index} className={className}>
                  {CardContent}
                </Link>
              );
            }

            return (
              <div key={index} className={className}>
                {CardContent}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors shadow-md inline-block">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
