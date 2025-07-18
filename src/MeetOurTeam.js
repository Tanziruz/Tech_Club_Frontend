import React from 'react';

// Reusable component for a single board member card
const BoardMemberCard = ({ role, name, className = '' }) => (
  <div className={`text-center w-48 flex-shrink-0 mx-2 my-2 rounded-lg shadow-lg overflow-hidden animate-fade-in-up ${className}`}>
    <div className="px-3 py-2 bg-yellow-400 rounded-t-lg">
      <p className="text-sm font-bold text-gray-900 capitalize truncate">{role}</p>
    </div>
    <div className="px-3 py-3 bg-gray-800 rounded-b-lg border border-t-0 border-gray-700">
      <p className="text-white font-medium">{name}</p>
    </div>
  </div>
);

// Reusable component for group labels like "mentors"
const GroupLabel = ({ label, className = '' }) => (
  <div className={`px-4 py-1 bg-yellow-400 rounded-lg text-sm font-bold text-gray-900 mb-4 animate-fade-in ${className}`}>
    {label.toUpperCase()}
  </div>
);

const MeetOurTeam = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center pt-20 p-8">

      <div className="relative flex flex-col items-center w-full max-w-6xl py-8">
        {/* Main "Meet Our Team" heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-center animate-slide-in-left">
          <span className="text-yellow-300">Meet Our Team</span>
        </h1>
      </div>

      {/* Main Hierarchy Container */}
      <div className="relative flex flex-col items-center w-full max-w-6xl py-8">
        {/* Level 0: President */}
        <BoardMemberCard role="president" name="Arghya Sarkar" />

        {/* Vertical Line from President to Vice President */}
        <div className="w-px h-12 bg-gray-600 my-2 animate-fade-in animation-delay-300"></div>

        {/* Level 1: Vice President */}
        <div className="relative flex flex-col items-center">
          <BoardMemberCard role="vice president" name="Ankush Roy" />

          {/* Lines from Vice President to Level 2 branches */}
          <div className="w-px h-12 bg-gray-600 animate-fade-in animation-delay-500"></div>
          <div className="relative flex justify-center w-full mt-4">
            {/* Horizontal line connecting the three branches below VP */}
            <div className="absolute top-0 h-px bg-gray-600 animate-fade-in animation-delay-600" style={{ width: 'calc(100% - 120px)', left: '60px', right: '60px' }}></div>

            {/* Vertical lines down from the horizontal connector */}
            <div className="absolute top-0 left-1/4 transform -translate-x-1/2 w-px h-8 bg-gray-600 animate-fade-in animation-delay-700"></div>
            <div className="absolute top-0 right-1/4 transform translate-x-1/2 w-px h-8 bg-gray-600 animate-fade-in animation-delay-800"></div>
            <div className="absolute top-0 w-px h-8 bg-gray-600 animate-fade-in animation-delay-900" style={{ left: '50%', transform: 'translateX(-50%)' }}></div>

            {/* Level 2 Branches Container */}
            <div className="flex justify-around w-full mt-8 flex-wrap">

              {/* Mentors Branch */}
              <div className="flex flex-col items-center w-full sm:w-1/3 min-w-[300px] mb-8 sm:mb-0">
                <GroupLabel label="mentors" />
                <div className="flex flex-wrap justify-center gap-2">
                  {['Anshuman Tripathi', 'Parthiv Pal', 'Soham Sen', 'Soumili Dey', 'Rishabh Das', 'Awasindra Chakraborty'].map((name, index) => (
                    <BoardMemberCard key={index} role="mentor" name={name} />
                  ))}
                </div>
              </div>

              {/* Offstage Executive (Swapnil Basu) Branch - Middle Branch */}
              <div className="flex flex-col items-center w-full sm:w-1/3 min-w-[300px] mb-8 sm:mb-0">
                <BoardMemberCard role="offstage executive" name="Swapnil Basu" />

                {/* Line from Swapnil Basu to Creative/PR Heads */}
                <div className="w-px h-12 bg-gray-600 my-2 animate-fade-in animation-delay-1300"></div>
                <div className="relative flex justify-center w-full">
                  {/* Horizontal line connecting Creative/PR Heads */}
                  <div className="absolute top-0 h-px bg-gray-600 animate-fade-in animation-delay-1400" style={{ width: 'calc(100% - 50px)', left: '25px', right: '25px' }}></div>

                  {/* Creative Heads / PR Executive - Container */}
                  <div className="flex flex-wrap justify-center gap-2 mt-8 relative">
                    {/* Vertical lines for each Creative/PR Head */}
                    <div className="absolute w-px h-8 bg-gray-600 animate-fade-in animation-delay-1500" style={{ top: '-32px', left: '10%', transform: 'translateX(-50%)' }}></div>
                    <div className="absolute w-px h-8 bg-gray-600 animate-fade-in animation-delay-1600" style={{ top: '-32px', left: '35%', transform: 'translateX(-50%)' }}></div>
                    <div className="absolute w-px h-8 bg-gray-600 animate-fade-in animation-delay-1700" style={{ top: '-32px', left: '60%', transform: 'translateX(-50%)' }}></div>
                    <div className="absolute w-px h-8 bg-gray-600 animate-fade-in animation-delay-1800" style={{ top: '-32px', left: '90%', transform: 'translateX(-50%)' }}></div>

                    <BoardMemberCard role="creative head (video)" name="Prithuraj Saha" />
                    <BoardMemberCard role="creative head (graphics)" name="Aditya Roy" />
                    <BoardMemberCard role="creative head (graphics)" name="Niharika Paul" />
                    <BoardMemberCard role="PR executive" name="Aritro Sen" />
                  </div>
                </div>
              </div>

              {/* Offstage Executive (Aryaka Sikdar) Branch - Right Branch */}
              <div className="flex flex-col items-center w-full sm:w-1/3 min-w-[300px]">
                <BoardMemberCard role="offstage executive" name="Aryaka Sikdar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy Members Section */}
      <div className="relative flex flex-col items-start w-full max-w-6xl py-8">
        <h2 className="text-3xl font-bold mb-4 text-center animate-slide-in-left">
          <span className="text-yellow-300">Legacy Members</span>
        </h2>
        <ul className="list-disc list-inside text-lg">
          <li>Soham Nandy</li>
          <li>Anjishnu De</li>
        </ul>
      </div>
    </div>
  );
};

export default MeetOurTeam;
