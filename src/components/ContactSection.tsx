
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:avinashraja31032006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast.success('Opening email client...');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const Telegram = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.64 6.8-1.6 7.56c-.12.54-.44.67-.89.42l-2.46-1.82-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.47 4.44-3.99c.19-.17-.04-.26-.3-.1L8.9 13.48l-2.42-.75c-.53-.17-.54-.53.11-.78l9.42-3.63c.44-.17.83.1.69.78z"/>
    </svg>
  );

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="p-8 bg-card border-border h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">📧 Email</h4>
                  <p className="text-muted-foreground">avinashraja31032006@gmail.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">📱 Phone</h4>
                  <p className="text-muted-foreground">+91-93857 03020</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">📍 Location</h4>
                  <p className="text-muted-foreground">Puducherry, India</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🗓️ Availability</h4>
                  <p className="text-muted-foreground">
                    Available for 4-week onsite internship<br />
                    <span className="text-primary font-medium">June 30 – July 30, 2025</span>
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://github.com/AvinashCoder31" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/avinash312006/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg transition-colors"
                >
                  <Telegram size={20} />
                </a>
              </div>
            </Card>
          </div>
          
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
