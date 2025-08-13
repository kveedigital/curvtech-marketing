import React from 'react';

const Stats = () => {
  const stats = [
    {
      value: '150%',
      label: 'CLOUD GROWTH',
    },
    {
      value: '250%',
      label: 'DIGITAL REACH',
    },
    {
      value: '100%',
      label: 'IT SOLUTIONS',
    },
  ];

  return (
    <section className="bg-gray-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <p className="text-5xl font-bold text-9FFFCB mb-2">{stat.value}</p> {/* Using extracted color */}
              <p className="text-xl font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
