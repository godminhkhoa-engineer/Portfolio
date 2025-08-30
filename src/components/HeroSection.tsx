import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroPortrait from '@/assets/hero-portrait.jpg';

const HeroSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'AI Engineer',
          'DevOps Enthusiast', 
          'Computer Science Student',
          'Neural Network Explorer',
          'Cloud Computing Advocate'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        {/* Hero Image */}
        <div className="mb-8 animate-float">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-neural-primary/30 to-neural-secondary/30 rounded-full blur-xl animate-pulse-glow"></div>
            <img 
              src={heroPortrait}
              alt="Cao Le Minh Khoa - Holographic Portrait"
              className="relative w-full h-full object-cover rounded-full border-4 border-neural-primary/50 shadow-2xl"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="neural-heading text-5xl md:text-7xl mb-6 animate-glow">
          CAO LÊ MINH KHOA
        </h1>

        {/* Typing Animation */}
        <div className="neural-subheading text-2xl md:text-3xl mb-8 h-12">
          <span ref={typedRef}></span>
        </div>

        {/* Description */}
        <p className="neural-text text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate Computer Science student exploring the frontiers of 
          <span className="gradient-text font-semibold"> Artificial Intelligence</span> and 
          <span className="gradient-text font-semibold"> DevOps Engineering</span>. 
          Building the future, one neural network at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="neural-button animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="neural-button bg-transparent border-2 border-neural-primary text-neural-primary hover:bg-neural-primary hover:text-neural-dark animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neural-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neural-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;