/* eslint-disable */
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';

import MeetOurTeam from './MeetOurTeam';
import OurJourney from './OurJourney';
import Gallery from './Gallery';
import GetInTouch from './GetInTouch';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Meet Our Team', path: '/team' },
  { name: 'Our Journey', path: '/journey' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Get In Touch', path: '/contact' },
];

const App = () => {


  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden relative">



      <main className="pb-20">
        <Routes>
  
        </Routes>
      </main>


      <footer className="bg-gray-900 py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 text-center">
              <span className="text-yellow-300">Connect</span> With Us
            </h1>
            <div className="w-24 h-1 bg-yellow-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Box */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h2 className="text-xl font-bold text-yellow-300 mb-4">Contact Info</h2>
              <div className="space-y-3 text-gray-300">
                <p>Email: techclub@dpsrpk.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Delhi Public School Ruby Park</p>
              </div>
            </div>

            {/* Social Media Box */}
<div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
  <h2 className="text-xl font-bold text-yellow-300 mb-4">Follow Us</h2>
  <div className="flex space-x-4">
    {[
      { name: 'Discord', url: 'https://discord.gg/tEEexZX2aq' },
      { name: 'Medium', url: 'https://medium.com/@techclubdpsrpk' },
      { name: 'Youtube', url: 'https://www.youtube.com/@TechClubDPSRPK' },
      { name: 'Github', url: 'https://github.com/thearghyasarkar/' }
    ].map((platform) => (
      <a
        key={platform.name}
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-yellow-300 transition-colors"
      >
        {platform.name}
      </a>
    ))}
  </div>
</div>


            {/* Quick Links Box */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h2 className="text-xl font-bold text-yellow-300 mb-4">Quick Links</h2>
            <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                <li key={link.name}>
                    <Link 
                    to={link.name === 'Home' ? '/Tech_Club_Frontend' : link.path} 
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                    >
                    {link.name}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Tech Club DPSRPK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
