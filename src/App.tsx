import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </LanguageProvider>
  );
}

export default App;
