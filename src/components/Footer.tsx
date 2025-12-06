import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t('portfolioTitle')}</h3>
            <p className="text-sm sm:text-base text-gray-400">
              {t('footerDescription')}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{t('footerQuickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors text-sm sm:text-base">
                  {t('navHome')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors text-sm sm:text-base">
                  {t('navAbout')}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors text-sm sm:text-base">
                  {t('navProjects')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors text-sm sm:text-base">
                  {t('navContact')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{t('footerConnect')}</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-sm sm:text-base"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-sm sm:text-base"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="hover:text-white transition-colors text-sm sm:text-base break-all"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; {currentYear} {t('portfolioTitle')}. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
