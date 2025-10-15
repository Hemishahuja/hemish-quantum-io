import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Hemish demonstrates exceptional aptitude in bridging theoretical physics with practical computational implementation. His work on quantum error mitigation shows both technical depth and innovative problem-solving.",
      name: "Dr. [Supervisor Name]",
      title: "Principal Investigator",
      institution: "York University"
    },
    {
      quote: "During his time at Goethe University, Hemish's ability to quickly master complex quantum gravity simulations and improve model accuracy was remarkable. He brings both rigor and creativity to his research.",
      name: "Prof. [Supervisor Name]",
      title: "GREP Fellowship Supervisor",
      institution: "Goethe University, Germany"
    },
    {
      quote: "As Chair of the CAP Student Advisory Council, Hemish has shown outstanding leadership in fostering collaboration across Canadian physics students. His dedication to education and inclusivity is exemplary.",
      name: "Dr. [Reference Name]",
      title: "Canadian Association of Physicists",
      institution: "CAP National Office"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
        <Quote className="h-8 w-8 text-primary" />
        What Others Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300 animate-fade-in bg-card/50 backdrop-blur-sm"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                <p className="text-sm text-primary font-medium">{testimonial.institution}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-sm text-muted-foreground italic mt-6 text-center">
        * Testimonials available upon request from supervisors
      </p>
    </section>
  );
};

export default Testimonials;
