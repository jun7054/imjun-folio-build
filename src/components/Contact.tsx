import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">연락을 기다립니다</p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 hover:border-primary/50 transition-all">
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            프로젝트 협업이나 문의사항이 있으시다면<br />
            언제든지 연락 주세요!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:imanjun46@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-lg transition-all group"
            >
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-foreground font-medium">이메일</span>
            </a>
            
            <a 
              href="https://github.com/jun7054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 rounded-lg transition-all group"
            >
              <Github className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <span className="text-foreground font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
