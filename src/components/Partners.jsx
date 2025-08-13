import React from 'react';
import tp1 from '../assets/tp1.jpeg';
import tp2 from '../assets/tp2.jpeg';
import tp3 from '../assets/tp3.jpeg';
import tp4 from '../assets/tp4.jpeg';
import tp5 from '../assets/tp5.jpeg';
import tp6 from '../assets/tp6.jpeg';

const Partners = () => {
  const partnerLogos = [tp1, tp2, tp3, tp4, tp5, tp6];

  return (
    <section className="bg-gray-100 py-16 w-full">
      <div className="w-full mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-232323 mb-10">TRUSTED PARTNERS</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {partnerLogos.map((logo, index) => (
           
              <img src={logo} alt={`Partner ${index + 1}`} className="w-full h-full object-fit  bg-white rounded-lg shadow-md" />
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
