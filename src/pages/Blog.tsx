
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogLayout from '@/components/BlogLayout';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
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
    },
    {
      title: 'Understanding Data Structures',
      excerpt: 'A deep dive into common data structures and their applications in software development.',
      date: 'April 28, 2025',
      readTime: '10 min read',
      category: 'Computer Science',
      slug: 'understanding-data-structures'
    },
    {
      title: 'JavaScript Design Patterns',
      excerpt: 'Explore common design patterns and their implementations in JavaScript.',
      date: 'April 20, 2025',
      readTime: '7 min read',
      category: 'JavaScript',
      slug: 'javascript-design-patterns'
    },
    {
      title: 'Getting Started with TypeScript',
      excerpt: 'A beginner-friendly guide to TypeScript and static typing in JavaScript.',
      date: 'April 15, 2025',
      readTime: '6 min read',
      category: 'TypeScript',
      slug: 'getting-started-typescript'
    }
  ];

  const categories = [
    'All',
    'Web Development',
    'Machine Learning',
    'Technology',
    'Computer Science',
    'JavaScript',
    'TypeScript'
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-muted-foreground text-lg mb-12">
              Thoughts, tutorials, and insights about programming, design, and computer science.
            </p>

            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="search"
                placeholder="Search blog posts..."
                className="pl-10 bg-secondary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="space-y-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <Card key={index} className="glass-card hover-scale overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-primary border-primary/20">
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl">
                        <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="size-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No blog posts found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
