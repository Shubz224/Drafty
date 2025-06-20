
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'nikamshubham224@gmail.com',
      icon: Mail,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Shubz224',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shub24/',
      icon: Linkedin,
    },
  ];

  return (
    <footer id="contact" className="py-20 px-6 bg-gray-50/50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="font-space font-bold text-3xl md:text-4xl mb-6">
            Let's Connect
          </h2>
          <p className="font-inter text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Always open to discussing new opportunities, creative projects, 
            or just having a chat about design and technology.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
              </a>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="font-inter text-gray-500 text-sm">
              © 2025 Shubham Nikam  
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
