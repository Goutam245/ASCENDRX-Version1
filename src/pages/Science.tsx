import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, Download, Beaker, Shield, FileText, ArrowRight,
  Search, BookOpen, ExternalLink, Check, Award, Microscope
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import scienceBg from '@/assets/science-bg.jpg';

const researchStudies = [
  {
    title: 'BPC-157: A Review of Regenerative Properties',
    journal: 'Journal of Peptide Science',
    year: 2023,
    category: 'Recovery',
    abstract: 'Comprehensive analysis of BPC-157 tissue repair mechanisms and clinical applications.',
    link: '#',
  },
  {
    title: 'Growth Hormone Secretagogues: Ipamorelin Efficacy Study',
    journal: 'Endocrine Reviews',
    year: 2023,
    category: 'Muscle Growth',
    abstract: 'Double-blind study examining GH release patterns with selective secretagogues.',
    link: '#',
  },
  {
    title: 'Thymosin Beta-4 in Tissue Regeneration',
    journal: 'Nature Medicine',
    year: 2022,
    category: 'Recovery',
    abstract: 'Molecular mechanisms of TB-500 in accelerating wound healing and cellular migration.',
    link: '#',
  },
  {
    title: 'Epithalon and Telomerase Activation',
    journal: 'Aging Cell',
    year: 2023,
    category: 'Longevity',
    abstract: 'Investigation of telomere preservation through tetrapeptide supplementation.',
    link: '#',
  },
  {
    title: 'Nootropic Peptides: Selank Cognitive Enhancement',
    journal: 'Neuroscience Letters',
    year: 2022,
    category: 'Cognitive',
    abstract: 'Neural pathway modulation and anxiolytic effects of synthetic tuftsin analogs.',
    link: '#',
  },
  {
    title: 'GHK-Cu: Copper Peptide Skin Regeneration',
    journal: 'Dermatologic Surgery',
    year: 2023,
    category: 'Anti-Aging',
    abstract: 'Clinical outcomes of copper peptide therapy for collagen synthesis.',
    link: '#',
  },
];

const testingSteps = [
  { step: 1, title: 'Identity Verification', description: 'Mass spectrometry confirms molecular structure' },
  { step: 2, title: 'HPLC Purity Analysis', description: 'High-performance liquid chromatography testing' },
  { step: 3, title: 'Sterility Testing', description: 'USP <71> sterility testing protocols' },
  { step: 4, title: 'Endotoxin Screening', description: 'LAL testing for bacterial endotoxins' },
  { step: 5, title: 'Heavy Metal Analysis', description: 'ICP-MS testing for contaminants' },
  { step: 6, title: 'Peptide Content', description: 'Amino acid analysis verification' },
  { step: 7, title: 'Stability Testing', description: 'Accelerated stability protocols' },
];

const Science = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openAccordion, setOpenAccordion] = useState<string | null>('how-peptides-work');

  const categories = ['All', 'Recovery', 'Muscle Growth', 'Cognitive', 'Longevity', 'Anti-Aging'];

  const filteredStudies = researchStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={scienceBg} alt="Science Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/90 to-background" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up">
              Evidence-Based <span className="gradient-text">Formulations</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-200">
              Every product backed by peer-reviewed research. Explore our comprehensive library of 200+ clinical studies.
            </p>
          </div>
        </div>
      </section>

      {/* How Peptides Work */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-background via-mint/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                How <span className="gradient-text">Peptides Work</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Understanding the science behind peptide therapy
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Microscope,
                  title: 'Cellular Signaling',
                  description: 'Peptides bind to specific cell receptors, triggering targeted biological responses.',
                },
                {
                  icon: Beaker,
                  title: 'Natural Processes',
                  description: 'Work with your body\'s existing pathways to enhance function, not override it.',
                },
                {
                  icon: Award,
                  title: 'Precision Targeting',
                  description: 'Specific amino acid sequences ensure accurate delivery to target tissues.',
                },
              ].map((item) => (
                <div key={item.title} className="p-8 bg-gradient-card rounded-2xl border border-white/10 text-center card-hover">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {[
                {
                  id: 'how-peptides-work',
                  title: 'What are Peptides?',
                  content: 'Peptides are short chains of amino acids (2-50 amino acids) that act as signaling molecules in your body. They bind to specific receptors on cell surfaces, triggering targeted biological responses. Unlike hormones that can have widespread effects, peptides work with precise specificity.',
                },
                {
                  id: 'bioavailability',
                  title: 'Bioavailability & Absorption',
                  content: 'Peptides are typically administered via subcutaneous injection for maximum bioavailability (95%+). Oral peptides face degradation in the digestive system, reducing efficacy. Some newer formulations use specialized delivery systems to improve oral bioavailability.',
                },
                {
                  id: 'safety-profile',
                  title: 'Safety & Side Effects',
                  content: 'Research-grade peptides with 99%+ purity show excellent safety profiles in clinical studies. Common side effects are typically mild and localized (injection site redness). Always consult with a healthcare provider before starting any peptide protocol.',
                },
              ].map((item) => (
                <div key={item.id} className="bg-gradient-card rounded-2xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-display font-semibold text-foreground">{item.title}</span>
                    <ChevronDown className={cn(
                      "w-6 h-6 text-muted-foreground transition-transform",
                      openAccordion === item.id && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    openAccordion === item.id ? "max-h-48" : "max-h-0"
                  )}>
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing Standards */}
      <section id="testing" className="py-24 bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our 7-Step <span className="gradient-text">Testing Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every batch undergoes rigorous quality assurance before release
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testingSteps.slice(0, 4).map((step) => (
                <div key={step.step} className="relative p-6 bg-gradient-card rounded-2xl border border-white/10 card-hover">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-mono font-bold text-primary-foreground shadow-glow">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {testingSteps.slice(4).map((step) => (
                <div key={step.step} className="relative p-6 bg-gradient-card rounded-2xl border border-white/10 card-hover">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-mono font-bold text-primary-foreground shadow-glow">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-primary/10 rounded-2xl border border-primary/30 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Check className="w-6 h-6 text-primary" />
                <span className="text-xl font-display font-semibold text-foreground">99.9%+ Purity Standard</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Only batches meeting our stringent purity criteria are released for sale
              </p>
              <Button variant="hero">
                <Download className="w-4 h-4 mr-2" />
                Download Sample COA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Library */}
      <section id="research" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Research <span className="gradient-text">Library</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access peer-reviewed studies backing our formulations
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search 200+ studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-white/5 border-white/10 h-12"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground shadow-glow"
                        : "bg-white/5 text-muted-foreground hover:bg-white/10"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Studies Grid */}
          <div className="max-w-4xl mx-auto grid gap-4">
            {filteredStudies.map((study, index) => (
              <div key={index} className="p-6 bg-gradient-card rounded-2xl border border-white/10 card-hover">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                        {study.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{study.year}</span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">{study.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{study.journal}</p>
                    <p className="text-muted-foreground">{study.abstract}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="flex-shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg">
              <BookOpen className="w-5 h-5 mr-2" />
              View Full Library (200+ Studies)
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-dark via-purple/20 to-navy-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Experience <span className="gradient-text">The Science</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our catalog of research-backed peptide formulations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/shop">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">Contact Our Scientists</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;
