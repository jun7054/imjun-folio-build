import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, FileSpreadsheet, FileText, Car } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "ITQ 엑셀",
      grade: "A",
      icon: FileSpreadsheet,
      category: "정보기술자격",
      description: "스프레드시트 활용 능력"
    },
    {
      title: "ITQ 한글",
      grade: "A",
      icon: FileText,
      category: "정보기술자격",
      description: "문서 작성 능력"
    },
    {
      title: "1종 보통",
      grade: "자동",
      icon: Car,
      category: "운전면허",
      description: "운전 가능"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">보유 자격증</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            
            return (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <Badge variant="secondary" className="mb-3">
                    {cert.category}
                  </Badge>
                  
                  <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                  <div className="text-3xl font-black text-primary mb-3">{cert.grade}</div>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">총 <span className="text-primary font-bold">{certifications.length}개</span>의 자격증 보유</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
