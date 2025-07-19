/* eslint-disable */
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import MeetOurTeam from './MeetOurTeam';
import OurJourney from './OurJourney';
import Gallery from './Gallery';
import GetInTouch from './GetInTouch';
import Footer from './Footer';
import './index.css';

const NAV_LINKS = [
  { name: 'Home', path: '/Tech_Club_Frontend' },
  { name: 'Meet Our Team', path: '/team' },
  { name: 'Our Journey', path: '/journey' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Get In Touch', path: '/contact' },
];

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const navbarRef = useRef(null);
  const heroRef = useRef(null);
  const location = useLocation();

  // Scroll to top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Dependency on location.pathname ensures it runs on every route change

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced scroll handler for sections on the main page
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Only apply scroll-based active section logic if on the home page
      if (location.pathname === '/Tech_Club_Frontend' || location.pathname === '/') {
        const sections = ['home', 'about', 'gallery', 'contact']; // 'gallery' and 'contact' are also sections on the home page
        let currentActive = 'home';

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentActive = sections[i];
              break;
            }
          }
        }
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Update active section based on current route for non-home pages
  useEffect(() => {
    const currentPath = location.pathname;
    const foundLink = NAV_LINKS.find(link => link.path === currentPath);

    if (foundLink) {
      setActiveSection(foundLink.name.toLowerCase().replace(/ /g, '-'));
    } else if (currentPath === '/Tech_Club_Frontend' || currentPath === '/') {
      if (window.scrollY === 0) {
        setActiveSection('home');
      }
    }
  }, [location.pathname]);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Function to smoothly scroll to a section (primarily for home page sections)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // Loading spinner while the app loads
if (isLoading) {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      <div className="text-center relative z-10">
        <img
          src="https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095"
          alt="Loading Logo"
          className="w-20 h-20 animate-spin-slow mb-4"
        />
        <div className="text-white text-xl font-bold animate-pulse animation-delay-500">
          Loading Tech Club...
        </div>
      </div>

      {/* Animated blobs in background */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute w-64 h-64 bg-lightning-yellow rounded-full filter blur-3xl animate-blob top-1/4 left-1/3"></div>
        <div className="absolute w-64 h-64 bg-supernova rounded-full filter blur-3xl animate-blob animation-delay-2000 top-1/2 right-1/4"></div>
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter overflow-x-hidden relative">
      {/* Custom cursor for desktop (hidden on smaller screens) */}
      <div
        className="hidden md:block fixed w-6 h-6 bg-lightning-yellow rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${activeSection === 'home' ? 1.5 : 1})`,
        }}
      />

      {/* Animated Background - Moved here to cover the entire page */}
      <div className="fixed inset-0 w-full h-full -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(250, 203, 36, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 203, 36, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'moveGrid 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-lightning-yellow rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Blob Animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-lightning-yellow rounded-full mix-blend-multiply filter blur-3xl animate-blob top-1/4 -left-20"></div>
          <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-supernova rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 top-1/3 -right-20"></div>
          <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-old-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 -bottom-20 left-1/2"></div>
        </div>
      </div>

      {/* Enhanced Navbar */}
      <nav
        ref={navbarRef}
        className={`fixed w-full z-40 transition-all duration-500 ${scrollY > 50 ? 'bg-gray-950/80 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-4'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <Link to="/Tech_Club_Frontend" onClick={() => setActiveSection('home')}>
                <img
                  src='https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095'
                  alt="Tech Club Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:rotate-180 transition-transform duration-500"
                />
              </Link>
              <div>
                <Link to="/Tech_Club_Frontend" onClick={() => setActiveSection('home')} className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-bright-sun to-supernova bg-clip-text text-transparent">
                  TECH CLUB DPSRPK
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 lg:space-x-8">
              {NAV_LINKS.map(link => (
                <li key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`relative text-base lg:text-lg font-medium transition-all duration-300 group ${
                      activeSection === link.name.toLowerCase().replace(/ /g, '-') ||
                      (link.path === '/Tech_Club_Frontend' && (location.pathname === '/Tech_Club_Frontend' || location.pathname === '/'))
                      ? 'text-bright-sun' : 'text-gray-300 hover:text-lightning-yellow'
                    }`}
                    onClick={() => {
                      if (link.path === '/Tech_Club_Frontend' && link.name === 'Home') {
                        scrollToSection('home');
                      } else if (link.path === '/Tech_Club_Frontend' && link.name === 'About') {
                        scrollToSection('about');
                      } else if (link.path === '/Tech_Club_Frontend' && link.name === 'Gallery') {
                        scrollToSection('gallery');
                      } else if (link.path === '/Tech_Club_Frontend' && link.name === 'Get In Touch') {
                        scrollToSection('contact');
                      } else {
                        setActiveSection(link.name.toLowerCase().replace(/ /g, '-'));
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {link.name}
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-bright-sun to-supernova transition-all duration-300 ${
                      activeSection === link.name.toLowerCase().replace(/ /g, '-') ||
                      (link.path === '/Tech_Club_Frontend' && (location.pathname === '/Tech_Club_Frontend' || location.pathname === '/'))
                      ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button (Hamburger) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none"
              aria-label="Toggle navigation"
            >
              <span className={`w-6 h-0.5 bg-lightning-yellow transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-lightning-yellow transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'my-1'}`}></span>
              <span className={`w-6 h-0.5 bg-lightning-yellow transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block py-2 px-4 text-gray-300 hover:text-lightning-yellow hover:bg-gray-800 rounded-lg transition-all duration-300 text-center"
                    onClick={() => {
                      if (link.path === '/Tech_Club_Frontend' && link.name === 'Home') {
                        scrollToSection('home');
                      } else if (link.path === '/Tech_Club_Frontend' && link.name === 'About') {
                        scrollToSection('about');
                      } else if (link.path === '/Tech_Club_Frontend' && link.name === 'Gallery') {
                        scrollToSection('gallery');
                      } else if (link.path === '/Tech_Club_Frontend' && link.name === 'Get In Touch') {
                        scrollToSection('contact');
                      } else {
                        setActiveSection(link.name.toLowerCase().replace(/ /g, '-'));
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/Tech_Club_Frontend" element={
          <>
            <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
              {/* Hero Content */}
              <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                <div className="mb-6 sm:mb-8">
                  <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-lightning-yellow/20 border border-lightning-yellow/30 rounded-full text-bright-sun text-xs sm:text-sm font-medium backdrop-blur-sm animate-fade-in">
                    Welcome to The Tech Club of DPSRPK
                  </div>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 sm:mb-6">
                  <span className="block animate-slide-up">
                    <span className="bg-gradient-to-r from-bright-sun via-lightning-yellow to-supernova bg-clip-text text-transparent">
                      INNOVATE
                    </span> 
                  </span>
                  <span className="block animate-slide-up animation-delay-300">
                    <span className="text-white">CREATE</span>
                  </span>
                  <span className="block animate-slide-up animation-delay-600">
                    <span className="bg-gradient-to-r from-bright-sun via-lightning-yellow to-supernova bg-clip-text text-transparent">
                      INSPIRE
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-1000">
                  Join the most innovative tech community where creativity meets technology. Get a chance of being a part of something "awesome".
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up animation-delay-1500">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-lightning-yellow to-supernova text-gray-900 font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-lightning-yellow/25 transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                  >
                    <span className="relative z-10">Explore Now</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>

                <Link
                  to="/contact"
                  onClick={() => setActiveSection('get-in-touch')}
                  className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-lightning-yellow text-lightning-yellow font-bold text-base sm:text-lg rounded-full hover:bg-lightning-yellow hover:text-gray-900 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center"
                >
                  Join Community
                </Link>

                </div>
              </div>

              {/* Scroll Indicator removed as requested */}
            </section>

            {/* About Section */}
            <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-950 to-gray-900">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-8">
                      <span className="bg-gradient-to-r from-bright-sun via-lightning-yellow to-supernova bg-clip-text text-transparent">
                        About Our Club
                      </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-lightning-yellow to-supernova mx-auto"></div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20">
                    {/* Who We Are */}
                    <div className="space-y-8 sm:space-y-10">
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-gray-700/50 hover:border-lightning-yellow/30 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold text-bright-sun mb-6 sm:mb-8">
                          Who We Are
                        </h3>
                        <div className="space-y-6 text-xl sm:text-2xl text-gray-300 leading-relaxed">
                          <p>
                            Hey there! Welcome to the most exciting corner of Delhi Public School Ruby Park - our Tech Club!
                            We're not just another school club; we're a community of curious minds who believe that technology
                            isn't just about coding (though we love that too). It's about solving problems, building cool stuff,
                            and honestly, having a blast while doing it.
                          </p>
                          <p>
                            Started by students who were tired of just learning theory, our club is where we get our hands dirty
                            with real projects. Whether you're someone who's been coding since you could spell "HTML" or you're
                            just figuring out what a programming language even is, there's a place for you here.
                          </p>
                          <div className="bg-lightning-yellow/10 border border-lightning-yellow/20 rounded-lg p-4 mt-4">
                            <p className="text-bright-sun font-medium text-lg">
                              <strong>Fun fact:</strong> Last year, our members built everything from a smart dustbin for our school
                              to a mobile app that helps students track their assignments. This year? The sky's the limit!
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* What We Do */}
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-gray-700/50 hover:border-lightning-yellow/30 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold text-bright-sun mb-6 sm:mb-8">
                          What We Do
                        </h3>
                        <div className="space-y-6 text-xl sm:text-2xl text-gray-300 leading-relaxed">
                          <p>
                            Picture this: It's a Friday afternoon, and instead of rushing home, you're staying back because you're
                            genuinely excited about the project you're working on. That's what our club meetings feel like.
                          </p>
                          <p>
                            We don't just sit around talking about technology - we create it, break it, fix it, and sometimes
                            accidentally crash it (but that's all part of the learning process!).
                          </p>
                          <p>
                            From organizing hackathons that get your adrenaline pumping to workshops where seniors teach juniors
                            the coolest tricks they've learned, we're always up to something interesting. We've had guest speakers
                            who've worked at Google, organized coding competitions that had the whole school talking, and even
                            collaborated with other schools on some pretty amazing projects.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Why Join Us & What Makes Us Different */}
                    <div className="space-y-8 sm:space-y-10">
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-gray-700/50 hover:border-lightning-yellow/30 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold text-bright-sun mb-6 sm:mb-8">
                          Why Join Us?
                        </h3>
                        <div className="space-y-6 text-xl sm:text-2xl text-gray-300 leading-relaxed">
                          <p>
                            Look, we could give you the standard "it looks good on college applications" speech, but that's not
                            really why you should join. You should join because you want to be part of something that's actually
                            making a difference.
                          </p>
                          <p>
                            Our club members have gone on to win district-level competitions, get internships at tech companies,
                            and some have even started their own little ventures. But more than that, you'll find friends who get
                            excited about the same weird stuff you do.
                          </p>
                          <p>
                            You know that feeling when you finally get your code to work after debugging for hours? We celebrate
                            those moments together. When you're stuck on a problem at 11 PM, there's always someone in our group
                            chat ready to help out.
                          </p>
                          <div className="bg-lightning-yellow/10 border border-lightning-yellow/20 rounded-lg p-4 mt-4">
                            <p className="text-bright-sun font-medium text-lg">
                              <strong>Real talk:</strong> We're not just about the technical stuff. We organize movie nights
                              (sci-fi themed, obviously), tech trivia contests, and even the occasional gaming tournament.
                              Because what's the point of all this technology if we can't have fun with it?
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* What Makes Us Different */}
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-gray-700/50 hover:border-lightning-yellow/30 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold text-bright-sun mb-6 sm:mb-8">
                          What Makes Us Different
                        </h3>
                        <div className="space-y-6 text-xl sm:text-2xl text-gray-300 leading-relaxed">
                          <p>
                            Unlike other clubs that might feel intimidating or exclusive, we believe everyone brings something
                            valuable to the table. That kid who's amazing at graphic design? We need them for our app interfaces.
                            The person who's great at presentations? Perfect for pitching our ideas. Love writing? Our projects
                            need documentation and our social media needs content.
                          </p>
                          <p>
                            We're not about showing off how much we know - we're about learning together and building things that
                            actually matter. When the school needed a better system for managing club registrations, we built it.
                            When teachers wanted a way to share resources more effectively, we created a platform for that too.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-16 sm:mt-20 text-center">
                    <div className="bg-gradient-to-r from-lightning-yellow/10 to-supernova/10 border border-lightning-yellow/20 rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto">
                      <h3 className="text-3xl sm:text-4xl font-bold text-bright-sun mb-6 sm:mb-8">
                        Ready to Join Something Awesome?
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-10">
                        If you've read this far, you're probably already convinced. Trust us, this is going to be one of the best
                        decisions you make in school. Come find us during lunch break in the computer lab, or just show up to our
                        next meeting. No experience required - just bring your curiosity and enthusiasm!
                      </p>
                      <button
            onClick={() => window.location.pathname = '/contact'}
            className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-lightning-yellow to-supernova text-gray-900 font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-lightning-yellow/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                      >
                        <span className="relative z-10 text-xl sm:text-2xl">Get Involved Today!</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </>
        } />
        <Route path="/team" element={<MeetOurTeam />} />
        <Route path="/journey" element={<OurJourney />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<GetInTouch />} />
      </Routes>

      <Footer />

      {/* Custom Styles */}
      <style>{`
        /* Your color palette */
        :root {
          --lightning-yellow: #facb24;
          --ronchi: #f0cf4f;
          --saffron: #f6cc34;
          --tussock: #af9740;
          --bright-sun: #fadc2e;
          --old-gold: #d4b33d;
          --anzac: #dcc232;
          --supernova: #fccc0c;
        }

        .bg-lightning-yellow { background-color: var(--lightning-yellow); }
        .text-lightning-yellow { color: var(--lightning-yellow); }
        .border-lightning-yellow { border-color: var(--lightning-yellow); }
        .bg-supernova { background-color: var(--supernova); }
        .bg-old-gold { background-color: var(--old-gold); }
        .text-bright-sun { color: var(--bright-sun); }
        .border-bright-sun { border-color: var(--bright-sun); }
        .hover\\:text-lightning-yellow:hover { color: var(--lightning-yellow); }
        .from-bright-sun { --tw-gradient-from: var(--bright-sun); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(250, 220, 46, 0)); }
        .to-supernova { --tw-gradient-to: var(--supernova); }
        .via-lightning-yellow { --tw-gradient-stops: var(--tw-gradient-from), var(--lightning-yellow), var(--tw-gradient-to, rgba(250, 203, 36, 0)); }
        .from-lightning-yellow { --tw-gradient-from: var(--lightning-yellow); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(250, 203, 36, 0)); }
        .hover\\:border-lightning-yellow:hover { border-color: var(--lightning-yellow); }
        .focus\\:ring-lightning-yellow:focus { --tw-ring-color: var(--lightning-yellow); }
        .hover\\:bg-lightning-yellow:hover { background-color: var(--lightning-yellow); }
        .bg-lightning-yellow\\/20 { background-color: rgba(250, 203, 36, 0.2); }
        .border-lightning-yellow\\/30 { border-color: rgba(250, 203, 36, 0.3); }
        .hover\\:shadow-lightning-yellow\\/25:hover { --tw-shadow-color: rgba(250, 203, 36, 0.25); --tw-shadow: var(--tw-shadow-colored); }
        .hover\\:border-lightning-yellow\\/50:hover { border-color: rgba(250, 203, 36, 0.5); }
        .hover\\:shadow-lightning-yellow\\/10:hover { --tw-shadow-color: rgba(250, 203, 36, 0.1); --tw-shadow: var(--tw-shadow-colored); }
        .group-hover\\:border-bright-sun:hover { border-color: var(--bright-sun); }
        .group-hover\\:text-bright-sun:hover { color: var(--bright-sun); }
        .group-hover\\:border-lightning-yellow\\/50:hover { border-color: rgba(250, 203, 36, 0.5); }
        .hover\\:shadow-lightning-yellow\\/20:hover { --tw-shadow-color: rgba(250, 203, 36, 0.2); --tw-shadow: var(--tw-shadow-colored); }
        .group-hover\\:border-lightning-yellow\\/50:hover { border-color: rgba(250, 203, 36, 0.5); }
        .group-focus-within\\:text-bright-sun:focus-within { color: var(--bright-sun); }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Enhanced Animations */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1, transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes expand { from { width: 0; } to { width: 6rem; } }
        @keyframes moveGrid { from { transform: translate(0, 0); } to { transform: translate(50px, 50px); } }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* Animation Classes */
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-expand { animation: expand 1s ease-out forwards; }
        .animate-spin-slow { animation: spinSlow 3s linear infinite; }

        /* Animation Delays */
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #1f2937; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, var(--lightning-yellow), var(--supernova));
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, var(--supernova), var(--old-gold)); }

        /* Smooth Scrolling */
        html { scroll-behavior: smooth; }

        /* Custom Utilities */
        .backdrop-blur-xl { backdrop-filter: blur(24px); }
        .mix-blend-multiply { mix-blend-mode: multiply; }
        .filter { filter: blur(0); }
        .blur-xl { filter: blur(24px); }
        .blur-3xl { filter: blur(64px); }

        /* Responsive Text Sizes */
        @media (max-width: 768px) {
          .text-8xl { font-size: 4rem; }
          .text-7xl { font-size: 3.5rem; }
          .text-6xl { font-size: 3rem; }
          .text-5xl { font-size: 2.5rem; }
          .text-4xl { font-size: 2rem; }
          .text-3xl { font-size: 1.75rem; }
          .text-2xl { font-size: 1.5rem; }
          .text-xl { font-size: 1.25rem; }
          .text-lg { font-size: 1.125rem; }
          .text-base { font-size: 1rem; }
          .text-sm { font-size: 0.875rem; }
          .text-xs { font-size: 0.75rem; }
        }
        @media (max-width: 640px) {
          .text-8xl { font-size: 3rem; }
          .text-6xl { font-size: 2.5rem; }
          .text-5xl { font-size: 2rem; }
          .text-4xl { font-size: 1.75rem; }
          .text-3xl { font-size: 1.5rem; }
          .text-2xl { font-size: 1.25rem; }
          .text-xl { font-size: 1.125rem; }
          .text-lg { font-size: 1rem; }
          .text-base { font-size: 0.9375rem; }
          .text-sm { font-size: 0.8125rem; }
          .text-xs { font-size: 0.6875rem; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
          .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
          .mb-12 { margin-bottom: 2rem; }
          .mb-16 { margin-bottom: 2.5rem; }
          .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        }
      `}</style>
    </div>
  );
};

export default App;
