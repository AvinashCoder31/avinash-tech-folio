
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
    <section id="skills" className="py-16 md:py-20 bg-muted/20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag text-xs md:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <div className="bg-card border border-primary/20 rounded-lg p-4 md:p-6 inline-block mx-4">
            <h3 className="text-base md:text-lg font-bold text-primary mb-2">Currently Learning</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Agentic AI Systems", "Advanced LangChain", "n8n Automation", "Flowise"].map((skill, index) => (
                <span key={index} className="px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium border border-primary/30 animate-pulse">
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
