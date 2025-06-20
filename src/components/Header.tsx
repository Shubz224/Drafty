
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleArtGalleryClick = () => {
    navigate('/art-gallery');
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'backdrop-blur-xl bg-white/85 border-b border-white/40 shadow-lg shadow-black/10' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="font-space font-semibold text-lg md:text-xl">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105 transform font-inter"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105 transform font-inter"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105 transform font-inter"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105 transform font-inter"
            >
              Education
            </button>
            <button 
              onClick={handleArtGalleryClick}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105 transform font-inter"
            >
              Art Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105 transform font-inter"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/90 border-b border-white/30 shadow-lg animate-fade-in">
            <div className="px-4 md:px-6 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 font-inter"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 font-inter"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 font-inter"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 font-inter"
              >
                Education
              </button>
              <button 
                onClick={handleArtGalleryClick}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 font-inter"
              >
                Art Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 font-inter"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
