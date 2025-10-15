import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import Affiliations from "./Affiliations";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <Affiliations />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Hemish Ahuja</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Quantum Researcher & Software Engineer pushing the boundaries of computation and physics.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/research" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Research
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/hemishahuja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/hemishahuja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hemishahuja@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground italic mb-2">
            "Together, let's push the limits of innovation — in code, computation, and the cosmos."
          </p>
          <p className="text-xs text-muted-foreground">
            © {year} Hemish Ahuja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
