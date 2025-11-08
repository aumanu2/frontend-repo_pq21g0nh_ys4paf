import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ActivitiesGallery from './components/ActivitiesGallery';
import SuggestionForm from './components/SuggestionForm';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <ActivitiesGallery />
        </section>
        <CTA />
        <SuggestionForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
