import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { ScienceSection } from '@/components/home/ScienceSection';
import { HowItWorks } from '@/components/home/HowItWorks';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ComparisonTable } from '@/components/home/ComparisonTable';
import { BlogPreview } from '@/components/home/BlogPreview';
import { IntegrationsSection } from '@/components/home/IntegrationsSection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <FeaturedProducts />
      <ScienceSection />
      <HowItWorks />
      <IntegrationsSection />
      <TestimonialsSection />
      <ComparisonTable />
      <BlogPreview />
    </>
  );
};

export default Index;
