import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope } from "lucide-react";

const Research = () => {
  const experiences = [
    {
      institution: "York University",
      role: "EDM³ High-Precision Atomic Physics Lab",
      period: "Sept 2024 – Present",
      description:
        "Designed cryogenic detection systems for eEDM measurement using BaF molecules; improved spin coherence and detection precision.",
      tags: ["Atomic Physics", "Cryogenics", "Python"],
    },
    {
      institution: "Goethe University (Germany)",
      role: "GREP Fellow",
      period: "Jun 2024 – Aug 2024",
      description:
        "Built Python-based simulation frameworks for black hole shadow modeling with quantum gravity corrections. Increased model accuracy by 20%.",
      tags: ["Black Holes", "Python", "Simulation"],
    },
    {
      institution: "University of Alberta",
      role: "Quantum Gravity Group",
      period: "Sept 2023 – May 2024",
      description:
        "Explored loop quantum gravity and string-inspired frameworks. Collaborated with MIT, York, and Goethe University teams.",
      tags: ["Quantum Gravity", "Collaboration", "Theory"],
    },
    {
      institution: "York Science Scholars Award (YSSA)",
      role: "Research Fellow",
      period: "May 2023 – Aug 2023",
      description:
        "Implemented quantum error mitigation on IBM Q using Qiskit. Increased gate fidelity by 10%.",
      tags: ["Quantum Computing", "Qiskit", "Error Mitigation"],
    },
    {
      institution: "Independent Research",
      role: "Research Intern",
      period: "2021",
      description:
        "Co-authored a paper modeling time-dependent behavior of the Hubble Parameter using Python.",
      tags: ["Cosmology", "Python", "Publication"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full">
                <Microscope className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Research Experience</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring quantum systems, black holes, and the fundamental nature of reality
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 border-accent"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{exp.institution}</h3>
                      <p className="text-lg text-accent font-medium">{exp.role}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
