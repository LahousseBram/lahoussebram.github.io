
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
    title: 'My Experience at Hack the Future 2024',
    date: 'November 19, 2024',
    readTime: '6 min read',
    author: 'Bram Lahousse',
    category: 'Events',
    content: `
      <p>
        The hackathon named 'Hack the Future' took place on the 19th of November 2024. The event started at 9 am but we had to take the train from Bruges at 6:52. This was really early but I met up with some people so this made it more bearable. Once we arrived the entrance was easy to find as there were flags placed outside. We went in through the main entrance and were greeted by some people that gave us a badge. We sat down in the bar area where we had some time to settle down before the briefing. Some time later, the hosts of the event came on stage and welcomed us. They assigned us to our coaches and we went to a separate room. After we sat down and the attendance was taken, they introduced the project itself and asked us some basic questions. After this, we got started laying the foundations for our application.
      </p>
      <br>
      <p>
        Everything started off well. We worked at a steady pace and morale was high. This continued throughout the first half of the event. At around 12, the coaches told us that we could go to the main hall to enjoy a well-deserved lunch. There was a lunch buffet and we could enjoy some cold drinks. This was a really nice break from the coding that we did in the morning.
      </p>
      <br>
      <p>
        We got back to work at around 12:30 am. Everything started off well as we continued with confidence. This quickly changed as things started to take a different turn. Some tools that we used decided to give us a hard time and we had to spend around one and a half hours fixing everything. This was very demotivating as we only had around 2 hours left to finish everything we planned.
      </p>
      <br>
      <p>
        We knew this wasn't possible so we had to make a few decisions. We decided to get the core functionalities down first as this was the base of the application and by far the most important. We started preparing ourselves for the pitch we had to give later. We were able to finish a few extra items along with most of the core of the app. We were really close to finishing a major part of the project but due to lack of time this wasn't possible.
      </p>
      <br>
      <p>
        All of the teams pitched their project and we showed everything we had. We told our fellow colleagues that we had a lot of problems with our tools, which caused our lack of progress during the afternoon. The coaches thanked everyone for their efforts and we left the room to go back to the main hall.
      </p>
      <br>
      <p>
        We gathered our belongings and settled down to enjoy some delicious food and some cold beverages. There were a lot of different food items that we got to eat and I was able to try a few new things. We saw the hosts go on the main stage again and they prepared the last part of the day: giving out the awards. The hosts showed the nominees for the awards and we were the first group they announced. Our hopes were at an all time high but we knew that the struggles we had faced might have cost us a lot of time.
      </p>
      <br>
      <p>
        There were 2 categories: The public vote and the jury's vote. Unfortunately we didn't win any. We were supposed to vote on the 3 best teams and we ended up placing third.
      </p>

      <p>
        We were a bit disappointed but we had to leave soon after as our train was almost arriving. We got a goodie bag after handing in our badge and we returned home right after.
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
