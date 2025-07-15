import React, { useState, useEffect, useRef } from 'react';


// Reusable component for board member cards for a cleaner structure
const BoardMember = ({ role, name, className = '' }) => (
  <div className={`text-center w-48 flex-shrink-0 ${className}`}>
    <div className="px-3 py-1 bg-lightning-yellow rounded-t-lg">
      <p className="text-sm font-bold text-gray-900 capitalize truncate">{role}</p>
    </div>
    <div className="px-3 py-2 bg-gray-800 rounded-b-lg border border-t-0 border-gray-700">
      <p className="text-white font-medium">{name}</p>
    </div>
  </div>
);

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const navbarRef = useRef(null);
  const heroRef = useRef(null);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'gallery', 'contact'];
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Function to smoothly scroll to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };


    // Dummy data for gallery images from the original code
    const galleryImages = [
        'https://placehold.co/600x400/1a1a1a/fadc2e?text=Event+1',
        'https://placehold.co/600x400/1a1a1a/fadc2e?text=Workshop+2',
        'https://placehold.co/600x400/1a1a1a/fadc2e?text=Hackathon+3',
        'https://placehold.co/600x400/1a1a1a/fadc2e?text=Meetup+4',
        'https://placehold.co/600x400/1a1a1a/fadc2e?text=Project+5',
        'https://placehold.co/600x400/1a1a1a/fadc2e?text=Ceremony+6',
    ];

  // Board Member Data from the image
  const mentors = ['Anshuman Tripathi', 'Parthiv Pal', 'Soham Sen', 'Soumili Dey', 'Rishabh Das', 'Awasindra Chakraborty'];
  const creativeLeads = [
    { role: 'Creative Head (Video)', name: 'Prithuraj Saha' },
    { role: 'Creative Head (Graphics)', name: 'Aditya Roy' },
    { role: 'Creative Head (Graphics)', name: 'Niharika Paul' },
    { role: 'PR Executive', name: 'Aritro Sen' },
  ];


  // Loading spinner while the app loads
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-lightning-yellow border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-lightning-yellow text-xl font-bold animate-pulse">Loading Tech Club...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter overflow-x-hidden relative">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />

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
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrollY > 50 ? 'bg-gray-950/80 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <img
                src="Logo.png"
                alt="Tech Club Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:rotate-180 transition-transform duration-500"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/50x50/1a1a1a/fadc2e?text=Logo'; }}
              />
              <div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-bright-sun to-supernova bg-clip-text text-transparent">
                  TECH CLUB DPSRPK
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 lg:space-x-8">
              {['home', 'about', 'gallery', 'contact'].map((section) => (
                <li key={section} className="relative">
                  <a
                    href={`#${section}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
                    className={`relative text-base lg:text-lg font-medium transition-all duration-300 group ${
                      activeSection === section ? 'text-bright-sun' : 'text-gray-300 hover:text-lightning-yellow'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-bright-sun to-supernova transition-all duration-300 ${
                      activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
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
          <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}>
            <ul className="space-y-2">
              {['home', 'about', 'gallery', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
                    className="block py-2 px-4 text-gray-300 hover:text-lightning-yellow hover:bg-gray-800 rounded-lg transition-all duration-300 text-center"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
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

            <button
              onClick={() => scrollToSection('contact')}
              className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-lightning-yellow text-lightning-yellow font-bold text-base sm:text-lg rounded-full hover:bg-lightning-yellow hover:text-gray-900 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
            >
              Join Community
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-lightning-yellow rounded-full flex justify-center">
            <div className="w-1 h-3 bg-lightning-yellow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* MODIFIED About Section */}
      <section id="about" className="py-16 sm:py-20 relative overflow-hidden bg-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-bright-sun to-supernova bg-clip-text text-transparent mb-3 sm:mb-4 animate-fade-in">
              Meet Our Team
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-bright-sun to-supernova mx-auto mb-6 sm:mb-8 animate-expand"></div>
          </div>

          {/* Hierarchy Chart Container */}
          <div className="flex flex-col items-center space-y-12 md:space-y-16">
            
            {/* Level 1: President & Vice President */}
            <div className="flex flex-col md:flex-row gap-8 items-center relative">
              <BoardMember role="President" name="Arghya Sarkar" />
              <BoardMember role="Vice President" name="Ankush Roy" />
               {/* Connector Line from VP down */}
               <div className="hidden md:block absolute top-full left-3/4 w-px h-8 bg-gray-700"></div>
            </div>

            {/* Level 2: Mentors & Offstage Executives */}
            <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8 relative">
              
              {/* Connector Line horizontal */}
              <div className="hidden lg:block absolute top-[-32px] left-1/4 w-1/2 h-px bg-gray-700"></div>
              {/* Connector from horizontal to Mentors */}
              <div className="hidden lg:block absolute top-[-32px] left-1/4 w-px h-8 bg-gray-700"></div>


              {/* Mentors Block */}
              <div className="w-full lg:w-auto flex flex-col items-center">
                <BoardMember role="Mentors" name="Guidance Team" />
                <div className="w-px h-6 bg-gray-700"></div> {/* Connector */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {mentors.map(name => (
                     <div key={name} className="text-center bg-gray-800 rounded-lg p-3 border border-gray-700">
                        <p className="text-white font-medium text-sm">{name}</p>
                     </div>
                  ))}
                </div>
              </div>

              {/* Offstage Block */}
              <div className="w-full lg:w-auto flex flex-col items-center relative">
                  {/* Connector from horizontal to Offstage */}
                  <div className="hidden lg:block absolute top-[-32px] right-1/2 w-px h-8 bg-gray-700"></div>
                <div className="flex flex-col md:flex-row gap-8">
                  <BoardMember role="Offstage Executive" name="Swapnil Basu" />
                  <BoardMember role="Offstage Executive" name="Aryaka Sikdar" />
                </div>
                {/* Connector Line from Offstage down */}
                <div className="w-px h-6 bg-gray-700 mt-2"></div>
                <div className="w-1/2 h-px bg-gray-700"></div>
                <div className="w-px h-6 bg-gray-700"></div>
              </div>
            </div>
            
            {/* Level 3: Creative & PR */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {creativeLeads.map(lead => (
                  <BoardMember key={lead.name} role={lead.role} name={lead.name} />
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* Enhanced Gallery Section */}
      <section id="gallery" className="py-16 sm:py-20 relative overflow-hidden bg-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-bright-sun to-supernova bg-clip-text text-transparent mb-3 sm:mb-4 animate-fade-in">
              Our Journey
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-bright-sun to-supernova mx-auto mb-6 sm:mb-8 animate-expand"></div>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto animate-fade-in-up">
              Capturing moments of innovation, collaboration, and achievement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-lightning-yellow/20 transform hover:scale-105 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1a1a1a/fadc2e?text=Image+Error'; }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 border-2 border-lightning-yellow/0 group-hover:border-lightning-yellow/50 transition-all duration-300 rounded-2xl"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                  <div className="transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Event Highlight</h3>
                    <p className="text-bright-sun text-xs sm:text-sm">Innovation Workshop #{index + 1}</p>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-lightning-yellow rounded-full flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                  🔍
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 sm:py-20 relative overflow-hidden bg-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-bright-sun to-supernova bg-clip-text text-transparent mb-3 sm:mb-4 animate-fade-in">
              Get In Touch
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-bright-sun to-supernova mx-auto mb-6 sm:mb-8 animate-expand"></div>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto animate-fade-in-up">
              Ready to join our community? Let's start a conversation!
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-700 hover:border-lightning-yellow/50 transition-all duration-300 animate-fade-in-up">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-base sm:text-lg font-medium text-gray-200 mb-1 sm:mb-2 group-focus-within:text-bright-sun transition-colors duration-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lightning-yellow focus:border-transparent transition-all duration-300 hover:border-lightning-yellow/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-200 mb-1 sm:mb-2 group-focus-within:text-bright-sun transition-colors duration-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lightning-yellow focus:border-transparent transition-all duration-300 hover:border-lightning-yellow/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-base sm:text-lg font-medium text-gray-200 mb-1 sm:mb-2 group-focus-within:text-bright-sun transition-colors duration-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lightning-yellow focus:border-transparent transition-all duration-300 hover:border-lightning-yellow/50"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-base sm:text-lg font-medium text-gray-200 mb-1 sm:mb-2 group-focus-within:text-bright-sun transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lightning-yellow focus:border-transparent transition-all duration-300 hover:border-lightning-yellow/50 resize-none"
                    placeholder="Tell us about your ideas, questions, or how you'd like to get involved..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-lightning-yellow to-supernova text-gray-900 font-bold text-base sm:text-lg rounded-lg shadow-2xl hover:shadow-lightning-yellow/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-t from-gray-900 to-gray-950 py-10 sm:py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <img
                  src="http://googleusercontent.com/file_content/b9910735-dab8-4920-88d2-9ce96aa51c06"
                  alt="Tech Club Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/1a1a1a/fadc2e?text=Logo'; }}
                />
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-bright-sun to-supernova bg-clip-text text-transparent">
                  TECH CLUB
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
                Building the future through innovation, collaboration, and cutting-edge technology.
                Join us in shaping tomorrow's digital landscape.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {['About', 'About', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-bright-sun transition-colors duration-300 text-sm sm:text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Connect</h3>
              <div className="flex space-x-3 justify-center md:justify-start">
                {['💬', '📧', '🐦', '📱'].map((emoji, index) => (
                  <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lightning-yellow hover:text-gray-900 transition-all duration-300 cursor-pointer transform hover:scale-110 text-lg sm:text-xl">
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Tech Club. All rights reserved.
              <span className="text-bright-sun"> Made with ❤️ by our community</span>
            </p>
          </div>
        </div>
      </footer>

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
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
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