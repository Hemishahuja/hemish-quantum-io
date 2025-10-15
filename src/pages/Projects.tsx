import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Quantum Error Mitigation Toolkit",
      description:
        "Python + Qiskit scripts improving IBM Q circuit fidelity by 10%. Implements advanced error mitigation techniques for near-term quantum computers.",
      tags: ["Python", "Qiskit", "Quantum Computing"],
      github: "https://github.com/hemishahuja",
      impact: "10% improvement in gate fidelity",
    },
    {
      title: "Black Hole Shadow Simulation",
      description:
        "Python simulation modeling quantum gravity corrections to black hole shadows. Increased model precision by 20% through advanced numerical methods.",
      tags: ["Python", "Numerical Methods", "Astrophysics"],
      github: "https://github.com/hemishahuja",
      impact: "20% increase in model accuracy",
    },
    {
      title: "Cryogenic System Automation",
      description:
        "Control and diagnostics scripts for BaF molecule systems. Improved precision and state stability in ultra-low temperature environments.",
      tags: ["Python", "Automation", "Hardware Control"],
      github: "https://github.com/hemishahuja",
      impact: "Enhanced system stability and precision",
    },
    {
      title: "Quantum Phase Classification",
      description:
        "Built a Classiq-based quantum machine learning model for phase classification. Won 1st Prize in FLIQ Hackathon global competition.",
      tags: ["Quantum ML", "Classiq", "Competition Winner"],
      github: "https://github.com/hemishahuja",
      impact: "🏆 1st Prize FLIQ Hackathon",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full">
                <Code2 className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Translating quantum theories into elegant, data-driven code
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                  <p className="text-foreground leading-relaxed">{project.description}</p>

                  <div className="bg-accent/5 p-3 rounded-lg border-l-4 border-accent">
                    <p className="text-sm font-medium text-accent">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Learn More
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
