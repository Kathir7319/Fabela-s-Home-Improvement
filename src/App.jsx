import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileQuickBar from './components/MobileQuickBar';
import QuoteModal from './components/QuoteModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [initialScope, setInitialScope] = useState(null);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'about', 'gallery', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = () => {
    setInitialScope(null);
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteWithScope = (scopeData) => {
    setInitialScope(scopeData);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F0EC] text-[#202020] font-sans selection:bg-[#292929] selection:text-white pb-16 lg:pb-0">
      
      {/* Sticky Modern Floating Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={handlePageChange} 
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={handlePageChange} 
            onOpenQuote={handleOpenQuote}
            onOpenQuoteWithScope={handleOpenQuoteWithScope}
          />
        )}
        {activePage === 'services' && (
          <ServicesPage 
            onOpenQuote={handleOpenQuote}
            onOpenQuoteWithScope={handleOpenQuoteWithScope}
          />
        )}
        {activePage === 'about' && (
          <AboutPage 
            onOpenQuote={handleOpenQuote}
          />
        )}
        {activePage === 'gallery' && (
          <GalleryPage 
            onOpenQuote={handleOpenQuote}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Blueprint Footer */}
      <Footer 
        setActivePage={handlePageChange} 
        onOpenQuote={handleOpenQuote} 
      />

      {/* Mobile Fixed Call/Text/Quote Bar */}
      <MobileQuickBar 
        onOpenQuote={handleOpenQuote} 
      />

      {/* Free Quote Interactive Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)}
        initialScope={initialScope}
      />

    </div>
  );
}
