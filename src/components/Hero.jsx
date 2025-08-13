import React from 'react';
import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'


const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center p-6">
      <div className='p-4 flex w-7/8 justify-center items-center flex-col bg-white rounded-lg shadow-lg'>
        <div className="w-full">
          <div className='flex flex-row justify-between p-2'>
            <img src={card1} alt="Card 1" className='h-[400px] w-2/3 rounded-xl object-fit pr-2' />
            <img src={card2} alt="Card 2" className='h-[400px] w-2/3  rounded-xl object-fit' />
          </div>
        </div>
      <div className='w-full p-6 flex flex-row justify-between'>
        <div className='w-1/2'></div>
        <div className='w-1/2'>
          <div className="mx-auto text-center px-4 text-gray-800 mt-8 justify-end"> {/* Changed text color to gray-800 for better contrast */}
          <h2 className="text-5xl font-bold mb-6">CURVTEK: PIONEERING DIGITAL FUTURES</h2>
          <p className="text-xl  mb-8">
            Curvtek.com is a premier technology solutions provider, dedicated to driving innovation and delivering
            exceptional results. Our mission is to empower businesses with cutting-edge IT services, cloud technology,
            and digital marketing strategies.
          </p>
          <p className="text-xl mb-8">
            We envision a future where technology seamlessly integrates with business operations to foster growth and
            efficiency. Our core values of integrity, innovation, and client success guide every project we undertake.
          </p>
          <p className="text-xl  mb-8">
            We offer expert IT consultancy and bespoke website development services. Partner with us to transform your
            digital presence and achieve your business objectives with confidence.
          </p>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
