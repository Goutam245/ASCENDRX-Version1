import { useState, useEffect } from 'react';
import { Smartphone, Tablet, Watch, Activity, LineChart, Zap } from 'lucide-react';

const FloatingDevice = ({ 
  className, 
  icon: Icon, 
  delay = 0,
  size = 'md'
}: { 
  className?: string; 
  icon: React.ElementType;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}) => {
  const sizeClasses = {
    sm: 'w-16 h-24',
    md: 'w-20 h-32',
    lg: 'w-24 h-40'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div 
      className={`absolute ${sizeClasses[size]} rounded-2xl bg-gradient-to-br from-navy-light/80 to-navy-dark/90 border border-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center ${className}`}
      style={{ 
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <div className={`${size === 'sm' ? 'w-10 h-10' : size === 'md' ? 'w-12 h-14' : 'w-14 h-16'} rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center`}>
        <Icon className={`${iconSizes[size]} text-primary`} />
      </div>
    </div>
  );
};

const OrbitingDot = ({ 
  orbitSize, 
  duration, 
  delay = 0,
  startAngle = 0
}: { 
  orbitSize: number; 
  duration: number; 
  delay?: number;
  startAngle?: number;
}) => {
  return (
    <div 
      className="absolute left-1/2 top-1/2"
      style={{
        width: `${orbitSize}px`,
        height: `${orbitSize}px`,
        marginLeft: `-${orbitSize / 2}px`,
        marginTop: `-${orbitSize / 2}px`,
        animation: `orbit ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        transform: `rotate(${startAngle}deg)`
      }}
    >
      <div 
        className="absolute w-3 h-3 rounded-full bg-primary shadow-glow"
        style={{ 
          top: '0',
          left: '50%',
          marginLeft: '-6px',
          boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)'
        }}
      />
    </div>
  );
};

export const IntegrationsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[hsl(250,50%,15%)] to-navy-dark" />
      
      {/* Orbital Rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Outer ring */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full border border-primary/10"
          style={{ marginLeft: '-300px', marginTop: '-300px' }}
        />
        {/* Middle ring */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full border border-primary/15"
          style={{ marginLeft: '-225px', marginTop: '-225px' }}
        />
        {/* Inner ring */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full border border-primary/20"
          style={{ marginLeft: '-150px', marginTop: '-150px' }}
        />
        
        {/* Orbiting Dots */}
        {mounted && (
          <>
            <OrbitingDot orbitSize={600} duration={20} startAngle={0} />
            <OrbitingDot orbitSize={600} duration={20} startAngle={120} delay={-6.66} />
            <OrbitingDot orbitSize={600} duration={20} startAngle={240} delay={-13.33} />
            <OrbitingDot orbitSize={450} duration={15} startAngle={45} />
            <OrbitingDot orbitSize={450} duration={15} startAngle={165} delay={-5} />
            <OrbitingDot orbitSize={450} duration={15} startAngle={285} delay={-10} />
            <OrbitingDot orbitSize={300} duration={10} startAngle={90} />
            <OrbitingDot orbitSize={300} duration={10} startAngle={270} delay={-5} />
          </>
        )}
      </div>

      {/* Static glowing dots */}
      <div className="absolute w-2 h-2 rounded-full bg-primary shadow-glow top-[20%] left-[15%] animate-pulse" />
      <div className="absolute w-2 h-2 rounded-full bg-primary shadow-glow top-[30%] right-[20%] animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute w-3 h-3 rounded-full bg-primary shadow-glow bottom-[25%] left-[25%] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute w-2 h-2 rounded-full bg-primary shadow-glow bottom-[35%] right-[15%] animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute w-2 h-2 rounded-full bg-accent shadow-glow top-[45%] left-[10%] animate-pulse" style={{ animationDelay: '0.3s' }} />
      <div className="absolute w-2 h-2 rounded-full bg-accent shadow-glow top-[60%] right-[10%] animate-pulse" style={{ animationDelay: '0.8s' }} />

      {/* Floating Devices */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingDevice 
          icon={Smartphone}
          className="top-[15%] left-[20%] rotate-[-15deg]"
          delay={0}
          size="lg"
        />
        <FloatingDevice 
          icon={Tablet}
          className="top-[25%] right-[18%] rotate-[10deg]"
          delay={1}
          size="md"
        />
        <FloatingDevice 
          icon={Watch}
          className="bottom-[20%] left-[15%] rotate-[5deg]"
          delay={2}
          size="sm"
        />
        <FloatingDevice 
          icon={Activity}
          className="top-[50%] left-[30%] rotate-[-8deg]"
          delay={0.5}
          size="md"
        />
        <FloatingDevice 
          icon={LineChart}
          className="bottom-[30%] right-[25%] rotate-[12deg]"
          delay={1.5}
          size="lg"
        />
        <FloatingDevice 
          icon={Zap}
          className="top-[40%] right-[30%] rotate-[-5deg]"
          delay={2.5}
          size="sm"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-mono text-sm mb-6">
            MULTI-PLATFORM INTEGRATION
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Track Your Progress
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Across All Devices
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sync your peptide protocols, track results, and monitor your biometrics 
            seamlessly across smartphones, tablets, and wearables.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Real-time Sync', 'Progress Analytics', 'Dosage Reminders', 'Health Metrics', 'Cloud Backup'].map((feature, i) => (
              <span 
                key={feature}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-foreground/80 backdrop-blur-sm"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">1M+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">4.9★</div>
              <div className="text-sm text-muted-foreground">App Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Integrations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotation, 0deg));
          }
        }
        
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};
