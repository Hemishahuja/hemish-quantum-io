import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full">
                <Mail className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always open to new collaborations, software projects, and research opportunities. 
              Let's connect to push the boundaries of computation and physics.
            </p>
          </div>

          <Card className="p-8 md:p-12 space-y-8 animate-fade-in shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                  <a
                    href="mailto:hemishahuja@gmail.com"
                    className="text-accent hover:underline text-lg"
                  >
                    hemishahuja@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-2">Location</h3>
                  <p className="text-muted-foreground text-lg">Markham / Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold text-primary mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 flex-1 min-w-[200px]" asChild>
                  <a href="https://linkedin.com/in/hemishahuja" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 flex-1 min-w-[200px]" asChild>
                  <a href="https://github.com/hemishahuja" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 animate-fade-in">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl italic text-primary font-medium">
                "Together, let's push the limits of innovation — in code, computation, and the cosmos."
              </p>
            </blockquote>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
