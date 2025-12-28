import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Michael Torres',
    age: 34,
    location: 'Los Angeles, CA',
    avatar: 'MT',
    rating: 5,
    result: 'Increased muscle mass by 12% in 8 weeks',
    product: 'BPC-157 Pro+',
    quote: "I've tried dozens of supplements over the years, but nothing compares to ASCENDRX. The difference in my recovery time is night and day. I'm hitting PRs I thought were impossible at my age.",
    verified: true,
  },
  {
    id: 2,
    name: 'Dr. Sarah Kim',
    age: 42,
    location: 'Boston, MA',
    avatar: 'SK',
    rating: 5,
    result: 'Improved cognitive performance by 40%',
    product: 'Selank Cognitive',
    quote: "As a physician, I was skeptical at first. But the science backing these formulations is solid, and the purity levels are exactly what they claim. My focus and mental clarity have never been better.",
    verified: true,
  },
  {
    id: 3,
    name: 'James Richardson',
    age: 28,
    location: 'Miami, FL',
    avatar: 'JR',
    rating: 5,
    result: 'Reduced recovery time by 50%',
    product: 'TB-500 Elite',
    quote: "Training 6 days a week used to leave me wrecked. Since starting TB-500, I bounce back faster than ever. The quality is unmatched - you can tell this isn't your typical supplement company.",
    verified: true,
  },
  {
    id: 4,
    name: 'Emily Watson',
    age: 45,
    location: 'Seattle, WA',
    avatar: 'EW',
    rating: 5,
    result: 'Visible anti-aging results in 6 weeks',
    product: 'Epithalon Longevity',
    quote: "I started using Epithalon for its longevity benefits, but the improvements in my sleep and energy levels were almost immediate. Friends keep asking what my secret is!",
    verified: true,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 particles-bg opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Real Transformations,{' '}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of high performers who have elevated their biology with ASCENDRX.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div className="bg-gradient-card rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-24 h-24 text-primary/10" />

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-6 h-6",
                        i < testimonial.rating
                          ? "fill-gold text-gold"
                          : "fill-muted text-muted"
                      )}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>

                {/* Result Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">{testimonial.result}</span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center text-foreground font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-semibold text-foreground">
                          {testimonial.name}
                        </span>
                        {testimonial.verified && (
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.age} • {testimonial.location}
                      </span>
                    </div>
                  </div>

                  {/* Product Badge */}
                  <div className="hidden md:block px-4 py-2 bg-white/5 rounded-full">
                    <span className="text-sm text-muted-foreground">
                      Using: <span className="text-foreground font-medium">{testimonial.product}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border border-white/10 hover:bg-white/5"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      i === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-white/20 hover:bg-white/40"
                    )}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border border-white/10 hover:bg-white/5"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for the trending up icon used in the result badge
const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
