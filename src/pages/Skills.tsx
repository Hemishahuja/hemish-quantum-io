import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, FlaskConical, Presentation, Trophy } from "lucide-react";
import SkillProficiency from "@/components/SkillProficiency";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Tools",
      skills: [
        { name: "Python", level: 95, years: "3+ years" },
        { name: "Qiskit", level: 90, years: "2+ years" },
        { name: "Git", level: 85, years: "3+ years" },
        { name: "LaTeX", level: 90, years: "3+ years" },
        { name: "Java", level: 75, years: "2+ years" },
        { name: "Bash", level: 80, years: "2+ years" },
      ]
    },
    {
      category: "Scientific Computing",
      skills: [
        { name: "Quantum Simulation", level: 95, years: "2+ years" },
        { name: "Numerical Methods", level: 90, years: "3+ years" },
        { name: "Data Analysis", level: 85, years: "3+ years" },
        { name: "Cryogenic Systems", level: 80, years: "1+ year" },
        { name: "Optics", level: 75, years: "2+ years" },
      ]
    },
    {
      category: "Communication",
      skills: [
        { name: "Scientific Writing", level: 90, years: "3+ years" },
        { name: "Public Speaking", level: 85, years: "2+ years" },
        { name: "Research Presentation", level: 90, years: "2+ years" },
        { name: "Technical Documentation", level: 85, years: "3+ years" },
      ]
    }
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <SkillProficiency
                  key={index}
                  category={category.category}
                  skills={category.skills}
                />
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
