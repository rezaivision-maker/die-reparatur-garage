import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Leistungen } from './pages/Leistungen';
import { UeberUns } from './pages/UeberUns';
import { Kontakt } from './pages/Kontakt';
import { FAQ } from './pages/FAQ';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-brand-gray text-brand-dark font-sans">
        {/* DEBUG MARKER - PLEASE REMOVE AFTER VERIFICATION */}
        <div className="bg-red-600 text-white text-[10px] py-1 text-center font-bold z-[9999] relative">
          LIVE-VERSION: V2.5 (RESPONSIVE FIX) - {new Date().toLocaleTimeString()}
        </div>
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
