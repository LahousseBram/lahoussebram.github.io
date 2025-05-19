
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'JavaScript', proficiency: 90 },
    { name: 'React', proficiency: 85 },
    { name: 'TypeScript', proficiency: 80 },
    { name: 'Node.js', proficiency: 75 },
    { name: 'Python', proficiency: 70 },
    { name: 'Machine Learning', proficiency: 65 },
    { name: 'HTML/CSS', proficiency: 90 },
    { name: 'UI/UX Design', proficiency: 75 },
  ];

  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Tech Company X',
      duration: 'Summer 2024',
      description: 'Worked on developing and maintaining web applications using React and Node.js. Implemented new features and fixed bugs in the codebase.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Frontend Developer (Part-time)',
      company: 'Startup Y',
      duration: 'Jan 2024 - Present',
      description: 'Developing responsive user interfaces for web applications. Collaborating with designers to implement pixel-perfect designs.',
      technologies: ['Vue.js', 'TailwindCSS', 'JavaScript']
    },
    {
      title: 'Research Assistant',
      company: 'University Lab',
      duration: 'Sept 2023 - Dec 2023',
      description: 'Assisted in research on machine learning algorithms for natural language processing. Implemented and tested various models.',
      technologies: ['Python', 'TensorFlow', 'NLP']
    }
  ];
  
  return (
    <>
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            
            <div className="mb-16">
              <p className="text-xl mb-4">
                I'm a passionate programmer and final year Computer Science student with a
                love for creating elegant, efficient solutions to complex problems.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My journey in tech began with simple HTML websites, and has grown into
                a deep expertise in modern web frameworks, backend systems, and machine
                learning applications. I'm constantly learning and experimenting with new
                technologies to expand my skill set.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="gap-2">
                  <Download className="size-4" /> Download Resume
                </Button>
                <Button variant="outline" className="gap-2">
                  View Projects <ExternalLink className="size-4" />
                </Button>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card key={index} className="glass-card">
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <Badge variant="outline">{exp.duration}</Badge>
                      </div>
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
                      <p className="text-muted-foreground">University Name</p>
                    </div>
                    <Badge variant="outline">2021 - 2025</Badge>
                  </div>
                  <p className="mb-4">
                    Specialized in software engineering with a focus on web development
                    and machine learning. Graduating with honors.
                  </p>
                  <p className="text-muted-foreground">
                    Relevant Coursework: Data Structures & Algorithms, Machine Learning, 
                    Web Development, Database Systems, Operating Systems, Software Engineering
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
