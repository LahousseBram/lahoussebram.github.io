
import { useParams } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogLayout from '@/components/BlogLayout';
import lectureImage from "@/images/dotnetding.jpg";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // This would typically come from a CMS or API
  const post = {
    title: 'Attending a talk about the newest developments in .NET',
    date: 'October 29, 2024',
    readTime: '3 min read',
    author: 'Bram Lahousse',
    category: 'Events',
    content: `
      <p>
        On the 29th of October in the afternoon, I joined a guest lecture at Starfisk, a local software company just a short walk from campus. The session was about the evolution of the .NET framework and recent updates. I had some prior experience with .NET from a course I completed the semester before, so I figured this would be a useful opportunity to expand my knowledge about the topic.
      </p>
      <br>
      <p>
        The lecture was done in a small conference at the company's office. A group of Howest students, including myself, gathered alongside some of Starfisk's developers. The setting was informal but focused. After a brief introduction, one of the senior developers stepped forward and began walking us through the history of .NET.
      </p>
      <br>
      <p>
        The talk covered the origins of .NET and gradually moved into the changes introduced in the latest versions. The speaker didn't just list features. He shared insight into how these updates impact day-to-day development and long-term maintainability.
      </p>
      <br>
      <p>
        Some of the content went over my head because of my lack of experience working with .NET. The session assumed a certain level of professional experience with .NET, which I didn't have.
      </p>
      <br>
      <p>
        After the presentation, there was an opportunity to network with the Starfisk team and other students. The atmosphere was relaxed, and it was interesting to hear how others were using .NET in their projects or planning to in their upcoming internships.
      </p>
      <br>
      <img src=${lectureImage} />
      <br>
      <p>
        Overall, while the lecture wasn't immediately applicable to my current skill set, it was still interesting to see what was happening in the .NET world and talk to people who were actively using is. It offered a preview of what working in .NET looks like in a real-world environment, and gave me a better idea of the direction the framework is heading in.
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
