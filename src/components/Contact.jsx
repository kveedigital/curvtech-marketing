import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-16">
      <div className=" mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-232323 mb-10">CONNECT WITH US</h2>

        {/* Social Buttons */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-4xl">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-4xl">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-4xl">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 text-4xl">
            <FaInstagram />
          </a>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl p-8 rounded-lg"> {/* Removed bg-gray-100 and shadow-md */}
            <h3 className="text-2xl font-bold text-232323 mb-6 text-center">GET IN TOUCH</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-full bg-white border-none focus:outline-none focus:ring-0 shadow-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-full bg-white border-none focus:outline-none focus:ring-0 shadow-md"
                />
              </div>
               <div>
                <input
                  type="text"
                  placeholder="Your phone"
                  className="w-full p-3 rounded-full bg-white border-none focus:outline-none focus:ring-0 shadow-md"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 rounded-3xl bg-white border-none focus:outline-none focus:ring-0 shadow-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-300 hover:bg-green-100 text-green-700 font-bold py-3 px-6 rounded-full w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="relative w-full h-96 mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.857260555088!2d55.27481131500818!3d25.24072698387994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4332a6f2b74b%3A0x1a7e4e1a7e4e1a7e!2sJumbo%20Building!5e0!3m2!1sen!2sae!4v1678901234567!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jumbo Building Location"
          ></iframe>
          <div className="absolute top-1/2 left-1/5 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-232323 mb-4">CONTACT US</h3>
            <p className="text-lg text-gray-700">Jumbo Electronics, Sharaf DG, Dubai </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
