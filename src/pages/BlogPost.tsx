
import { useParams } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogLayout from '@/components/BlogLayout';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // This would typically come from a CMS or API
  const post = {
    title: 'Building a Portfolio Website with React',
    date: 'May 15, 2025',
    readTime: '5 min read',
    author: 'Your Name',
    category: 'Web Development',
    content: `
      <p class="lead">
        Creating a portfolio website is an essential step for any developer or designer looking to showcase their work and skills. In this comprehensive guide, we'll walk through how to build a modern, responsive portfolio website using React, TypeScript, and TailwindCSS.
      </p>
      
      <h2>Why Build a Portfolio Website?</h2>
      
      <p>
        A well-designed portfolio website serves multiple purposes:
      </p>
      
      <ul>
        <li>Showcases your projects and skills to potential employers</li>
        <li>Demonstrates your coding abilities and attention to detail</li>
        <li>Provides a central hub for your online presence</li>
        <li>Helps you stand out in a competitive job market</li>
      </ul>
      
      <h2>Setting Up Your React Project</h2>
      
      <p>
        Begin by creating a new React project using Vite, which provides a faster and leaner development experience compared to Create React App:
      </p>
      
      <pre><code>npm create vite@latest my-portfolio -- --template react-ts</code></pre>
      
      <p>
        This command sets up a new React project with TypeScript support. After running this command, navigate to your project directory and install the necessary dependencies:
      </p>
      
      <pre><code>
cd my-portfolio
npm install
      </code></pre>
      
      <h2>Adding TailwindCSS</h2>
      
      <p>
        TailwindCSS is a utility-first CSS framework that allows for rapid UI development. To add it to your project:
      </p>
      
      <pre><code>
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
      </code></pre>
      
      <p>
        Configure your tailwind.config.js file to scan your project files:
      </p>
      
      <pre><code>
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
      </code></pre>
      
      <h2>Creating the Core Components</h2>
      
      <p>
        For a portfolio website, you'll typically need these key components:
      </p>
      
      <ol>
        <li>Header/Navigation</li>
        <li>Hero Section</li>
        <li>Projects Section</li>
        <li>About Section</li>
        <li>Skills Section</li>
        <li>Contact Form</li>
        <li>Footer</li>
      </ol>
      
      <h2>Adding Animations and Interactions</h2>
      
      <p>
        To make your portfolio stand out, consider adding subtle animations:
      </p>
      
      <pre><code>
npm install framer-motion
      </code></pre>
      
      <p>
        Framer Motion provides a simple API for animations in React:
      </p>
      
      <pre><code>
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      {/* Project content */}
    </motion.div>
  );
};
      </code></pre>
      
      <h2>Optimization and Deployment</h2>
      
      <p>
        Before deploying your portfolio, optimize it for performance:
      </p>
      
      <ul>
        <li>Optimize images using next-gen formats like WebP</li>
        <li>Implement lazy loading for components and images</li>
        <li>Use code splitting to reduce initial load time</li>
        <li>Set up proper metadata for SEO</li>
      </ul>
      
      <p>
        For deployment, consider platforms like Vercel, Netlify, or GitHub Pages, which offer free hosting for static websites with continuous deployment from your repository.
      </p>
      
      <h2>Conclusion</h2>
      
      <p>
        Building a portfolio website with React, TypeScript, and TailwindCSS gives you a powerful, flexible foundation to showcase your work. By following the steps outlined in this guide, you can create a professional, responsive portfolio that effectively demonstrates your skills and projects to potential employers or clients.
      </p>
      
      <p>
        Remember, your portfolio is an evolving project. Continuously update it with new projects, refine the design, and incorporate feedback to make it even better over time.
      </p>
    `,
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        <BlogLayout>
          <div className="mb-6">
            <Badge variant="outline" className="text-primary border-primary/20 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="size-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-a:text-primary prose-pre:bg-secondary/50 prose-pre:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </BlogLayout>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
