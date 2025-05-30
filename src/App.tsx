
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPostHackathon";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BlogPostWebsite from "./pages/BlogPostWebsite";
import BlogPostPython from "./pages/BlogPostPython";
import BlogPostHackathon from "./pages/BlogPostHackathon";
import BlogPostHacker from "./pages/BlogPostHacker";
import BlogPostDotnet from "./pages/BlogPostDotnet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/building-portfolio-website" element={<BlogPostWebsite />} />
          <Route path="/blog/python-lesson" element={<BlogPostPython />} />
          <Route path="/blog/hack-the-future" element={<BlogPostHackathon />} />
          <Route path="/blog/ethical-hacker" element={<BlogPostHacker />} />
          <Route path="/blog/dotnet-development" element={<BlogPostDotnet />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
