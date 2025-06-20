
import { Github, Linkedin, Code, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <h1 className="font-space font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              Shubham Nikam
            </h1>
            <p className="font-inter text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
             Developer & Traditional Artist
            </p>
          </div>

          {/* Resume Link */}
          <div className="flex justify-center">
            <a
              href="public/Resources/shubhamNikamResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform text-sm md:text-base"
            >
              <Download size={16} className="md:w-5 md:h-5" />
              <span className="font-inter font-medium">Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 md:space-x-6">
            <a
              href="https://github.com/Shubz224"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/shub24/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </a>
            <a
              href="https://www.codechef.com/users/zorogotlost24"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 group"
              aria-label="CodeChef"
            >
              <Code className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
