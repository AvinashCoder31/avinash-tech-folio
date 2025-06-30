
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Background</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a curious and driven B.Tech IT student at Puducherry Technological University, 
              currently in my 4th semester. My passion lies in the intersection of AI, automation, 
              and full-stack development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in Python-based AI tools, modern web frameworks, and 
              cybersecurity practices, I'm always eager to learn and build innovative solutions 
              that make a real impact.
            </p>
          </Card>
          
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Current Focus</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">🤖 AI & Automation</h4>
                <p className="text-muted-foreground text-sm">
                  Exploring LangChain, n8n workflows, and agentic AI systems
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">🛡️ Cybersecurity</h4>
                <p className="text-muted-foreground text-sm">
                  SOC operations with Splunk, penetration testing, and OSINT
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">💼 Internship Ready</h4>
                <p className="text-muted-foreground text-sm">
                  Seeking 4-week onsite opportunity (June 30 – July 30, 2025)
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-primary/10 border-primary/20">
            <p className="text-lg font-medium text-primary">
              📍 Based in Puducherry, India
            </p>
            <p className="text-muted-foreground mt-2">
              Open to onsite opportunities and remote collaborations
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
