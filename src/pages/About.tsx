import { Card } from "@/components/ui/card";
import { Atom, Coffee, Sparkles, Telescope } from "lucide-react";

const About = () => {
  const funFacts = [
    {
      icon: Atom,
      text: "Bridging physics and computation",
    },
    {
      icon: Coffee,
      text: "Late-night coding and LaTeX enthusiast",
    },
    {
      icon: Sparkles,
      text: "Aspiring to advance quantum computing and AI",
    },
    {
      icon: Telescope,
      text: "Explorer of the quantum realm and cosmic mysteries",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Exploring the intersection of quantum physics and computation
            </p>
          </div>

          <Card className="p-8 md:p-12 space-y-6 animate-fade-in shadow-lg">
            <p className="text-lg leading-relaxed text-foreground">
              I'm a third-year Honours Bachelor of Science in Physics student with a Minor in Computer 
              Science at York University. I explore how computational tools can model and simulate physical 
              systems — from quantum hardware to black hole imaging.
            </p>

            <p className="text-lg leading-relaxed text-foreground">
              My research spans quantum error mitigation, black hole simulations, and cryogenic physics. 
              I've worked across institutions in Canada and Germany and presented at international conferences. 
              Through each project, I strive to bridge the gap between theoretical elegance and practical 
              implementation, bringing abstract concepts to life through code.
            </p>

            <p className="text-lg leading-relaxed text-foreground">
              Beyond research, I'm passionate about community building and science communication. As Chair 
              of the Canadian Association of Physicists Student Advisory Council, I work to create opportunities 
              for the next generation of physicists and computer scientists.
            </p>
          </Card>

          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary text-center">Fun Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <Card
                  key={index}
                  className="p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <fact.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-foreground flex-1 pt-1">{fact.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
