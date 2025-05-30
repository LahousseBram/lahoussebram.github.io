
import { ArrowUpRight, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'This personal portfolio website built with React and TailwindCSS.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'GoldAuctions platform',
      description: 'An auction platform for selling jewelery.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      tags: ['Java Spring', 'VueJS'],
      github: 'https://github.com/LahousseBram/GoldAuctions',
      demo: 'https://github.com/LahousseBram/GoldAuctions'
    },
    {
      title: 'Powerlams website',
      description: "A website + advanced form system for my parent's business",
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['HTML+CSS', 'Javascript', 'PHP'],
      github: 'https://github.com',
      demo: 'https://stroomgroepen-lams.be'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are some of my best projects!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-scale overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  {project.title}
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="size-5" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ArrowUpRight className="size-5" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="gap-2">
            View All Projects <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
