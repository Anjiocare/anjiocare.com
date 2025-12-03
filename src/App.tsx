import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import EquipmentPage from './components/EquipmentPage';
import ContactPage from './components/ContactPage';
import AppointmentPage from './components/AppointmentPage';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <EquipmentPage />
      <ContactPage />
      <AppointmentPage />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
