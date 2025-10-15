import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface SkillProficiencyProps {
  category: string;
  skills: {
    name: string;
    level: number;
    years: string;
  }[];
}

const SkillProficiency = ({ category, skills }: SkillProficiencyProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Card ref={ref} className="hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              years={skill.years}
              inView={inView}
              delay={index * 0.1}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface SkillBarProps {
  name: string;
  level: number;
  years: string;
  inView: boolean;
  delay: number;
}

const SkillBar = ({ name, level, years, inView, delay }: SkillBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(level);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 70) return "Advanced";
    return "Intermediate";
  };

  const getLevelColor = (level: number) => {
    if (level >= 90) return "text-primary";
    if (level >= 70) return "text-accent";
    return "text-muted-foreground";
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">{name}</span>
          <span className={`text-xs font-medium ${getLevelColor(level)}`}>
            {getLevelLabel(level)}
          </span>
        </div>
        <span className="text-sm text-muted-foreground">{years}</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default SkillProficiency;
