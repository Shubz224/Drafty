
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20 px-4 md:px-6 bg-gray-50/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-space font-bold text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
            Education
          </h2>
          <p className="font-inter text-gray-600 text-base md:text-lg">
            Academic background and achievements
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-space font-semibold text-lg md:text-xl text-gray-800 mb-2">
                  Bachelor of Engineering - Computer Engineering
                </h3>
                <p className="font-inter text-gray-700 font-medium mb-3">
                  Savitribai Phule Pune University
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-inter text-sm">2021 - 2025</span>
                  </div>
                  <div className="text-sm font-inter">
                    <span className="font-semibold text-green-600">GPA: 7.59/10</span>
                  </div>
                </div>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  Focused on software development, data structures, algorithms, and modern web technologies. 
                  Completed projects in full-stack development and machine learning applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
