import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface MetricsCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const MetricsCard = ({ icon: Icon, value, suffix = "", label, delay = 0 }: MetricsCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Card 
      ref={ref}
      className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm animate-fade-in"
      style={{animationDelay: `${delay}s`}}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Icon className="h-10 w-10 text-primary mb-4" />
        <div className="text-4xl font-bold text-primary mb-2">
          {inView ? (
            <>
              <CountUp end={value} duration={2} />
              {suffix}
            </>
          ) : (
            "0" + suffix
          )}
        </div>
        <p className="text-sm text-muted-foreground font-medium">{label}</p>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
