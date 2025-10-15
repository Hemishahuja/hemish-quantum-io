import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Trophy } from "lucide-react";

const Leadership = () => {
  const roles = [
    {
      organization: "Canadian Association of Physicists",
      position: "Student Advisory Council Chair",
      icon: Users,
      description:
        "Leading 10,000+ students nationwide; launched education and EDI initiatives; built international partnerships.",
      highlights: ["10,000+ students", "National scope", "International partnerships"],
    },
    {
      organization: "Physics Society at York University",
      position: "President",
      icon: Award,
      description:
        "Overseeing events and outreach for 100+ members, fostering collaboration across physics and computing.",
      highlights: ["100+ members", "Cross-disciplinary collaboration", "Event leadership"],
    },
    {
      organization: "Hackathon & Outreach",
      position: "Organizer & Mentor",
      icon: Trophy,
      description:
        "1st Prize in Qsite Canada and FLIQ competitions. Organizer for national student panels and mentoring programs.",
      highlights: ["Competition winner", "Mentorship programs", "National panels"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full">
                <Users className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Leadership & Community</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building communities and fostering the next generation of scientists
            </p>
          </div>

          <div className="space-y-8">
            {roles.map((role, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-accent/10 p-4 rounded-xl h-fit">
                    <role.icon className="h-10 w-10 text-accent" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{role.organization}</h3>
                      <p className="text-lg text-accent font-medium">{role.position}</p>
                    </div>

                    <p className="text-foreground leading-relaxed">{role.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {role.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <div className="text-center space-y-4">
              <Trophy className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-2xl font-bold text-primary">Competition Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4">
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold text-accent">🏆 1st Prize</p>
                  <p className="text-sm text-muted-foreground">Qsite Canada Hackathon</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold text-accent">🏆 1st Prize</p>
                  <p className="text-sm text-muted-foreground">FLIQ Quantum Challenge</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
