import React from 'react';

const InnovateSection = () => {
  return (
    <section className=" py-16"> {/* Using extracted color */}
      <div className="bg-white rounded-lg shadow-lg p-8 mx-auto text-center w-6/8 px-4">
        <h2 className="text-5xl font-bold text-232323 mb-6">INNOVATE WITH US</h2> {/* Using extracted color */}
        <p className="text-lg text-232323 leading-relaxed mb-8"> {/* Using extracted color */}
          Transform your business with our expert IT solutions. Get a free consultation today!
        </p>
        <button className="mt-6 bg-green-300 hover:bg-green-200 text-green-600 font-bold py-3 px-6 rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default InnovateSection;
