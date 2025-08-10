import React from 'react';
import { projects } from '../data/portfolioData';

const ProjectsCard = () => (
  <div className="h-full overflow-y-auto px-4 sm:px-8 py-6 sm:py-12 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-600">
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
      <div className="text-center space-y-4 sm:space-y-6">
        <h2 className="font-black text-2xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-sm sm:text-xl text-gray-300">
          A showcase of my recent work and technical capabilities
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.slice(0, 6).map((project, index) => (
          <div
            key={project.id || index}
            className="bg-white/5 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform group hover:bg-white/10"
          >
            <div className="h-32 sm:h-48 bg-gradient-to-br from-gray-800/20 to-gray-900/20 flex items-center justify-center">
              <div className="text-4xl sm:text-6xl opacity-90">
                {project.image || '📦'}
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                {project.title || `Project ${index + 1}`}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {project.description || "Advanced project solution with modern technologies."}
              </p>

              <div className="flex flex-wrap gap-1 sm:gap-2">
                {(project.technologies || ['React', 'Node.js', 'IoT']).slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 text-xs bg-black/20 text-gray-200 rounded-lg border border-gray-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2 sm:space-x-3 pt-3 sm:pt-4 border-t border-gray-700/50">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    className="flex-1 bg-white text-black py-2 px-3 sm:px-4 rounded-lg text-center font-bold hover:scale-105 transition-transform hover:bg-gray-200 text-xs sm:text-sm"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.links?.github || "#"}
                  className="flex-1 border border-gray-600 text-white py-2 px-3 sm:px-4 rounded-lg text-center font-bold hover:border-gray-400 hover:text-gray-200 transition-colors text-xs sm:text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsCard;
