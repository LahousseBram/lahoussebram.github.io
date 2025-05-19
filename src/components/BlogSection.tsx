
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Building a Portfolio Website with React',
      excerpt: 'Learn how to create a modern portfolio website using React, TypeScript, and TailwindCSS.',
      date: 'May 15, 2025',
      readTime: '5 min read',
      category: 'Web Development',
      slug: 'building-portfolio-website'
    },
    {
      title: 'Machine Learning Fundamentals',
      excerpt: 'An introduction to machine learning concepts and how to implement your first ML model.',
      date: 'May 10, 2025',
      readTime: '8 min read',
      category: 'Machine Learning',
      slug: 'machine-learning-fundamentals'
    },
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
      date: 'May 5, 2025',
      readTime: '6 min read',
      category: 'Technology',
      slug: 'future-web-development'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about programming, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="glass-card hover-scale overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-primary border-primary/20">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4" />
                  <span>{post.readTime}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/blog" className="gap-2 inline-flex items-center">
              View All Posts <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
