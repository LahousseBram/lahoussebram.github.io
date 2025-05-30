
import { ArrowUpRight, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React and TailwindCSS.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Machine Learning Project',
      description: 'A machine learning model to predict stock market trends.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      tags: ['Python', 'TensorFlow', 'Pandas'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Mobile App',
      description: 'A cross-platform mobile app built with React Native.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-muted-foreground text-lg">
              A showcase of my technical work, side projects, and experiments.
              Each project demonstrates different skills and technologies. More to come!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className={`glass-card hover-scale overflow-hidden ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="size-5" />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ArrowUpRight className="size-5" />
                      </a>
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.featured && (
                    <Badge className="bg-primary/10 text-primary border-none mb-2 gap-1">
                      <Star className="size-3.5" /> Featured
                    </Badge>
                  )}
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
