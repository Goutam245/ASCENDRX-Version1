import { ArrowRight, Shield, FlaskConical, FileCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const trustBadges = [
  { icon: Award, label: '99.9%+ Purity' },
  { icon: Shield, label: 'FDA Registered' },
  { icon: FlaskConical, label: '3rd Party Tested' },
  { icon: FileCheck, label: 'COA Available' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple/20 rounded-full blur-[128px] animate-pulse-glow animation-delay-500" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">
                Pharmaceutical-Grade Innovation
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-[1.1] animate-fade-up animation-delay-100">
              ELEVATE YOUR{' '}
              <span className="relative">
                <span className="gradient-text">BIOLOGY</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary animate-draw-line" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-foreground/70 mb-8 max-w-xl animate-fade-up animation-delay-200">
              Pharmaceutical-Grade Peptides. Clinical Precision. Transformative Results. 
              Unlock your body's full potential with science-backed formulations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/shop" className="group">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl">
                Watch Our Science
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 animate-fade-up animation-delay-400">
              {trustBadges.map((badge, index) => (
                <div 
                  key={badge.label}
                  className="flex items-center gap-2 text-foreground/60"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* 3D Molecule Visualization Placeholder */}
            <div className="relative w-[500px] h-[500px]">
              {/* Rotating Ring */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-rotate-slow" />
              <div className="absolute inset-8 border border-purple/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
              <div className="absolute inset-16 border border-primary/10 rounded-full animate-rotate-slow" style={{ animationDuration: '30s' }} />
              
              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-radial from-primary/30 via-purple/20 to-transparent rounded-full animate-pulse-glow" />
              </div>

              {/* Floating Vials */}
              <div className="absolute top-1/4 left-1/4 w-20 h-32 bg-gradient-card rounded-xl border border-white/10 backdrop-blur-xl animate-float shadow-glow">
                <div className="absolute inset-x-4 top-4 h-16 bg-primary/20 rounded-lg" />
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-20 h-32 bg-gradient-card rounded-xl border border-white/10 backdrop-blur-xl animate-float animation-delay-500 shadow-glow">
                <div className="absolute inset-x-4 top-4 h-16 bg-purple/20 rounded-lg" />
              </div>
              <div className="absolute top-1/2 right-8 w-16 h-24 bg-gradient-card rounded-xl border border-white/10 backdrop-blur-xl animate-float animation-delay-300 shadow-glow">
                <div className="absolute inset-x-3 top-3 h-12 bg-cyan/20 rounded-lg" />
              </div>

              {/* DNA Helix Dots */}
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 180;
                const x = Math.cos(angle) * radius + 250;
                const y = Math.sin(angle) * radius + 250;
                return (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-primary rounded-full shadow-glow"
                    style={{
                      left: x,
                      top: y,
                      animationDelay: `${i * 100}ms`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
