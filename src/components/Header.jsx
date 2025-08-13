import React from 'react';
import heroVideo from '../assets/hero.mp4'
import ck from '../assets/ck.png'

const Header = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden hero">
     <div className="w-full flex items-center justify-center flex-row">
       <header className="absolute top-3 w-3/4 z-10 bg-stone-300 text-white p-4 rounded-full"> {/* Adjusted z-index for header */}
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold rounded-full bg-black">
            <img src={ck} alt="Curvtek" className='h-16 w-20 rounded-full' />
          </div>
          <nav>
            <ul className="flex space-x-5">
              <li><a href="#" className="text-black hover:text-black text-xl">Services</a></li>
              <li><a href="#" className=" text-black hover:text-black text-xl">About</a></li>
              <li><a href="#" className="text-black hover:text-black text-xl">Portfolio</a></li>
              <li><a href="#" className="text-black hover:text-black text-xl">Contact</a></li>
            </ul>
          </nav>
          <a className='rounded-full bg-green-200 text-green-600 text-2xl p-4 hover:bg-green-100'>Contact</a>
        </div>
      </header>
     </div>
      <div className="relative h-full flex items-center justify-center">
        <video
    className="absolute top-0 left-0 min-h-full min-w-full object-cover"
    autoplay
    muted
    playsinline
    loop
    
   >
    <source src={heroVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <div className="relative z-10 text-white">
          {/* Hero content and controls here */}
        </div>
      </div>
    </section>
  );
};

export default Header;
