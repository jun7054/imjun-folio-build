import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            Portfolio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            이민준
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          충주상업고등학교 재학중
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          끊임없이 배우고 성장하는 개발자를 꿈꾸는 학생입니다
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToAbout}
            className="text-base"
          >
            더 알아보기
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '#contact'}
            className="text-base"
          >
            연락하기
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
      
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
