import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'sk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  sk: {
    // Navbar
    navHome: 'Domov',
    navAbout: 'O mne',
    navProjects: 'Projekty',
    navContact: 'Kontakt',
    portfolioTitle: "Peter's Portfolio",
    
    // Hero
    heroTitle: 'Ahoj, som Peter',
    heroSubtitle: 'Nadšený vývojár tvoríaci krásne a funkčné webové zážitky',
    heroViewWork: 'Pozri moju prácu',
    heroGetInTouch: 'Kontaktuj ma',
    
    // About
    aboutTitle: 'O mne',
    aboutText1: 'Som oddaný vývojár s vášňou pre vytváranie moderných, responzívnych webových aplikácií. Milujem premena zložitých problémov na jednoduché, krásne a intuitívne riešenia.',
    aboutText2: 'Keď nepíšem kód, rád sa zoznamujem s najnovšími webovými technológiami a prispievam do open-source projektov. Verím v písanie čistého, udržateľného kódu a vždy sa snažím učiť a rásť.',
    aboutSkills: 'Zručnosti a technológie',
    
    // Projects
    projectsTitle: 'Moje projekty',
    projectsSubtitle: 'Tu sú niektoré z mojich recentných projektov. Kliknite na ľubovoľnú kartu, aby ste sa dozvedeli viac.',
    projectViewDetails: 'Zobraziť detaily →',
    projectTechnologiesUsed: 'Použité technológie',
    projectViewLive: 'Zobraziť naživo',
    projectViewCode: 'Zobraziť kód',
    
    // Contact
    contactTitle: 'Kontaktujte ma',
    contactSubtitle: 'Vždy som otvorený diskusii o nových projektoch, kreatívnych nápadoch alebo príležítostiach byť súčasťou vašich vízií.',
    contactName: 'Meno',
    contactEmail: 'Email',
    contactMessage: 'Správa',
    contactNamePlaceholder: 'Vaše meno',
    contactEmailPlaceholder: 'vas.email@priklad.sk',
    contactMessagePlaceholder: 'Vaša správa',
    contactSend: 'Odoslať správu',
    
    // Footer
    footerDescription: 'Tvorba moderných, responzívnych webových zážitkov s vášňou a presnosťou.',
    footerQuickLinks: 'Rýchle odkazy',
    footerConnect: 'Pripojiť sa',
    footerRights: 'Všetky práva vyhradené.',
  },
  en: {
    // Navbar
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navContact: 'Contact',
    portfolioTitle: "Peter's Portfolio",
    
    // Hero
    heroTitle: "Hi, I'm Peter",
    heroSubtitle: 'A passionate developer crafting beautiful and functional web experiences',
    heroViewWork: 'View My Work',
    heroGetInTouch: 'Get In Touch',
    
    // About
    aboutTitle: 'About Me',
    aboutText1: "I'm a dedicated developer with a passion for creating modern, responsive web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
    aboutText2: "When I'm not coding, I enjoy staying up-to-date with the latest web technologies and contributing to open-source projects. I believe in writing clean, maintainable code and always strive to learn and grow.",
    aboutSkills: 'Skills & Technologies',
    
    // Projects
    projectsTitle: 'My Projects',
    projectsSubtitle: 'Here are some of my recent projects. Click on any card to learn more.',
    projectViewDetails: 'View Details →',
    projectTechnologiesUsed: 'Technologies Used',
    projectViewLive: 'View Live',
    projectViewCode: 'View Code',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    contactName: 'Name',
    contactEmail: 'Email',
    contactMessage: 'Message',
    contactNamePlaceholder: 'Your Name',
    contactEmailPlaceholder: 'your.email@example.com',
    contactMessagePlaceholder: 'Your Message',
    contactSend: 'Send Message',
    
    // Footer
    footerDescription: 'Creating modern, responsive web experiences with passion and precision.',
    footerQuickLinks: 'Quick Links',
    footerConnect: 'Connect',
    footerRights: 'All rights reserved.',
    
    // Project translations (will be handled separately)
  },
};

export const getProjects = (lang: Language) => {
  const projects = {
    sk: [
      {
        id: 1,
        title: 'NextLayer Studio',
        description: 'Moderná webstránka pre digitálnu agentúru špecializujúcu sa na tvorbu webov a marketingové riešenia.',
        longDescription: 'NextLayer Studio je moderná digitálna agentúra, ktorá vytvára unikátne webové stránky na mieru. Projekt zahŕňa responzívny dizajn, intuitívnu navigáciu a prezentáciu služieb firmy. Webstránka efektívne komunikuje hodnoty spoločnosti a poskytuje jednoduchý kontaktný formulár pre potenciálnych klientov.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        imageUrl: '/NextLayerStudio.JPG',
        githubUrl: '',
        liveUrl: 'https://www.nextlayer.studio/',
      },
      {
        id: 2,
        title: 'Karin Art',
        description: 'Moderný, elegantný web pre tetovací salón v Bratislave s dôrazom na prezentáciu portfólia umeleckých diel a jednoduchú komunikáciu s klientmi.',
        longDescription: 'Karin Art je moderná webstránka pre tetovací salón v Bratislave, ktorá elegantne prezentuje umelecké diela a portfólio majiteľky. Webstránka poskytuje intuitívne rozhranie pre prezeranie tetovacích diel, rezerváciu termínov a jednoduchý kontakt. Dizajn zdôrazňuje umeleckú kvalitu a profesionálny prístup k tetovaniu, pričom zachováva jednoduchú navigáciu a responzívny dizajn pre všetky zariadenia.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        imageUrl: '/Karin Art.JPG',
        githubUrl: '',
        liveUrl: 'https://www.karinart.sk/',
      },
      {
        id: 3,
        title: 'Permanent Beauty Institute',
        description: 'Permanent Beauty Institute od Sisi Kovácsovej ponúka špičkový permanentný make-up, precízne kozmetické služby a vzdelávacie kurzy pre profesionálky.',
        longDescription: 'Permanent Beauty Institute je profesionálna webstránka pre beauty salón Sisi Kovácsovej špecializujúci sa na permanentný make-up a kozmetické služby. Webstránka elegantne prezentuje služby, galériu prác a vzdelávacie kurzy. Poskytuje jednoduchú navigáciu, responzívny dizajn a intuitívny systém objednávok, čo umožňuje klientkám jednoducho si rezervovať termíny a prezeráť portfólio kvalitných zákrokov.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        imageUrl: '/Sisi.JPG',
        githubUrl: '',
        liveUrl: 'https://www.sisikovacsova.com/',
      },
      {
        id: 4,
        title: 'Dashboard',
        description: 'Interaktívny obchodný dashboard s prehľadnými metrikami, automatickými reportmi a možnosťou prispôsobenia pre rôzne tímy.',
        longDescription: 'Cloud Storage & Project Management Dashboard je komplexné riešenie pre efektívne riadenie projektov a tímov. Dashboard poskytuje nástroje na správu projektov, cloudové úložisko, tímovú spoluprácu a správu úloh. Obsahuje Kanban boards, sledovanie úloh, zabezpečený prístup s rolovými oprávneniami a real-time kolaboračné nástroje. Postavený na modernej technológii pre rýchly výkon a spoľahlivú dostupnosť.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        imageUrl: '/DashBoard.JPG',
        githubUrl: '',
        liveUrl: 'https://nextlayerstudio-dashboard.vercel.app/',
      },
      {
        id: 5,
        title: 'NextLayer Studio Marketing',
        description: 'Digitálna marketingová agentúra NextLayer Studio.',
        longDescription: 'Digitálna marketingová agentúra NextLayer Studio s dátovo riadenými kampaňami, SEO stratégiami a nepretržitou optimalizáciou výkonu.',
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
        imageUrl: '/NextLayerMarketing.JPG',
        githubUrl: '',
        liveUrl: 'https://www.nextlayerstudio.mark',
      },
      {
        id: 6,
        title: 'Aplikácia pre správu úloh',
        description: 'Kolaboratívna aplikácia pre správu úloh s aktualizáciami v reálnom čase.',
        longDescription: 'Funkčná aplikácia pre správu úloh, ktorá umožňuje tímom efektívne spolupracovať. Obsahuje funkciu drag-and-drop, aktualizácie v reálnom čase pomocou WebSockets, tímové pracovné priestory, priradenie úloh a sledovanie pokroku. UI je intuitívne a navrhnuté pre produktivitu.',
        technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL', 'Tailwind CSS'],
        imageUrl: '/project2.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
      {
        id: 7,
        title: 'Počasie Dashboard',
        description: 'Krásny weather dashboard s predpoveďami na základe polohy a interaktívnymi mapami.',
        longDescription: 'Elegantný weather dashboard, ktorý poskytuje detailné informácie o počasí pre akúkoľvek polohu. Funkcie zahŕňajú 7-dňovú predpoveď, hodinové aktualizácie počasia, interaktívne mapy, upozornenia na počasie a krásne vizualizácie údajov. Aplikácia používa moderné API a poskytuje plynulý používateľský zážitok.',
        technologies: ['React', 'TypeScript', 'Chart.js', 'Weather API', 'Tailwind CSS'],
        imageUrl: '/project3.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
      {
        id: 8,
        title: 'Analytika sociálnych médií',
        description: 'Analytická platforma na sledovanie výkonnosti sociálnych médií a metrík zapojenia.',
        longDescription: 'Výkonná analytická platforma, ktorá pomáha firmám sledovať ich výkonnosť na sociálnych médiách naprieč viacerými platformami. Poskytuje detailné prehľady, metriky zapojenia, demografiku publika, analýzu výkonnosti obsahu a prispôsobiteľné správy. Dashboard je navrhnutý pre rozhodovanie založené na údajoch.',
        technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'Redis', 'Tailwind CSS'],
        imageUrl: '/project4.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
      {
        id: 9,
        title: 'Portfólio webstránka',
        description: 'Moderná, responzívna portfólio webstránka predstavujúca projekty a zručnosti.',
        longDescription: 'Táto portfólio webstránka! Postavená na Reacte, TypeScripte a Tailwind CSS, má moderný dizajn, plynulé animácie a responzívne rozloženie, ktoré perfektne funguje na všetkých zariadeniach. Showcase projektov obsahuje interaktívne popup karty s detailnými informáciami o projektoch.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        imageUrl: '/project5.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
      {
        id: 10,
        title: 'Finančný tracker',
        description: 'Aplikácia na sledovanie osobných financií s plánovaním rozpočtu a analýzou výdavkov.',
        longDescription: 'Komplexný tracker osobných financií, ktorý pomáha používateľom efektívne spravovať svoje peniaze. Funkcie zahŕňajú sledovanie výdavkov, vytváranie a monitorovanie rozpočtu, nastavenie finančných cieľov, kategorizáciu transakcií a detailnú analýzu s grafmi a diagramami. Aplikácia poskytuje prehľady o výdavkových vzorcoch a pomáha používateľom dosiahnuť ich finančné ciele.',
        technologies: ['React', 'TypeScript', 'Firebase', 'Chart.js', 'Tailwind CSS'],
        imageUrl: '/project6.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
    ],
    en: [
      {
        id: 1,
        title: 'NextLayer Studio',
        description: 'Modern website for a digital agency specializing in web development and marketing solutions.',
        longDescription: 'NextLayer Studio is a modern digital agency that creates unique custom websites. The project includes responsive design, intuitive navigation, and effective presentation of company services. The website efficiently communicates the company values and provides a simple contact form for potential clients.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        imageUrl: '/NextLayerStudio.JPG',
        githubUrl: '',
        liveUrl: 'https://www.nextlayer.studio/',
      },
      {
        id: 2,
        title: 'Karin Art',
        description: 'Modern, elegant website for a tattoo studio in Bratislava with emphasis on portfolio presentation of artistic works and simple client communication.',
        longDescription: 'Karin Art is a modern website for a tattoo studio in Bratislava that elegantly presents artistic works and the owner\'s portfolio. The website provides an intuitive interface for browsing tattoo artworks, booking appointments, and simple contact. The design emphasizes artistic quality and a professional approach to tattooing, while maintaining simple navigation and responsive design for all devices.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        imageUrl: '/Karin Art.JPG',
        githubUrl: '',
        liveUrl: 'https://www.karinart.sk/',
      },
      {
        id: 3,
        title: 'Permanent Beauty Institute',
        description: 'Permanent Beauty Institute by Sisi Kovácsová offers premium permanent makeup, precise cosmetic services, and educational courses for professionals.',
        longDescription: 'Permanent Beauty Institute is a professional website for Sisi Kovácsová\'s beauty salon specializing in permanent makeup and cosmetic services. The website elegantly presents services, portfolio gallery, and educational courses. It provides simple navigation, responsive design, and an intuitive booking system, allowing clients to easily book appointments and browse the portfolio of quality treatments.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        imageUrl: '/Sisi.JPG',
        githubUrl: '',
        liveUrl: 'https://www.sisikovacsova.com/',
      },
      {
        id: 4,
        title: 'Dashboard',
        description: 'Interactive business dashboard with clear metrics, automated reports, and customization options for different teams.',
        longDescription: 'Cloud Storage & Project Management Dashboard is a comprehensive solution for effective project and team management. The dashboard provides tools for project management, cloud storage, team collaboration, and task management. It includes Kanban boards, task tracking, secure access with role-based permissions, and real-time collaboration tools. Built with modern technology for fast performance and reliable uptime.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        imageUrl: '/DashBoard.JPG',
        githubUrl: '',
        liveUrl: 'https://nextlayerstudio-dashboard.vercel.app/',
      },
      {
        id: 5,
        title: 'NextLayer Studio Marketing',
        description: 'Digital marketing agency NextLayer Studio',
        longDescription: 'Digital marketing agency NextLayer Studio with data-driven campaigns, SEO strategies and continuous performance optimization.',
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
        imageUrl: '/NextLayerMarketing.JPG',
        githubUrl: '',
        liveUrl: 'https://www.nextlayerstudio.mark',
      },
      {
        id: 6,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates.',
        longDescription: 'A feature-rich task management application that enables teams to collaborate effectively. It includes drag-and-drop functionality, real-time updates using WebSockets, team workspaces, task assignments, and progress tracking. The UI is intuitive and designed for productivity.',
        technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL', 'Tailwind CSS'],
        imageUrl: '/project2.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
      {
        id: 7,
        title: 'Weather Dashboard',
        description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
        longDescription: 'An elegant weather dashboard that provides detailed weather information for any location. Features include 7-day forecasts, hourly weather updates, interactive maps, weather alerts, and beautiful data visualizations. The app uses modern APIs and provides a smooth user experience.',
        technologies: ['React', 'TypeScript', 'Chart.js', 'Weather API', 'Tailwind CSS'],
        imageUrl: '/project3.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
      {
        id: 8,
        title: 'Social Media Analytics',
        description: 'Analytics platform for tracking social media performance and engagement metrics.',
        longDescription: 'A powerful analytics platform that helps businesses track their social media performance across multiple platforms. It provides detailed insights, engagement metrics, audience demographics, content performance analysis, and customizable reports. The dashboard is designed for data-driven decision making.',
        technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'Redis', 'Tailwind CSS'],
        imageUrl: '/project4.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
      {
        id: 9,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website showcasing projects and skills.',
        longDescription: 'This very portfolio website! Built with React, TypeScript, and Tailwind CSS, it features a modern design, smooth animations, and a responsive layout that works perfectly on all devices. The project showcase includes interactive popup cards for detailed project information.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        imageUrl: '/project5.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
      {
        id: 10,
        title: 'Finance Tracker',
        description: 'Personal finance tracking application with budget planning and expense analytics.',
        longDescription: 'A comprehensive personal finance tracker that helps users manage their money effectively. Features include expense tracking, budget creation and monitoring, financial goal setting, transaction categorization, and detailed analytics with charts and graphs. The app provides insights into spending patterns and helps users achieve their financial goals.',
        technologies: ['React', 'TypeScript', 'Firebase', 'Chart.js', 'Tailwind CSS'],
        imageUrl: '/project6.jpg',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
    ],
  };
  return projects[lang];
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('sk'); // Slovak as default

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
