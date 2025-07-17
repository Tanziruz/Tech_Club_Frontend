// FileName: /GetInTouch.js
import React, { useState } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-bright-sun mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          We would love to hear from you! Please fill out the form below to get in touch with us.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Message"
            rows="4"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-bright-sun hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
