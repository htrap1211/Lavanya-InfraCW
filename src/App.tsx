import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ProcessSection from './components/ProcessSection'
import ValuesSection from './components/ValuesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
      <WhatsAppFAB />
    </ErrorBoundary>
  )
}

export default App
