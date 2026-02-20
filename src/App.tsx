import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CraftsmanSection from './components/CraftsmanSection';
import MenuSection from './components/MenuSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  // 簡單的平滑滾動效果
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="font-serif bg-rinka-white text-rinka-black selection:bg-rinka-red selection:text-white overflow-x-hidden">
      <HeroSection />
      <CraftsmanSection />
      <MenuSection />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;
