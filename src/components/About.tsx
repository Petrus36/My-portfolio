import { useLanguage } from '../contexts/LanguageContext';

interface SkillCategory {
  titleKey: string;
  skills: string[];
}

const About = () => {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      titleKey: 'skillsFrontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
    },
    {
      titleKey: 'skillsBackend',
      skills: ['Node.js', 'Python', 'MongoDB', 'SQL'],
    },
    {
      titleKey: 'skillsDesign',
      skills: ['Photoshop', 'Figma', 'Illustrator', 'Adobe XD', 'Fusion 360'],
    },
    {
      titleKey: 'skillsOS',
      skills: ['Linux', 'Windows', 'macOS'],
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-12 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">
            {t('aboutTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 mb-6">
            {t('aboutText1')}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="max-w-5xl mx-auto mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-center text-gray-800">
            {t('aboutSkills')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {skillCategories.map((category) => (
              <div
                key={category.titleKey}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 sm:p-5 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-base sm:text-lg font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {t(category.titleKey)}
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-700 text-sm">
                      <svg
                        className="w-4 h-4 mr-2 flex-shrink-0 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Text */}
        <div className="max-w-4xl mx-auto">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">
            {t('aboutText2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
