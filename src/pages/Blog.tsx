import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, User, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import blogHero from '@/assets/blog-hero.jpg';

const blogPosts = [
  {
    id: 1,
    slug: 'ultimate-guide-peptides-beginners',
    title: 'The Ultimate Guide to Peptides for Beginners',
    excerpt: 'Everything you need to know about peptides, how they work, and how to choose the right one for your goals. A comprehensive introduction to the world of peptide therapy.',
    category: 'Guides',
    readTime: '8 min read',
    author: 'Dr. Michael Chen',
    date: 'Dec 15, 2024',
    featured: true,
  },
  {
    id: 2,
    slug: 'bpc-157-research-breakthrough',
    title: 'New Research: BPC-157 Tissue Regeneration Breakthrough',
    excerpt: 'A deep dive into the latest clinical studies showing remarkable tissue repair capabilities of BPC-157 and its potential applications.',
    category: 'Research',
    readTime: '5 min read',
    author: 'Sarah Williams, PhD',
    date: 'Dec 12, 2024',
    featured: true,
  },
  {
    id: 3,
    slug: 'optimize-recovery-elite-athletes',
    title: 'How Elite Athletes Optimize Recovery with Peptides',
    excerpt: 'Learn the science-backed protocols that professional athletes use to recover faster and perform at their peak.',
    category: 'Performance',
    readTime: '6 min read',
    author: 'Coach James Rivera',
    date: 'Dec 10, 2024',
    featured: false,
  },
  {
    id: 4,
    slug: 'longevity-peptides-anti-aging',
    title: 'Longevity Peptides: The Science of Anti-Aging',
    excerpt: 'Exploring how peptides like Epithalon and GHK-Cu are revolutionizing the anti-aging industry through cellular rejuvenation.',
    category: 'Longevity',
    readTime: '7 min read',
    author: 'Dr. Emily Watson',
    date: 'Dec 8, 2024',
    featured: false,
  },
  {
    id: 5,
    slug: 'cognitive-enhancement-selank-semax',
    title: 'Cognitive Enhancement: Selank vs Semax Comparison',
    excerpt: 'An in-depth comparison of two popular nootropic peptides and their effects on memory, focus, and anxiety reduction.',
    category: 'Cognitive',
    readTime: '9 min read',
    author: 'Dr. Alex Park',
    date: 'Dec 5, 2024',
    featured: false,
  },
  {
    id: 6,
    slug: 'peptide-stacking-protocols',
    title: 'Advanced Peptide Stacking Protocols for Maximum Results',
    excerpt: 'How to combine multiple peptides safely and effectively for synergistic benefits in recovery, growth, and performance.',
    category: 'Guides',
    readTime: '10 min read',
    author: 'Dr. Michael Chen',
    date: 'Dec 2, 2024',
    featured: false,
  },
];

const categories = ['All', 'Guides', 'Research', 'Performance', 'Longevity', 'Cognitive'];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'All');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={blogHero} alt="Blog" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/90 to-background" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              The Optimization <span className="gradient-text">Journal</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert insights on peptides, biohacking, and longevity from our research team
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search & Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/5 border-white/10 h-12"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-gradient-card rounded-3xl border border-white/10 overflow-hidden card-hover"
                >
                  <div className="relative aspect-[16/9] bg-navy-light overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple/30 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-white/10 text-foreground rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{post.author}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <span className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>
          
          {regularPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <Button variant="hero-outline" onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-gradient-card rounded-2xl border border-white/5 overflow-hidden card-hover"
                >
                  <div className="relative aspect-[16/10] bg-navy-light overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple/20 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 p-12 bg-gradient-card rounded-3xl border border-white/10 text-center">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Stay Updated with the Latest Research
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get weekly insights, new article notifications, and exclusive content delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border-white/10 h-12"
            />
            <Button variant="hero" size="lg">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
