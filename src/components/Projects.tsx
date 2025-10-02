import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingBag } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "마이 샵",
      description: "회원가입 및 로그인 기능을 구현한 쇼핑몰 프로젝트입니다. 사용자 인증과 상품 관리 기능을 포함하고 있습니다.",
      link: "https://myshopshop.vercel.app/",
      icon: ShoppingBag,
      tags: ["HTML", "JavaScript", "회원가입"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            프로젝트
          </h2>
          <p className="text-muted-foreground text-lg">
            지금까지 작업한 프로젝트들을 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-[0_0_30px_hsl(var(--primary-glow)/0.3)] transition-all duration-300 hover:-translate-y-2 border-primary/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      프로젝트 보기
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
