import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import PrintMaterials from './components/PrintMaterials';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <PrintMaterials />
        <Contact />
      </Layout>
    </LanguageProvider>
  );
}

export default App;
