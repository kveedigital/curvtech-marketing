import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Curvtek's IT solutions dramatically improved our operational efficiency. Highly recommend!",
      author: "MICHAEL CHEN",
    },
    {
      quote: "The cloud migration services were seamless and incredibly effective for our company.",
      author: "SARAH JENKINS",
    },
    {
      quote: "Digital marketing strategies from Curvtek brought in a significant increase in leads.",
      author: "DAVID LEE",
    },
    {
      quote: "Website development was top-notch, creating a professional and engaging online presence.",
      author: "EMILY CARTER",
    },
    {
      quote: "Excellent IT consultancy that provided clear direction for our technology investments.",
      author: "JAMES RODRIGUEZ",
    },
    {
      quote: "Curvtek transformed our digital footprint, leading to unprecedented business growth.",
      author: "OLIVIA MARTINEZ",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-black mb-10">SUCCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-2xl text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div className='h-16 w-16 rounded-full' ></div>
              <p className="text-3xl font-semibold text-black">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
