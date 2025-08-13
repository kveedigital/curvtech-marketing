import React, { useState } from 'react';

const FAQ = () => {
  const faqItems = [
    {
      question: 'WHAT SERVICES DO YOU OFFER?',
      answer: 'We offer a comprehensive suite of IT services, including cloud computing, cybersecurity, IT consultancy, and digital marketing.',
    },
    {
      question: 'TELL US ABOUT CLOUD SOLUTIONS.',
      answer: 'Our cloud solutions provide scalable, secure, and cost-effective infrastructure for your business needs.',
    },
    {
      question: 'WHAT IS IT CONSULTANCY?',
      answer: 'We specialize in IT consultancy to help you optimize your technology strategy and operations.',
    },
    {
      question: 'HOW CAN DIGITAL MARKETING HELP?',
      answer: 'Our digital marketing services are designed to boost your online presence and drive customer engagement.',
    },
    {
      question: 'DO YOU BUILD WEBSITES?',
      answer: 'Website development is a core service, creating dynamic and user-friendly sites tailored to your brand.',
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-232323 mb-10">YOUR IT QUESTIONS ANSWERED</h2>
        <div className="max-w-5xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-6 bg-white rounded-4xl shadow-lg p-6 cursor-pointer text-5xl" onClick={() => toggleFAQ(index)}>
              <h1 className="text-xl font-semibold text-232323 mb-2 flex justify-between items-center">{item.question} <span className="text-2xl">{openIndex === index ? '-' : '+'}</span></h1>
              {openIndex === index && <p className="text-2xl text-gray-700 mt-4">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
