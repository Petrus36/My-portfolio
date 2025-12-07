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
    portfolioTitle: "Peter Šefčík Portfolio",
    
    // Hero
    heroTitle: 'Ahoj, ja som Peter',
    heroSubtitle: 'Nadšený vývojár tvoríaci krásne a funkčné webové zážitky',
    heroViewWork: 'Pozri moju prácu',
    heroGetInTouch: 'Kontaktuj ma',
    
    // About
    aboutTitle: 'O mne',
    aboutText1: 'Som oddaný vývojár s vášňou pre vytváranie moderných, responzívnych webových aplikácií. Milujem premena zložitých problémov na jednoduché, krásne a intuitívne riešenia.',
    aboutText2: 'Keď nepíšem kód, rád sa zoznamujem s najnovšími webovými technológiami a prispievam do open-source projektov. Verím v písanie čistého, udržateľného kódu a vždy sa snažím učiť a rásť.',
    aboutSkills: 'Zručnosti a technológie',
    skillsFrontend: 'Frontend Development',
    skillsBackend: 'Backend Development',
    skillsDesign: 'Design',
    skillsOS: 'Operating Systems',
    
    // Projects
    projectsTitle: 'Moje projekty',
    projectsSubtitle: 'Tu sú niektoré z mojich recentných projektov. Kliknite na ľubovoľnú kartu, aby ste sa dozvedeli viac.',
    projectViewDetails: 'Zobraziť detaily →',
    projectTechnologiesUsed: 'Použité technológie',
    projectViewLive: 'Zobraziť naživo',
    projectViewCode: 'Zobraziť kód',
    projectInProgress: 'V príprave',
    
    // Print Materials
    printMaterialsTitle: 'Tlačoviny',
    printMaterialsSubtitle: 'Grafické návrhy vizitiek, logotypov a tlačovín. Kliknite na obrázok pre zobrazenie v plnej veľkosti.',
    
    // Contact
    contactTitle: 'Kontaktujte ma',
    contactSubtitle: 'Vždy som otvorený diskusii o nových projektoch, kreatívnych nápadoch alebo príležítostiach byť súčasťou vašich vízií.',
    contactEmail: 'Email',
    contactPhone: 'Telefón',
    
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
    portfolioTitle: "Peter Šefčík Portfolio",
    
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
    skillsFrontend: 'Frontend Development',
    skillsBackend: 'Backend Development',
    skillsDesign: 'Design',
    skillsOS: 'Operating Systems',
    
    // Projects
    projectsTitle: 'My Projects',
    projectsSubtitle: 'Here are some of my recent projects. Click on any card to learn more.',
    projectViewDetails: 'View Details →',
    projectTechnologiesUsed: 'Technologies Used',
    projectViewLive: 'View Live',
    projectViewCode: 'View Code',
    projectInProgress: 'In Progress',
    
    // Print Materials
    printMaterialsTitle: 'Print Materials',
    printMaterialsSubtitle: 'Graphic designs for business cards, logos, and print materials. Click on an image to view it in full size.',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    contactEmail: 'Email',
    contactPhone: 'Phone',
    
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
        id: 11,
        title: 'Michal Kurka',
        description: 'Moderná webstránka pre finančného poradcu s profesionálnym dizajnom, intuitívnym používateľským rozhraním a efektívnou prezentáciou služieb.',
        longDescription: 'Profesionálna webstránka pre finančného poradcu Michala Kurku poskytujúcu komplexné finančné služby. Moderný, responzívny dizajn s dôrazom na dôveru a profesionalitu. Webstránka efektívne prezentuje služby investovania, hypoték, poistení a dôchodkových produktov, pričom poskytuje jednoduchý kontaktný formulár a jasnú navigáciu pre klientov.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        imageUrl: '/Michal Kurka.JPG',
        githubUrl: '',
        liveUrl: 'https://financny-poradca.vercel.app/domov',
        inProgress: true,
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
        id: 11,
        title: 'Michal Kurka',
        description: 'Modern website for a financial advisor with professional design, intuitive user interface, and effective service presentation.',
        longDescription: 'Professional website for financial advisor Michal Kurka providing comprehensive financial services. Modern, responsive design emphasizing trust and professionalism. The website effectively presents investment, mortgage, insurance, and pension products, while providing a simple contact form and clear navigation for clients.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        imageUrl: '/Michal Kurka.JPG',
        githubUrl: '',
        liveUrl: 'https://financny-poradca.vercel.app/domov',
        inProgress: true,
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
