
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BlogLayoutProps {
  children: React.ReactNode;
  showBackLink?: boolean;
}

const BlogLayout = ({ children, showBackLink = true }: BlogLayoutProps) => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {showBackLink && (
        <Button variant="ghost" asChild className="mb-8 -ml-2">
          <Link to="/blog" className="gap-2 inline-flex items-center">
            <ArrowLeft className="size-4" /> Back to Blog
          </Link>
        </Button>
      )}
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default BlogLayout;
