
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
    title: 'Returning to my old secondary school to give a lesson about Python',
    date: 'January 15, 2025',
    readTime: '3 min read',
    author: 'Bram Lahousse',
    category: 'Talks',
    content: `
      <p>
        For our course on professional networking we needed to organize an event. A fellow student <a style='color: #CF9FFF;' href='https://stanvdm.github.io' target='_blank'>Stan Vandamme</a> and I chose to return to the highschool we attended together. We met up with our old maths and Windows server teachers and had a brief chat with them.
      </p>
      <br>
      <p>
        We planned to give a lesson on the fundamentals of Python in a fun way. We chose to divide the lesson in 2 parts. In the first part I would give a tutorial on all the features of Python. This includes the syntax, best practices and tips to get them started. In the second part Stan would create a Brickbreaker clone using Pygame. We motivated the students to write the code we were showing on their own laptop to have a finished project in the end. If they needed help, I was walking around the classroom to lend a hand to anyone who was stuck.
      </p>
      <br>
      <p>
        Stan prepared 2 games: Brickbreaker and a 2d platformer. We quickly realised that the platformer would be too complex to build in the provided time. There were a few bugs during the demo but we were able to resolve these quickly. We also bundled everything in a Github repository and provided this to help the students if they got stuck or just wanted to follow along without coding anything. We did see that most students decided to follow along though.
      </p>
      <br>
      <p>
        In the first part I focused on comparing Python to Java because this is the language they were already familiar with. I saw that this was very helpful because almost all students had never touched Python. When Stan finished the demo part we provided some time for the students to build some of their own features on top of the project and be creative with it. We quickly saw that the students were not really interested in this and they were asking some questions about Howest and our studies. This was because quite a few of the students in the classroom were thinking of going down the same path as we did. We also gave the teacher's a bit of feedback based on what our courses were teaching so they could better prepare the students to follow this path and study at Howest. There were a few students that did add some features to the game and we also provided some help to them during this period.
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
