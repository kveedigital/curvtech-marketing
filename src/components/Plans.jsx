import React from 'react';

const Plans = () => {
  const plans = [
    {
      name: 'STARTER',
      price: '29/MO',
      description: 'Basic IT support for small businesses. Get started with essential services.',
    },
    {
      name: 'GROWTH',
      price: '59/MO',
      description: 'Comprehensive cloud solutions for growing businesses. Scalable and secure.',
    },
    {
      name: 'PRO',
      price: '99/MO',
      description: 'Advanced IT consultancy and digital marketing strategies. Drive your business forward.',
    },
    {
      name: 'ENTERPRISE',
      price: '149/MO',
      description: 'All-inclusive package with dedicated support and custom development. Maximum impact.',
    },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-black mb-10">FLEXIBLE PLANS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white  rounded-2xl shadow-md text-center pb-6 h-[500px]">
              <div className='pb-3 pt-3 w-full bg-green-300'>
                <h3 className="text-4xl font-bold text-232323 mb-4">{plan.name}</h3>
              <p className="text-2xl font-bold text-9FFFCB mb-4">{plan.price}</p> 
              </div >
              <div className='rounded-full'>
                <p className="text-2xl text-gray-700 mb-4 px-4">{plan.description}</p>
              </div>
              <div>
                <button className="mt-6 bg-green-300 hover:bg-green-200 text-green-600 font-bold py-3 px-6 rounded-full">
                Get Started Today
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
