import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">저를 소개합니다</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">학력</h3>
                <p className="text-muted-foreground leading-relaxed">
                  충주상업고등학교 재학중
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  상업 분야 전문 교육을 받으며 IT 기술을 학습하고 있습니다
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">자기소개</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  안녕하세요! 충주상업고등학교에 재학 중인 이민준입니다.
                </p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">
                  Python, JavaScript, HTML을 학습하며 웹 개발의 기초를 다지고 있습니다. 
                  ITQ 자격증(엑셀 A, 한글 A)을 취득하여 실무 능력을 검증받았으며, 
                  꾸준한 학습과 실전 프로젝트를 통해 실력 있는 개발자로 성장하고자 합니다. 
                  새로운 기술을 배우는 것을 즐기며, 문제 해결에 열정을 가지고 있습니다.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
