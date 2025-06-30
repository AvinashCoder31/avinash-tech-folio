
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "JIGYASA 2025 - National Technical Symposium",
      description: "Contributed to building and managing the official website for a national-level technical symposium, handling content management and user experience optimization.",
      tech: ["React", "Vite", "Node", "Tailwind CSS", "Vercel"],
      liveUrl: "https://jigyasa2025.vercel.app",
      githubUrl: "#",
      status: "Live"
    },
    {
      title: "AI-Powered Mental Health Chatbot",
      description: "Designed and deployed a conversational AI chatbot focused on mental wellness support, implementing natural language processing and empathetic response generation.",
      tech: ["Python", "Hugging Face", "Transformers", "Flask", "AI/ML", "Groq"],
      liveUrl: "#",
      githubUrl: "https://github.com/AvinashCoder31/mental-health-chatbot",
      status: "Completed"
    },
    {
      title: "Photography Club Website",
      description: "Currently developing a modern website for a photography club featuring animated galleries, member showcases, and event management functionality.",
      tech: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-background px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors pr-2">
                  {project.title}
                </h3>
                <span className={`px-2 py-1 text-xs rounded-full whitespace-nowrap ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : project.status === 'In Progress'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4 text-xs md:text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                {project.liveUrl !== "#" && (
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-xs md:text-sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ArrowRight size={14} className="mr-1 md:mr-2" />
                    Live Demo
                  </Button>
                )}
                
                {project.githubUrl !== "#" && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs md:text-sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={14} className="mr-1 md:mr-2" />
                    Code
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mx-4"
            onClick={() => window.open('https://github.com/AvinashCoder31', '_blank')}
          >
            <Github size={16} className="mr-2" />
            <span className="text-sm md:text-base">View All Projects on GitHub</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
