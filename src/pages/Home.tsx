import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown, Sun, X } from "lucide-react";
import heroImage from "@/assets/hero-quantum-animated.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const [showThemeHint, setShowThemeHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThemeHint(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Theme Toggle Hint Popup */}
      {showThemeHint && (
        <div className="fixed top-20 right-6 z-50 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-3 animate-fade-in">
          <button
            onClick={() => setShowThemeHint(false)}
            className="absolute -top-2 -right-2 bg-background border border-border rounded-full p-1 hover:bg-accent transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-2 text-sm">
            <Sun className="h-4 w-4 text-primary" />
            <span className="text-foreground">Toggle light mode in top-right corner</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay and Wave Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 animate-wave-layer-1">
            <img
              src={heroImage}
              alt="Quantum computing visualization"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 animate-wave-layer-2 opacity-60">
            <img
              src={heroImage}
              alt="Quantum computing visualization"
              className="w-full h-full object-cover"
            />
          </div>
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
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileDown className="h-5 w-5" />
                  View Resume
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

      {/* Currently Working On Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Currently Working On
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in border border-border">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Active Research</h3>
                <p className="text-muted-foreground">
                  Advancing cryogenic detection systems for eEDM measurement at York's EDM³ Lab, focusing on BaF molecular spin coherence.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in border border-border" style={{animationDelay: "0.1s"}}>
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Upcoming Presentations</h3>
                <p className="text-muted-foreground">
                  Preparing talks for CAP Congress 2025 and organizing national physics education initiatives as SAC Chair.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in border border-border" style={{animationDelay: "0.2s"}}>
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Learning & Exploring</h3>
                <p className="text-muted-foreground">
                  Deepening expertise in quantum machine learning, topological quantum computing, and advanced numerical methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
