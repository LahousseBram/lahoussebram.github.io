import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Trophy, Star, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', proficiency: 80 },
    { name: 'Java', proficiency: 75 },
    { name: 'Javascript', proficiency: 70 },
    { name: 'PHP', proficiency: 50 },
    { name: 'Flutter', proficiency: 50 },
    { name: 'Typescript', proficiency: 50 },
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
                a proficiency in modern web frameworks, backend systems, and multi-environment applications. When I'm not coding, you can find me pondering my next personal project or working out.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Quick Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <h3 className="text-2xl font-bold">5+</h3>
                    <p className="text-muted-foreground">Years Coding</p>
                  </CardContent>
                </Card>
                <Card className="glass-card text-center">
                  <CardHeader className="pb-2">
                    <Rocket className="size-8 mx-auto text-primary" />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-2xl font-bold">10+</h3>
                    <p className="text-muted-foreground">Technologies</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-xl">Bachelor of Applied Computer Science</CardTitle>
                        <CardDescription className="text-base">Howest</CardDescription>
                      </div>
                      <Badge variant="outline">2022-2025 (Present)</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized in creating all kinds of software applications ranging from complex web apps to mobile apps.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-xl">IT Management</CardTitle>
                        <CardDescription className="text-base">Sint-Jozefsinstituut/College</CardDescription>
                      </div>
                      <Badge variant="outline">2020-2022</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      In the last two years of high school, I chose this course. It taught me basic programming concepts, computer architecture, server management, and much more. It laid the foundation for me to become the programmer I am today.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;