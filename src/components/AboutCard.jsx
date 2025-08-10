import React from 'react';
import { User, Code } from 'lucide-react';
import { personalInfo, education, stats } from '../data/portfolioData';

const AboutCard = () => (
  <div className="h-full overflow-y-auto px-4 sm:px-8 py-6 sm:py-12 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-600">
    <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
      <div className="text-center space-y-4 sm:space-y-6">
        <h2 className="font-black text-2xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.bio.long}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
        <div className="bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
          <h3 className="font-bold text-lg sm:text-2xl text-white mb-4 sm:mb-6 flex items-center space-x-2">
            <User className="text-gray-300" size={20} />
            <span>Education</span>
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 sm:mb-6">
              <h4 className="text-base sm:text-xl font-bold text-white">{edu.degree}</h4>
              <p className="text-gray-300 text-sm sm:text-lg">{edu.institution}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{edu.duration}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{edu.gpa}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-6">
          {Object.entries(stats).map(([key, value], index) => (
            <div
              key={key}
              className="bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:scale-105 transition-transform hover:bg-white/10"
            >
              <div className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1 sm:mb-2">
                {value}
              </div>
              <div className="text-gray-300 capitalize font-semibold text-xs sm:text-base">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AboutCard;
