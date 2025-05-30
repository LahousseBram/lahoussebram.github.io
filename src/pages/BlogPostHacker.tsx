
import { useParams } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogLayout from '@/components/BlogLayout';
import lunchImage from "@/images/1748597262626.jpg";
import conventionImage from "@/images/1748597262647.jpg";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // This would typically come from a CMS or API
  const post = {
    title: 'Learning from the "best ethical hacker" in Belgium',
    date: 'December 17, 2024',
    readTime: '3 min read',
    author: 'Bram Lahousse',
    category: 'Events',
    content: `
      <p>
        A while ago, I attended a Tech&Meet session hosted at Howest featuring Robbe Verwilghen. He's often referred to as "the Best Ethical Hacker in Belgium." The talk was about bug bounty hunting, ethical hacking, and real-world cybersecurity experiences.
      </p>
      <br>
      <p>
        The room was packed with students and busier than I expected. Robbe kicked things off by explaining how he got started in hacking and quickly moved into some of the more complex areas of his work. He shared some interesting stories from bug bounty programs, how platforms like HackerOne operate, and the mental game behind staying competitive in that world.
      </p>
      <br>
      <p>
        One thing that stood out was how transparent and grounded Robbe was about both the excitement and the grind of the work. Students asked solid questions—ranging from "What's your biggest reward ever?" to more technical stuff about reporting vulnerabilities. He gave honest, thoughtful answers. It wasn't just flexing or bragging but practical advice with a bit of inspiration and insight behind it.
      </p>
      <br>
      <p>
        Even though I'm not heavily invested into security, the talk gave me a better understanding of how security fits into the broader dev landscape. Contrairy to what I thought: it's not just about finding bugs, it's about understanding systems deeply enough to spot the holes others miss. His mindset, his curiousity and persistence was very inspiring to me.
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
