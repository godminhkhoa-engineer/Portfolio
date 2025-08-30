const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-neural-primary/20 bg-neural-dark/50">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Name & Tagline */}
          <div className="mb-8">
            <h3 className="neural-heading text-2xl mb-2">
              Cao Lê Minh Khoa
            </h3>
            <p className="neural-text opacity-80">
              Building the future with AI & DevOps
            </p>
          </div>

          {/* Inspirational Quote */}
          <div className="glass-card p-6 mb-8 max-w-2xl mx-auto">
            <blockquote className="neural-text italic text-lg leading-relaxed">
              "The future belongs to those who understand that artificial intelligence 
              is not about replacing human creativity, but amplifying it."
            </blockquote>
            <div className="w-12 h-0.5 bg-gradient-to-r from-neural-primary to-neural-secondary mx-auto mt-4"></div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#about" className="neural-link hover:scale-105 transition-transform">
              About
            </a>
            <a href="#projects" className="neural-link hover:scale-105 transition-transform">
              Projects
            </a>
            <a href="#contact" className="neural-link hover:scale-105 transition-transform">
              Contact
            </a>
            <a 
              href="https://github.com/khoalearningcode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neural-link hover:scale-105 transition-transform"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/cao-khoa-1b09141b8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neural-link hover:scale-105 transition-transform"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-neural-primary/20 pt-6">
            <p className="neural-text text-sm opacity-70">
              © {currentYear} Cao Lê Minh Khoa. Designed with{' '}
              <span className="text-neural-secondary animate-pulse">✨</span> and{' '}
              <span className="text-neural-primary">passion</span> for technology.
            </p>
            <p className="neural-text text-xs opacity-50 mt-2">
              Built with React, TypeScript, Tailwind CSS & Neural Networks in mind
            </p>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neural-primary to-transparent opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;