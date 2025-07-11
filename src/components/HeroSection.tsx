
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-blue-600/10"></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <div className="animate-float mb-6 md:mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-blue-400 p-1 animate-glow">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/54822620-c326-4787-8808-6507b239a467.png" 
                alt="Avinash R - Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 px-2">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Avinash R</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6 px-2">
          AI & Full-Stack Developer
        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
          B.Tech IT student specializing in Python-based AI, automation, and cybersecurity. 
          Building the future with code, one project at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6 md:mb-8">
          <a 
            href="https://github.com/AvinashCoder31" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <Github size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/avinash312006/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <Telegram size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={20} className="sm:w-6 sm:h-6" />
      </button>
    </section>
  );
};

const Telegram = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.64 6.8-1.6 7.56c-.12.54-.44.67-.89.42l-2.46-1.82-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.47 4.44-3.99c.19-.17-.04-.26-.3-.1L8.9 13.48l-2.42-.75c-.53-.17-.54-.53.11-.78l9.42-3.63c.44-.17.83.1.69.78z"/>
  </svg>
);

export default HeroSection;
