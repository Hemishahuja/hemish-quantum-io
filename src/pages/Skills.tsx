import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, FlaskConical, Presentation, Trophy } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Tools",
      icon: Code,
      skills: ["Python", "Java", "Git", "Qiskit", "Bash", "PostgreSQL", "LaTeX", "QMOD"],
    },
    {
      title: "Scientific Techniques",
      icon: FlaskConical,
      skills: ["Quantum Simulation", "Optics", "Cryogenic Systems", "Numerical Methods", "Data Analysis"],
    },
    {
      title: "Communication",
      icon: Presentation,
      skills: ["Scientific Writing", "Public Speaking", "Research Presentation", "Technical Documentation"],
    },
  ];

  const awards = [
    {
      title: "International Presidential Scholarship of Excellence",
      institution: "York University",
      value: "$180,000",
      color: "text-accent",
    },
    {
      title: "York Science Scholars Award",
      institution: "York University",
      value: "$10,000",
      color: "text-accent",
    },
    {
      title: "Qsite Canada Hackathon",
      institution: "National Competition",
      value: "1st Prize",
      color: "text-primary",
    },
    {
      title: "FLIQ Quantum Challenge",
      institution: "Global Competition",
      value: "1st Prize",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full">
                <Code className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Skills & Awards</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and recognition in quantum research
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="bg-accent/10 p-3 rounded-lg w-fit">
                      <category.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8 pt-8">
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Awards & Recognition</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 border-accent"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">{award.institution}</p>
                    <p className={`text-2xl font-bold ${award.color}`}>{award.value}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
