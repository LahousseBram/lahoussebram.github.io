
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h4 className="text-primary font-mono tracking-wider">Hello, I'm</h4>
        </div>
        
        <div className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient">Bram Lahousse.</span><br />
            <span className="mt-2 block">Student & Developer.</span>
          </h1>
        </div>
        
        <div className="mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-muted-foreground text-lg">
            I'm a final year applied computer science student @ Howest.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <Button className="group gap-2">
            View Projects <ExternalLink className="size-4 group-hover:translate-x-1 transition-transform"/>
          </Button>
          <Button variant="outline" className="gap-2">
            Read My Blog
          </Button>
        </div>
        
        <div className="flex gap-6 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <a 
            href="https://github.com/LahousseBram" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="size-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/bram-lahousse-8b2b87258/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="size-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
