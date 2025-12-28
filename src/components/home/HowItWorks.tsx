import { Target, FlaskConical, Truck, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Select Your Goal',
    description: 'Choose from muscle growth, recovery, longevity, or cognitive enhancement.',
    color: 'primary',
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'Choose Your Formula',
    description: 'Browse our 100+ research-backed peptide solutions with detailed specifications.',
    color: 'purple',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Receive & Track',
    description: 'Fast shipping with real-time tracking and Certificate of Analysis included.',
    color: 'gold',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Experience Results',
    description: 'Track your transformation with our progress tools and community support.',
    color: 'cyan',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Constellation Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Your Journey to{' '}
            <span className="gradient-text">Optimization</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From selection to results, we guide you through every step of your transformation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-purple to-gold -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative p-8 bg-gradient-card rounded-2xl border border-white/5 card-hover h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-navy-dark rounded-full border-2 border-primary flex items-center justify-center font-mono text-primary font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-${step.color}/10 flex items-center justify-center mb-6 group-hover:animate-pulse-glow`}>
                    <step.icon className={`w-8 h-8 text-${step.color === 'primary' ? 'primary' : step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Animated Ring on Hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
