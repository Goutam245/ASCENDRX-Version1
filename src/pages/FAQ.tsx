import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const faqCategories = [
  { id: 'general', name: 'General', icon: HelpCircle },
  { id: 'products', name: 'Products', icon: HelpCircle },
  { id: 'shipping', name: 'Shipping', icon: HelpCircle },
  { id: 'usage', name: 'Usage', icon: HelpCircle },
  { id: 'safety', name: 'Safety', icon: HelpCircle },
  { id: 'billing', name: 'Billing', icon: HelpCircle },
];

const faqs = [
  {
    category: 'general',
    question: 'What are peptides?',
    answer: 'Peptides are short chains of amino acids (2-50 amino acids) that act as signaling molecules in your body. They bind to specific receptors on cell surfaces, triggering targeted biological responses. Peptides are naturally occurring in the body and play crucial roles in various physiological processes.',
  },
  {
    category: 'general',
    question: 'Are your peptides pharmaceutical-grade?',
    answer: 'Yes, all ASCENDRX peptides are pharmaceutical-grade with 99%+ purity. Each batch undergoes rigorous 7-step quality testing including HPLC analysis, sterility testing, and heavy metal screening. Every order includes a Certificate of Analysis (COA).',
  },
  {
    category: 'general',
    question: 'Who should use peptides?',
    answer: 'Peptides are used by athletes, biohackers, longevity enthusiasts, and health-conscious individuals seeking to optimize their performance, recovery, and wellness. Always consult with a healthcare provider before starting any peptide protocol.',
  },
  {
    category: 'products',
    question: 'What is BPC-157 used for?',
    answer: 'BPC-157 is primarily used for accelerating tissue repair and recovery. It has shown promise in clinical studies for healing tendons, ligaments, muscles, and gut tissues. It is one of our best-selling recovery peptides.',
  },
  {
    category: 'products',
    question: 'What is the difference between Ipamorelin and CJC-1295?',
    answer: 'Both stimulate growth hormone release but work differently. Ipamorelin is a selective GH secretagogue with a shorter half-life, ideal for targeted pulses. CJC-1295 with DAC provides sustained GHRH activity for up to 7 days. They are often stacked together for synergistic effects.',
  },
  {
    category: 'products',
    question: 'Do you offer sample sizes?',
    answer: 'We offer various dosage sizes for each peptide to accommodate different needs. Check individual product pages for available options. For first-time users, we recommend starting with smaller dosages.',
  },
  {
    category: 'shipping',
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days, Express shipping 2-3 business days, and Priority shipping 1-2 business days. All orders are processed within 24 hours on business days.',
  },
  {
    category: 'shipping',
    question: 'Is shipping discreet?',
    answer: 'Yes, all orders are shipped in plain, unmarked packaging with no indication of contents. Our return address is generic, and package contents are not listed on the exterior.',
  },
  {
    category: 'shipping',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. International shipping times vary by location (typically 7-14 business days). Please note that customs regulations vary by country, and it is the customer responsibility to verify import regulations.',
  },
  {
    category: 'usage',
    question: 'How do I reconstitute peptides?',
    answer: 'Peptides are typically reconstituted with bacteriostatic water (BAC water). The amount of water depends on your desired concentration. Detailed reconstitution instructions are included with each order, and video tutorials are available in our resource center.',
  },
  {
    category: 'usage',
    question: 'How should I store peptides?',
    answer: 'Unreconstituted peptides should be stored in a cool, dark place or refrigerated. Reconstituted peptides must be refrigerated (2-8°C) and used within 28 days. Never freeze reconstituted peptides.',
  },
  {
    category: 'usage',
    question: 'Can I stack multiple peptides?',
    answer: 'Yes, many peptides can be safely combined for synergistic effects. Popular stacks include BPC-157 + TB-500 for recovery, and Ipamorelin + CJC-1295 for growth hormone optimization. Consult our stacking guides or contact support for recommendations.',
  },
  {
    category: 'safety',
    question: 'Are peptides safe?',
    answer: 'Research-grade peptides with high purity (99%+) have shown excellent safety profiles in clinical studies. Side effects are typically mild and localized (e.g., injection site redness). Always consult with a healthcare provider before use.',
  },
  {
    category: 'safety',
    question: 'Are there any side effects?',
    answer: 'Side effects vary by peptide and individual. Common mild effects include injection site reactions, temporary fatigue, or increased hunger. Serious side effects are rare with properly dosed, high-purity peptides. Refer to individual product pages for specific information.',
  },
  {
    category: 'safety',
    question: 'Can I use peptides with other medications?',
    answer: 'Potential interactions depend on the specific peptides and medications involved. Always disclose peptide use to your healthcare provider and consult them before combining with prescription medications.',
  },
  {
    category: 'billing',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption.',
  },
  {
    category: 'billing',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee on all unopened products. If you receive damaged or incorrect items, contact our support team immediately for a full replacement or refund.',
  },
  {
    category: 'billing',
    question: 'Do you offer subscriptions?',
    answer: 'Yes! Subscribe & Save offers 10-15% off regular prices with flexible delivery frequencies (every 30, 60, or 90 days). You can pause, skip, or cancel anytime from your account dashboard.',
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about our products, shipping, and more
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/5 border-white/10 h-14 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Categories Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="font-display font-semibold text-foreground mb-4">Categories</h3>
              <nav className="space-y-2">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left",
                      selectedCategory === cat.id
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    <cat.icon className="w-5 h-5" />
                    <span className="font-medium">{cat.name}</span>
                  </button>
                ))}
              </nav>

              {/* Contact Card */}
              <div className="mt-8 p-6 bg-gradient-card rounded-2xl border border-white/10">
                <MessageCircle className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-display font-semibold text-foreground mb-2">Still have questions?</h4>
                <p className="text-sm text-muted-foreground mb-4">Our support team is here to help 24/7</p>
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </aside>

          {/* FAQ List */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 capitalize">
              {selectedCategory === 'all' ? 'All Questions' : `${selectedCategory} Questions`}
            </h2>

            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16">
                <HelpCircle className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground mb-4">No questions found matching your search.</p>
                <Button variant="hero-outline" onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gradient-card rounded-2xl border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-display font-semibold text-foreground pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                        openFaq === index && "rotate-180"
                      )} />
                    </button>
                    
                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      openFaq === index ? "max-h-96" : "max-h-0"
                    )}>
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Ready to Start Your <span className="gradient-text">Optimization Journey</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our catalog of research-backed peptide formulations
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/shop">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
