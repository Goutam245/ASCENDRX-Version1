import { useState } from 'react';
import { ChevronDown, Download, Beaker, Shield, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const accordionItems = [
  {
    id: 'how-peptides-work',
    title: 'How Peptides Work',
    icon: Beaker,
    content: 'Peptides are short chains of amino acids that act as signaling molecules in your body. They bind to specific receptors on cell surfaces, triggering targeted biological responses. Unlike traditional medications, peptides work with your body\'s natural processes to enhance function rather than override it.',
  },
  {
    id: 'testing-process',
    title: 'Our Testing Process',
    icon: Shield,
    content: 'Every batch undergoes rigorous 7-step quality testing: Identity verification, purity analysis (HPLC), sterility testing, endotoxin screening, heavy metal analysis, peptide content verification, and stability testing. Only batches meeting our 99%+ purity standard are released.',
  },
  {
    id: 'clinical-studies',
    title: 'Clinical Studies',
    icon: FileText,
    content: 'Our formulations are backed by 200+ peer-reviewed studies from leading research institutions. We maintain a comprehensive research library with direct links to published papers, ensuring full transparency in our scientific claims.',
  },
];

export const ScienceSection = () => {
  const [openItem, setOpenItem] = useState<string | null>('how-peptides-work');

  return (
    <section className="py-24 bg-gradient-to-br from-background via-mint/5 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Backed by{' '}
              <span className="gradient-text">Cutting-Edge Research</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl">
              Every formula is supported by peer-reviewed studies and rigorous testing protocols.
            </p>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg font-display font-semibold text-foreground">
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown className={cn(
                      "w-6 h-6 text-muted-foreground transition-transform duration-300",
                      openItem === item.id && "rotate-180"
                    )} />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    openItem === item.id ? "max-h-96" : "max-h-0"
                  )}>
                    <div className="px-6 pb-6 pl-[88px]">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="hero-outline" className="mt-8" asChild>
              <a href="/science">
                View Research Library
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Right Visual - 40% */}
          <div className="lg:col-span-2 relative">
            {/* 3D Molecule Visualization */}
            <div className="relative aspect-square">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-rotate-slow" />
              <div className="absolute inset-8 border border-purple/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
              <div className="absolute inset-16 border border-primary/10 rounded-full animate-rotate-slow" style={{ animationDuration: '30s' }} />
              
              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-radial from-primary/30 via-purple/20 to-transparent rounded-full animate-pulse-glow" />
              </div>

              {/* Floating Nodes */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 120;
                const x = Math.cos(angle) * radius + 50;
                const y = Math.sin(angle) * radius + 50;
                return (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-primary rounded-full shadow-glow animate-pulse-glow"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      animationDelay: `${i * 200}ms`,
                    }}
                  />
                );
              })}
            </div>

            {/* Download Card */}
            <div className="absolute -bottom-6 -left-6 right-6 p-6 bg-card/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-card">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                Download Our Science Guide
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the complete breakdown of peptide science and our testing methodology.
              </p>
              <Button variant="hero" size="sm" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
