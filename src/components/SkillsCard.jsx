import React from 'react';
import { Code } from 'lucide-react';
import { skills } from '../data/portfolioData';

const SkillsCard = () => {
  if (!skills?.technical || typeof skills.technical !== 'object') {
    return (
      <div className="h-full flex items-center justify-center px-4 sm:px-8 py-6 sm:py-12">
        <div className="text-center text-white">
          <h2 className="text-lg sm:text-2xl font-bold mb-4">Skills data not available</h2>
          <p className="text-gray-400 text-sm">Please check your portfolio data configuration.</p>
        </div>
      </div>
    );
  }

  const skillEntries = Object.entries(skills.technical);

  // Real skill logos mapping
  const getSkillLogo = (skillName) => {
    const logos = {
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'MySQL Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Socket.IO': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
      'Arduino/IoT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg'
    };
    return logos[skillName] || null;
  };

  return (
    <div className="h-full overflow-y-auto px-4 sm:px-8 py-6 sm:py-12 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-600">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="font-black text-2xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-xl text-gray-300">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillEntries.map(([category, skillList], categoryIndex) => {
            const skills = Array.isArray(skillList) ? skillList : [];
            
            return (
              <div
                key={category}
                className="bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:scale-105 transition-transform hover:bg-white/10"
              >
                <h3 className="font-bold text-lg sm:text-2xl text-white mb-6 sm:mb-8 flex items-center space-x-2">
                  <Code className="text-gray-300" size={20} />
                  <span>{category}</span>
                </h3>
                
                {skills.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {skills.map((skill, skillIndex) => {
                      const logoUrl = getSkillLogo(skill.name);
                      
                      return (
                        <div
                          key={`${category}-${skillIndex}`}
                          className="p-3 sm:p-4 bg-black/20 border border-gray-600/30 rounded-xl hover:bg-black/40 hover:border-gray-400/50 transition-all group text-center"
                        >
                          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                            {logoUrl ? (
                              <img 
                                src={logoUrl} 
                                alt={skill.name}
                                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                                style={{ filter: skill.name === 'Next.js' ? 'invert(1)' : 'none' }}
                              />
                            ) : (
                              <span className="text-lg sm:text-2xl">{skill.icon || '🔧'}</span>
                            )}
                            <span className="text-white font-medium group-hover:text-gray-200 transition-colors text-xs sm:text-sm">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-6 sm:py-8">
                    <p className="text-sm">No skills listed in this category</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
