import React from 'react';

const galleryImages = [
  {
    src: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095',
    alt: 'Event 1',
  },
  {
    src: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095',
    alt: 'Workshop 2',
  },
  {
    src: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095',
    alt: 'Hackathon 3',
  },
  {
    src: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095',
    alt: 'Meetup 4',
  },
  {
    src: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095',
    alt: 'Project 5',
  },
  {
    src: 'https://ik.imagekit.io/o8zmk0phf/Logo.png?updatedAt=1752756443095',
    alt: 'Ceremony 6',
  },
];

const Gallery = () => (
  <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16 mt-12 sm:mt-18">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-center animate-slide-in-left">
        <span className="text-yellow-300">Gallery</span>
      </h1>
    </div>

    <div className="relative w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 fade-in">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-5 border border-gray-700/60 shadow-2xl transition-transform duration-300 hover:border-lightning-yellow/70 hover:shadow-lightning-yellow/40 hover:scale-105 cursor-pointer transform-gpu"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-52 object-cover rounded-xl mb-5 border-4 border-bright-sun shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
          <p className="text-bright-sun font-semibold text-xl text-center tracking-wide">{image.alt}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
