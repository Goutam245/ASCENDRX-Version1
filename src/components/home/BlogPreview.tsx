import { Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    slug: 'ultimate-guide-peptides-beginners',
    title: 'The Ultimate Guide to Peptides for Beginners',
    excerpt: 'Everything you need to know about peptides, how they work, and how to choose the right one for your goals.',
    category: 'Guides',
    readTime: '8 min read',
    author: 'Dr. Michael Chen',
    image: '/placeholder.svg',
  },
  {
    id: 2,
    slug: 'bpc-157-research-breakthrough',
    title: 'New Research: BPC-157 Tissue Regeneration',
    excerpt: 'A deep dive into the latest clinical studies showing remarkable tissue repair capabilities.',
    category: 'Research',
    readTime: '5 min read',
    author: 'Sarah Williams, PhD',
    image: '/placeholder.svg',
  },
  {
    id: 3,
    slug: 'optimize-recovery-elite-athletes',
    title: 'How Elite Athletes Optimize Recovery',
    excerpt: 'Learn the science-backed protocols that professional athletes use to recover faster.',
    category: 'Performance',
    readTime: '6 min read',
    author: 'Coach James Rivera',
    image: '/placeholder.svg',
  },
];

export const BlogPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-mint/5 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Learn &{' '}
              <span className="gradient-text">Optimize</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Expert insights on peptides, biohacking, and longevity from our research team.
            </p>
          </div>
          <Button variant="hero-outline" asChild>
            <Link to="/blog" className="group">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-gradient-card rounded-2xl border border-white/5 overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] bg-navy-light overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple/20 group-hover:opacity-80 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-3 h-3 text-primary" />
                    </div>
                    <span className="truncate max-w-[120px]">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
