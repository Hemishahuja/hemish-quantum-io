import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Publications = () => {
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const publications = [
    {
      id: "hubble-2021",
      title: "Modeling Time-Dependent Behavior of the Hubble Parameter",
      authors: "Hemish Ahuja, et al.",
      year: "2021",
      type: "Research Paper",
      venue: "Independent Research",
      description: "Co-authored research paper exploring time-dependent variations in the Hubble Parameter using Python-based computational models.",
      tags: ["Cosmology", "Python", "Data Analysis"],
      bibtex: `@article{ahuja2021hubble,
  title={Modeling Time-Dependent Behavior of the Hubble Parameter},
  author={Ahuja, Hemish and others},
  year={2021},
  journal={Independent Research}
}`
    }
  ];

  const presentations = [
    {
      id: "cap-2024",
      title: "Quantum Error Mitigation on IBM Q Systems",
      event: "Canadian Association of Physicists Congress",
      year: "2024",
      location: "Canada",
      description: "Presented research on improving gate fidelity by 10% using advanced error mitigation techniques.",
      tags: ["Quantum Computing", "Qiskit", "IBM Q"]
    },
    {
      id: "grep-2024",
      title: "Black Hole Shadow Modeling with Quantum Gravity Corrections",
      event: "GREP Fellowship Symposium",
      year: "2024",
      location: "Goethe University, Germany",
      description: "Showcased Python simulation framework improving model accuracy by 20%.",
      tags: ["Black Holes", "Quantum Gravity", "Python"]
    },
    {
      id: "york-2024",
      title: "Cryogenic Detection Systems for eEDM Measurement",
      event: "York University Research Showcase",
      year: "2024",
      location: "Toronto, Canada",
      description: "Demonstrated advancements in spin coherence and detection precision using BaF molecules.",
      tags: ["Atomic Physics", "Cryogenics", "Precision Measurement"]
    }
  ];

  const copyBibtex = (bibtex: string, id: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    toast({
      title: "BibTeX Copied!",
      description: "Citation copied to clipboard",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Publications & Presentations
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Peer-reviewed research and conference presentations showcasing contributions to quantum computing, cosmology, and precision physics.
          </p>

          {/* Publications Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
              <FileText className="h-8 w-8 text-primary" />
              Publications
            </h2>
            <div className="space-y-6">
              {publications.map((pub) => (
                <Card key={pub.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                        <CardDescription className="text-base">
                          {pub.authors} • {pub.year}
                        </CardDescription>
                        <div className="mt-2">
                          <Badge variant="secondary">{pub.type}</Badge>
                          <Badge variant="outline" className="ml-2">{pub.venue}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{pub.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="default" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2"
                        onClick={() => copyBibtex(pub.bibtex, pub.id)}
                      >
                        <Copy className="h-4 w-4" />
                        {copiedId === pub.id ? "Copied!" : "Copy BibTeX"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Presentations Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
              <FileText className="h-8 w-8 text-primary" />
              Conference Presentations
            </h2>
            <div className="space-y-6">
              {presentations.map((pres, index) => (
                <Card key={pres.id} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{pres.title}</CardTitle>
                        <CardDescription className="text-base">
                          {pres.event} • {pres.year}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">{pres.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{pres.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {pres.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Publications;
