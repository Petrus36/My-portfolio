import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
      >
        <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
          {project.imageUrl ? (
            <>
              <img
                src={project.imageUrl.replace(/ /g, '%20')}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-5xl sm:text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2.5 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <button className="text-sm sm:text-base text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            {t('projectViewDetails')}
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-40 sm:h-48 md:h-64 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl.replace(/ /g, '%20')}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : null}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 transition-colors z-10"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">{project.title}</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {project.longDescription}
              </p>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{t('projectTechnologiesUsed')}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-sm sm:text-base font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 text-center text-sm sm:text-base"
                  >
                    {t('projectViewLive')}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-center text-sm sm:text-base"
                  >
                    {t('projectViewCode')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
