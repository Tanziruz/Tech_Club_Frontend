import React from 'react';

const milestones = [
  {
    year: '2020',
    title: 'Club Foundation & Inaugural Event',
    description: 'The Tech Club was officially founded by a group of passionate students and teachers, aiming to foster technological innovation and learning within the school. Our first event, a "Code-a-thon for Beginners," saw enthusiastic participation.',
    image: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095', // Placeholder image for 2020
  },
  {
    year: '2021',
    title: 'Logique',
    description: 'We hosted our first inter-school hackathon, attracting participants from various schools and showcasing incredible talent. This year also marked the launch of our official club website, serving as a hub for resources and event registrations.',
    image: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095', // Placeholder image for 2021
  },
  {
    year: '2022',
    title: 'Expansion of Workshops & Community Projects',
    description: 'Expanded our workshop series to include advanced topics like AI/ML basics, cybersecurity, and game development. We also initiated community-focused projects, such as developing a school-wide digital notice board system.',
    image: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095', // Placeholder image for 2022
  },
  {
    year: '2023',
    title: 'National Recognition & Mentorship Program',
    description: 'Our club members achieved significant success in national-level tech competitions, bringing recognition to the school. We also launched a successful mentorship program, pairing experienced seniors with junior members.',
    image: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095', // Placeholder image for 2023
  },
  {
    year: '2024',
    title: 'Innovation Challenge & Industry Collaborations',
    description: 'Introduced the annual "Innovation Challenge," encouraging students to develop solutions for real-world problems. We also forged collaborations with local tech companies for guest lectures and internship opportunities.',
    image: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095', // Placeholder image for 2024
  },
  {
    year: 'Present',
    title: 'Looking Ahead: Global Outreach & Advanced Research',
    description: 'We are currently focusing on expanding our reach globally through online collaborations and participating in international competitions. Future plans include establishing a dedicated research wing for advanced tech projects.',
    image: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095', // Placeholder image for Present
  },
];


const OurJourney = () => (
  <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
    <div className="relative flex flex-col items-center w-full max-w-6xl py-8">
      {/* Main "Our Journey" heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-center animate-slide-in-right">
        <span className="text-yellow-300">Our Journey</span>
      </h1>
    </div>

    <div className="relative w-full max-w-4xl">
      {/* Vertical line for the timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-bright-sun to-supernova h-full rounded-full hidden md:block animate-fade-in"></div>

      {milestones.map((milestone, index) => (
        <div
          key={index}
          className={`mb-12 flex flex-col md:flex-row items-center w-full ${
            index % 2 === 0 ? 'md:justify-start animate-slide-in-left' : 'md:justify-end animate-slide-in-right'
          }`}
          style={{ animationDelay: '0s' }} // Set all animations to start at the same time
        >
          {/* Milestone Card */}
          <div
            className={`bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50 shadow-xl transition-all duration-300 hover:border-lightning-yellow/50 hover:shadow-lightning-yellow/20
              w-full md:w-5/12 flex flex-col
              ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
            `}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mr-4">
                <img
                  src={milestone.image}
                  alt={`Milestone for ${milestone.year}`}
                  className="w-full h-full object-cover rounded-lg border-2 border-bright-sun p-1"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-bright-sun mb-1">
                  {milestone.year}
                </h3>
                <h4 className="text-xl sm:text-2xl font-semibold text-white">
                  {milestone.title}
                </h4>
              </div>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {milestone.description}
            </p>
          </div>

          {/* Circle on the timeline line (desktop only) */}
          {index < milestones.length - 1 && (
            <div
              className="hidden md:block absolute w-6 h-6 rounded-full bg-supernova border-2 border-white z-10 animate-fade-in"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                top: `calc(${index * (12 + 12)}% + 50px)`,
                animationDelay: '0s',
              }}
            ></div>
          )}
        </div>
      ))}
    </div>

    <div className="mt-16 text-center animate-fade-in">
      <p className="text-gray-300 text-lg sm:text-xl mb-4">
        And the journey continues...
      </p>
      <button
        className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-lightning-yellow to-supernova text-gray-900 font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-lightning-yellow/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
        onClick={() => window.location.href = '/contact'} // Example: navigate to contact page
      >
        <span className="relative z-10">Join Our Future</span>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </button>
    </div>
  </div>
);

export default OurJourney;
