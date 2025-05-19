
import { Trophy, Star, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AboutSection = () => {
  const skills = [
    { name: 'JavaScript', proficiency: 90 },
    { name: 'React', proficiency: 85 },
    { name: 'TypeScript', proficiency: 80 },
    { name: 'Node.js', proficiency: 75 },
    { name: 'Python', proficiency: 70 },
    { name: 'Machine Learning', proficiency: 65 },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-6 text-lg">
              <p>
                I'm a passionate programmer and final year Computer Science student with a
                love for creating elegant, efficient solutions to complex problems.
              </p>
              <p>
                My journey in tech began with simple HTML websites, and has grown into
                a deep expertise in modern web frameworks, backend systems, and machine
                learning applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open source, or writing technical articles to share my knowledge with others.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="glass-card text-center">
                <CardHeader className="pb-2">
                  <Trophy className="size-8 mx-auto text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-2xl font-bold">10+</h3>
                  <p className="text-muted-foreground">Projects</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardHeader className="pb-2">
                  <Star className="size-8 mx-auto text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-2xl font-bold">3+</h3>
                  <p className="text-muted-foreground">Years Coding</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardHeader className="pb-2">
                  <Rocket className="size-8 mx-auto text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-2xl font-bold">15+</h3>
                  <p className="text-muted-foreground">Technologies</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-mono">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Bachelor of Computer Science</CardTitle>
                  <CardDescription>University Name, 2021-2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Specialized in software engineering with a focus on web development
                    and machine learning. Graduating with honors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
