import { Check, X, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const features = [
  {
    name: 'Purity Level',
    ascendrx: '99.9%+',
    competitorA: '95-98%',
    competitorB: '90-95%',
    tooltip: 'Higher purity means fewer impurities and more effective results.',
  },
  {
    name: 'Third-Party Testing',
    ascendrx: true,
    competitorA: true,
    competitorB: false,
    tooltip: 'Independent verification of quality and purity claims.',
  },
  {
    name: 'COA with Every Order',
    ascendrx: true,
    competitorA: false,
    competitorB: false,
    tooltip: 'Certificate of Analysis verifying batch-specific testing results.',
  },
  {
    name: 'Free Shipping Over $75',
    ascendrx: true,
    competitorA: true,
    competitorB: false,
  },
  {
    name: 'Same-Day Processing',
    ascendrx: true,
    competitorA: false,
    competitorB: false,
    tooltip: 'Orders placed before 2PM ship the same business day.',
  },
  {
    name: '30-Day Money Back',
    ascendrx: true,
    competitorA: true,
    competitorB: false,
  },
  {
    name: 'Research Library Access',
    ascendrx: true,
    competitorA: false,
    competitorB: false,
    tooltip: 'Access to 200+ peer-reviewed studies backing our formulations.',
  },
  {
    name: 'Dedicated Support',
    ascendrx: '24/7',
    competitorA: 'Email Only',
    competitorB: 'Limited',
  },
];

const renderValue = (value: boolean | string) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-primary mx-auto" />
    ) : (
      <X className="w-5 h-5 text-destructive/60 mx-auto" />
    );
  }
  return <span className="font-medium">{value}</span>;
};

export const ComparisonTable = () => {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose{' '}
            <span className="gradient-text">ASCENDRX</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we compare to the competition on what matters most.
          </p>
        </div>

        {/* Table */}
        <div className="max-w-5xl mx-auto overflow-x-auto scrollbar-thin">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 font-display font-semibold text-foreground">
                  Features
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                    <span className="font-display font-bold text-primary">ASCENDRX</span>
                  </div>
                </th>
                <th className="p-4 text-center">
                  <span className="text-muted-foreground font-medium">Competitor A</span>
                </th>
                <th className="p-4 text-center">
                  <span className="text-muted-foreground font-medium">Competitor B</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={cn(
                    "border-t border-white/5 transition-colors hover:bg-white/5",
                    index % 2 === 0 && "bg-white/[0.02]"
                  )}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-foreground font-medium">{feature.name}</span>
                      {feature.tooltip && (
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="w-4 h-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            {feature.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-center bg-primary/5">
                    {renderValue(feature.ascendrx)}
                  </td>
                  <td className="p-4 text-center text-muted-foreground">
                    {renderValue(feature.competitorA)}
                  </td>
                  <td className="p-4 text-center text-muted-foreground">
                    {renderValue(feature.competitorB)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
