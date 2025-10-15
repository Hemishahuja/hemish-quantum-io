import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Github, ExternalLink, Code, Lightbulb, Target, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Quantum Error Mitigation Toolkit",
      description: "Developed Python-based error mitigation scripts using Qiskit to improve circuit fidelity on IBM Q systems.",
      tags: ["Python", "Qiskit", "IBM Q", "Quantum Computing"],
      github: "https://github.com/hemishahuja",
      impact: "Increased gate fidelity by 10%",
      challenge: "Quantum hardware noise severely limited computation accuracy, making error-prone results unusable for practical applications.",
      solution: "Implemented zero-noise extrapolation and probabilistic error cancellation techniques, combined with custom readout error mitigation algorithms.",
      mermaid: `graph LR
    A[Noisy Circuit] --> B[Error Detection]
    B --> C[Zero-Noise Extrapolation]
    B --> D[Probabilistic Cancellation]
    C --> E[Mitigated Results]
    D --> E
    E --> F[10% Fidelity Improvement]`
    },
    {
      title: "Black Hole Shadow Simulation",
      description: "Built Python simulation framework modeling photon trajectories around black holes with quantum gravity corrections.",
      tags: ["Python", "NumPy", "Physics Simulation", "Quantum Gravity"],
      github: "https://github.com/hemishahuja",
      impact: "Improved model accuracy by 20%",
      challenge: "Classical general relativity models couldn't capture quantum gravity effects at Planck scales, leading to imprecise black hole shadow predictions.",
      solution: "Integrated loop quantum gravity corrections into geodesic equations using modified Hamiltonian formulation and adaptive Runge-Kutta integration.",
      mermaid: `graph TB
    A[Initial Photon Position] --> B[Compute Geodesic]
    B --> C[Apply QG Corrections]
    C --> D[Runge-Kutta Integration]
    D --> E{Escaped?}
    E -->|Yes| F[Record Shadow Boundary]
    E -->|No| G[Update Position]
    G --> B`
    },
    {
      title: "Cryogenic System Automation",
      description: "Designed Python control scripts for cryogenic detection systems used in BaF molecule experiments.",
      tags: ["Python", "Automation", "Hardware Control", "Cryogenics"],
      github: "https://github.com/hemishahuja",
      impact: "Enhanced detection precision and state stability",
      challenge: "Manual cryogenic system control introduced human error and timing inconsistencies, degrading measurement precision in eEDM experiments.",
      solution: "Developed automated PID control loops with real-time data acquisition and adaptive feedback mechanisms for temperature stabilization.",
      mermaid: `graph LR
    A[Temperature Sensors] --> B[PID Controller]
    B --> C[Cryogenic Cooler]
    C --> D[BaF Molecule State]
    D --> E[Precision Measurement]
    E --> F[Feedback Loop]
    F --> B`
    },
    {
      title: "Quantum Phase Classification",
      description: "Built a Classiq-based quantum machine learning model for phase classification. Won 1st Prize in FLIQ Hackathon global competition.",
      tags: ["Quantum ML", "Classiq", "Competition Winner"],
      github: "https://github.com/hemishahuja",
      impact: "🏆 1st Prize FLIQ Hackathon",
      challenge: "Classical machine learning struggles with high-dimensional quantum phase spaces, requiring exponential computational resources.",
      solution: "Leveraged quantum feature maps and variational quantum classifiers to encode phase information efficiently in quantum states.",
      mermaid: `graph LR
    A[Phase Data] --> B[Quantum Feature Map]
    B --> C[Variational Circuit]
    C --> D[Measurement]
    D --> E[Classical Optimization]
    E --> C
    D --> F[Phase Classification]`
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
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

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm bg-accent/10 p-3 rounded-md border border-accent/20">
                      <Target className="h-4 w-4 text-accent flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-accent">Impact:</span>
                        <span className="text-foreground ml-2">{project.impact}</span>
                      </div>
                    </div>

                    {project.challenge && (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="technical-dive">
                          <AccordionTrigger className="text-sm font-semibold hover:text-primary">
                            <div className="flex items-center gap-2">
                              <Code className="h-4 w-4" />
                              Technical Deep Dive
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 pt-2">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-semibold text-destructive">
                                  <Lightbulb className="h-4 w-4" />
                                  Challenge
                                </div>
                                <p className="text-sm text-muted-foreground pl-6">{project.challenge}</p>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                                  <Target className="h-4 w-4" />
                                  Solution
                                </div>
                                <p className="text-sm text-muted-foreground pl-6">{project.solution}</p>
                              </div>
                              {project.mermaid && (
                                <div className="bg-muted/50 p-4 rounded-md">
                                  <p className="text-xs text-muted-foreground mb-2 font-semibold">Architecture Flow:</p>
                                  <pre className="text-xs overflow-x-auto">
                                    <code>{project.mermaid}</code>
                                  </pre>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )}

                    <div className="flex gap-3 pt-2">
                      <Button variant="default" size="sm" className="gap-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href="/research">
                          <ExternalLink className="h-4 w-4" />
                          Learn More
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
