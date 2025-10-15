import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const Affiliations = () => {
  const affiliations = [
    {
      name: "York University",
      role: "Student & Researcher",
      logo: "🎓"
    },
    {
      name: "Goethe University",
      role: "GREP Fellow",
      logo: "🇩🇪"
    },
    {
      name: "University of Alberta",
      role: "Research Collaborator",
      logo: "🔬"
    },
    {
      name: "Canadian Association of Physicists",
      role: "SAC Chair",
      logo: "🍁"
    },
    {
      name: "IBM Quantum",
      role: "Research Platform",
      logo: "⚛️"
    }
  ];

  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold mb-8 text-center text-foreground flex items-center justify-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          Institutional Affiliations
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {affiliations.map((affiliation, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-card/50 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-3 grayscale hover:grayscale-0 transition-all duration-300">
                {affiliation.logo}
              </div>
              <h4 className="font-semibold text-sm text-foreground mb-1">
                {affiliation.name}
              </h4>
              <p className="text-xs text-muted-foreground">{affiliation.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
