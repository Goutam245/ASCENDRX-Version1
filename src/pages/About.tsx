import { Shield, Beaker, Award, Users, Target, Heart, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const milestones = [
  { year: '2018', title: 'Founded', description: 'Started with a mission to bring pharmaceutical-grade peptides to high performers.' },
  { year: '2019', title: 'FDA Registration', description: 'Achieved FDA registration for our manufacturing facility.' },
  { year: '2020', title: '10,000 Customers', description: 'Reached our first major milestone in customer trust.' },
  { year: '2021', title: 'Research Lab', description: 'Opened our in-house research and development laboratory.' },
  { year: '2022', title: '100+ Products', description: 'Expanded our catalog to over 100 research-backed formulas.' },
  { year: '2023', title: '50,000+ Community', description: 'Built a thriving community of optimization enthusiasts.' },
];

const team = [
  { name: 'Dr. Michael Chen', role: 'Chief Scientific Officer', avatar: 'MC' },
  { name: 'Sarah Williams', role: 'Head of Research', avatar: 'SW' },
  { name: 'James Richardson', role: 'CEO & Founder', avatar: 'JR' },
  { name: 'Emily Watson', role: 'VP of Operations', avatar: 'EW' },
];

const certifications = [
  { icon: Shield, title: 'FDA Registered', description: 'Manufacturing facility meets all FDA requirements' },
  { icon: Beaker, title: 'cGMP Certified', description: 'Current Good Manufacturing Practice compliant' },
  { icon: Award, title: 'ISO 9001:2015', description: 'International quality management certified' },
  { icon: Check, title: 'Third-Party Tested', description: 'Every batch verified by independent labs' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple/20 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up">
              Redefining Human{' '}
              <span className="gradient-text">Performance</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-200">
              Founded by scientists, trusted by athletes, backed by research. 
              We're on a mission to unlock human potential through precision peptide science.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gradient-to-br from-background via-mint/5 to-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At ASCENDRX, we believe everyone deserves access to pharmaceutical-grade peptides that can transform their health, performance, and longevity. We're not just selling products—we're empowering a movement of high performers who refuse to accept average.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Every formula we create undergoes rigorous testing, every batch is verified for purity, and every customer becomes part of our optimization community. This is precision science, made accessible.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-display font-semibold text-foreground">Precision</p>
                    <p className="text-sm text-muted-foreground">99.9%+ purity standard</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-display font-semibold text-foreground">Trust</p>
                    <p className="text-sm text-muted-foreground">50,000+ customers</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-card rounded-3xl border border-white/10 p-8 relative overflow-hidden">
                {/* Abstract Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-primary/20 rounded-full animate-rotate-slow" />
                  <div className="absolute w-48 h-48 border border-purple/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
                  <div className="absolute w-32 h-32 bg-gradient-radial from-primary/30 to-transparent rounded-full animate-pulse-glow" />
                </div>
                
                {/* Stats */}
                <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <p className="text-3xl font-display font-bold text-primary">50K+</p>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <p className="text-3xl font-display font-bold text-primary">100+</p>
                    <p className="text-sm text-muted-foreground">Formulations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 particles-bg opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small research lab to a trusted global brand
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple to-primary -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 bg-gradient-card rounded-2xl border border-white/10 card-hover">
                      <span className="text-primary font-mono font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-display font-semibold text-foreground mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="hidden md:block w-4 h-4 rounded-full bg-primary shadow-glow flex-shrink-0" />
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scientists, researchers, and innovators dedicated to your optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-accent flex items-center justify-center text-foreground text-3xl font-bold group-hover:shadow-glow transition-shadow">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading standards for quality and safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="p-8 bg-gradient-card rounded-2xl border border-white/10 text-center card-hover">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to <span className="gradient-text">Optimize</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join 50,000+ high performers who have transformed their biology with ASCENDRX.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/shop" className="group">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
