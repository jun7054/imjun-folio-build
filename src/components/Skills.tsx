import { Card } from "@/components/ui/card";
import { Code2, FileCode, Braces } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: Code2,
      color: "primary",
      description: "다양한 프로그래밍 경험"
    },
    {
      name: "JavaScript",
      icon: Braces,
      color: "accent",
      description: "웹 개발 기초 학습"
    },
    {
      name: "HTML",
      icon: FileCode,
      color: "primary",
      description: "웹 구조 설계 이해"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">배운 기술들</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isAccent = skill.color === "accent";
            
            return (
              <Card 
                key={index} 
                className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-${skill.color}/50 transition-all hover:shadow-[0_0_30px_hsl(var(--${skill.color})/0.3)] hover:scale-105 group`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 bg-${skill.color}/10 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${skill.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
