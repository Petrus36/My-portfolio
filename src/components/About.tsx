import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const skills = [
    'TypeScript',
    'React',
    'Node.js',
    'Tailwind CSS',
    'Next.js',
    'Git',
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">
            {t('aboutTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                {t('aboutText1')}
              </p>
              <p className="text-base sm:text-lg">
                {t('aboutText2')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">{t('aboutSkills')}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-gray-700 text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
