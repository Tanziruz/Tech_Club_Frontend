import React from 'react';
import './animations.css';

const GetInTouch = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center w-full py-8 text-center animate-slide-in-right">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8">
            <span className="text-yellow-300">Get In Touch</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-12">
            Have questions or want to join our club? Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl fade-in">
            <h2 className="text-xl font-bold text-yellow-300 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none transition"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none transition"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-400 text-gray-900 font-bold rounded-lg button-hover"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-center">
              <div className="bg-yellow-400/20 p-4 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Email Us</h3>
                <p className="text-gray-300">contact@techclubdpsrpk.com</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-center">
              <div className="bg-yellow-400/20 p-4 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Visit Us</h3>
                <p className="text-gray-300">Delhi Public School Ruby Park, Kolkata, India</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Discord', img: 'https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg', link: 'https://discord.gg/tEEexZX2aq' },
                  { name: 'Medium', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/2048px-Medium_logo_Monogram.svg.png', link: 'https://medium.com/@techclubdpsrpk' },
                  { name: 'Youtube', img: 'https://pngdownload.io/wp-content/uploads/2023/12/YouTube-Logo-PNG-Symbol-for-Video-Platform-Transparent-jpg.webp', link: 'https://www.youtube.com/@techclubdpsrpk' },
                  { name: 'GitHub', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIxtAFjV-iTPm3DNMxVIFQVLdvHrwuEGrRQ&s', link: 'https://github.com/thearghyasarkar/' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full transition duration-300 hover:bg-yellow-300"
                    aria-label={social.name}
                  >
                    <img src={social.img} alt={social.name} className="w-full h-full rounded-full" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">Announcements</h3>
              <p className="text-gray-300 mt-2">For any Announcements, join our discord server.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GetInTouch;
