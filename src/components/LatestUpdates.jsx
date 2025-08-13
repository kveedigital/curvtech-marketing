import React from 'react';
import lu1 from '../assets/lu1.jpeg'
import lu2 from '../assets/lu2.jpeg'
import lu3 from '../assets/lu3.jpeg'
import lu4 from '../assets/lu4.jpeg'

const LatestUpdates = () => {
  const updates = [
    {
      title: 'CURVTEK & INNOVATECH CLOUD',
      date: '2025-08-12',
      description: 'Curvtek partners with Innovatech Solutions to deliver cutting-edge cloud infrastructure.',
    },
    {
      title: 'STELLAR CORP SUCCESS',
      date: '2025-08-10',
      description: 'See how our digital marketing strategies propelled Stellar Corp to new heights.',
    },
    {
      title: 'NEW CONSULTANCY PROGRAM',
      date: '2025-08-08',
      description: 'Curvtek launches new IT consultancy program for startups.',
    },
    {
      title: 'APEX INDUSTRIES LIVE',
      date: '2025-08-05',
      description: 'Our latest website development project for Apex Industries is now live!',
    },
  ];

  return (
    <section className="bg-white py-14 w-full">
      <div className="w-full mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-232323 mb-10">LATEST UPDATES</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          <div className=" p-4 ">
            <img className='h-[400px] w-[400px] rounded-2xl object-cover' src={lu1} alt="" />
            <h3 className="text-xl font-bold text-232323 mb-2">{updates[0].title}</h3>
            <p className="text-sm text-gray-600 mb-4">{updates[0].date}</p>
            <p className="text-md text-gray-700 mb-4">{updates[0].description}</p>
            <a href="#" className="text-green-600 hover:underline bg-green-300 text-green-600 font-bold py-3 px-6 rounded-full w-full block text-center">Read</a>
          </div>
          <div className="p-4">
            <img className='h-[400px] w-[400px] rounded-2xl object-cover' src={lu2} alt="" />
            <h3 className="text-xl font-bold text-232323 mb-2">{updates[1].title}</h3>
            <p className="text-sm text-gray-600 mb-4">{updates[1].date}</p>
            <p className="text-md text-gray-700 mb-4">{updates[1].description}</p>
            <a href="#" className="text-green-600 hover:underline bg-green-300 text-green-600 font-bold py-3 px-6 rounded-full w-full block text-center">Read</a>
          </div>
          <div className="p-4">
            <img className='h-[400px] w-[400px] rounded-2xl object-cover' src={lu3} alt="" />
            <h3 className="text-xl font-bold text-232323 mb-2">{updates[2].title}</h3>
            <p className="text-sm text-gray-600 mb-4">{updates[2].date}</p>
            <p className="text-md text-gray-700 mb-4">{updates[2].description}</p>
            <a href="#" className="text-green-600 hover:underline bg-green-300 text-green-600 font-bold py-3 px-6 rounded-full w-full block text-center">Read</a>
          </div>
          <div className="p-4">
            <img className='h-[400px] w-[400px] rounded-2xl object-cover' src={lu4} alt="" />
            <h3 className="text-xl font-bold text-232323 mb-2">{updates[3].title}</h3>
            <p className="text-sm text-gray-600 mb-4">{updates[3].date}</p>
            <p className="text-md text-gray-700 mb-4">{updates[3].description}</p>
            <a href="#" className="text-green-600 hover:underline bg-green-300 text-green-600 font-bold py-3 px-6 rounded-full w-full block text-center">Read</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
