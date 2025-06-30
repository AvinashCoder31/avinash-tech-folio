
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Backend",
      skills: ["Python", "Java", "C/C++", "Flask", "Django", "FastAPI", "Node JS", "Express JS","Spring Boot", "Hibernate"]
    },
    {
      title: "AI & ML Tools",
      skills: ["Hugging Face", "Transformers", "LangChain", "RAG Workflows", "Prompt Engineering", "Chatbot Logic", "API Scripting"]
    },
    {
      title: "Web & Frontend",
      skills: ["React", "Angular", "HTML", "CSS", "Vite", "REST APIs", "Responsive Design"]
    },
    {
      title: "Databases & Cloud",
      skills: ["MongoDB", "MySQL", "Supabase", "Firebase", "Google Cloud", "Google Colab"]
    },
    {
      title: "Automation & Dev Tools",
      skills: ["Git", "Postman", "RapidAPI", "VS Code", "n8n", "Flowise"]
    },
    {
      title: "Cybersecurity",
      skills: ["Splunk SOC", "Pentesting", "TryHackMe", "OWASP Top 10", "OSINT", "Linux", "John", "Hydra", "Shodan"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-card border border-primary/20 rounded-lg p-6 inline-block">
            <h3 className="text-lg font-bold text-primary mb-2">Currently Learning</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Agentic AI Systems", "Advanced LangChain", "n8n Automation", "Flowise"].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30 animate-pulse">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
