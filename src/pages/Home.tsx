import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import heroImage from "@/assets/hero-quantum.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Quantum computing visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight">
                Hemish Ahuja
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium">
                Physics & Computer Science | Quantum Researcher & Software Engineer
              </p>
            </div>

            <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Welcome! I'm Hemish Ahuja, a Physics and Computer Science student at York University 
              passionate about the intersection of quantum systems, computation, and software engineering. 
              My journey bridges experimental physics and computational modeling — translating complex 
              theories into elegant, data-driven code.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="/resume.pdf" download>
                  <FileDown className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://github.com/hemishahuja" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://linkedin.com/in/hemishahuja" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/contact">
                  <Mail className="h-5 w-5" />
                  Contact
                </a>
              </Button>
            </div>

            <div className="pt-12">
              <blockquote className="text-xl md:text-2xl italic text-muted-foreground border-l-4 border-accent pl-6 max-w-2xl mx-auto">
                "The most elegant code is like good physics — simple, yet profound."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
