import { useEffect, useRef, useState } from 'react';
import { Users, Beaker, Truck, Award } from 'lucide-react';

const stats = [
  { icon: Award, value: 99.9, suffix: '%', label: 'Purity Guaranteed' },
  { icon: Users, value: 50, suffix: 'K+', label: 'Happy Customers' },
  { icon: Beaker, value: 100, suffix: '+', label: 'Research-Backed Formulas' },
  { icon: Truck, value: 48, suffix: 'hr', label: 'Fast Shipping' },
];

const testimonials = [
  "Game-changer for my recovery routine. - Mike T.",
  "Finally, a brand I can trust. - Sarah K.",
  "Visible results within weeks. - James R.",
  "The purity is unmatched. - Dr. Emily W.",
  "Best investment in my health. - Alex M.",
  "Customer service is exceptional. - Lisa P.",
];

export const TrustSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = current;
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-background via-mint/5 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Trusted by <span className="gradient-text">50,000+</span> High Performers
          </h2>
        </div>

        {/* Marquee Testimonials */}
        <div className="relative mb-16 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-[shimmer_20s_linear_infinite]">
            <div className="flex gap-8 animate-[slide-in-left_20s_linear_infinite]">
              {[...testimonials, ...testimonials].map((text, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                >
                  <p className="text-foreground/80 whitespace-nowrap">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 card-hover"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                <span className="font-mono">
                  {stat.suffix === '%' 
                    ? counters[index].toFixed(1)
                    : Math.round(counters[index])
                  }
                </span>
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
