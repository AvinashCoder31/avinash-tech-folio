
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-background px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <Card className="p-6 md:p-8 bg-card border-border">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">Background</h3>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              I'm a curious and driven B.Tech IT student at Puducherry Technological University, 
              currently in my 4th semester. My passion lies in the intersection of AI, automation, 
              and full-stack development.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              With hands-on experience in Python-based AI tools, modern web frameworks, and 
              cybersecurity practices, I'm always eager to learn and build innovative solutions 
              that make a real impact.
            </p>
          </Card>
          
          <Card className="p-6 md:p-8 bg-card border-border">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">Current Focus</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">🤖 AI & Automation</h4>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Exploring LangChain, n8n workflows, and agentic AI systems
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">🛡️ Cybersecurity</h4>
                <p className="text-muted-foreground text-xs md:text-sm">
                  SOC operations with Splunk, penetration testing, and OSINT
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">💼 Internship Ready</h4>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Seeking 4-week onsite opportunity (June 30 – July 30, 2025)
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Card className="inline-block p-4 md:p-6 bg-primary/10 border-primary/20 mx-4">
            <p className="text-base md:text-lg font-medium text-primary">
              📍 Based in Puducherry, India
            </p>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              Open to onsite opportunities and remote collaborations
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
