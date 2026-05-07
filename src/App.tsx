import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Leistungen } from './pages/Leistungen';
import { UeberUns } from './pages/UeberUns';
import { Kontakt } from './pages/Kontakt';
import { FAQ } from './pages/FAQ';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-brand-gray text-brand-dark font-sans">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
