import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navigation = [
  { 
    name: 'Shop', 
    href: '/shop',
    megaMenu: true,
    categories: [
      { name: 'All Products', href: '/shop', description: 'Browse our complete catalog' },
      { name: 'Recovery', href: '/shop?category=Recovery', description: 'Accelerate healing & repair' },
      { name: 'Muscle Growth', href: '/shop?category=Muscle+Growth', description: 'Build lean muscle mass' },
      { name: 'Cognitive', href: '/shop?category=Cognitive', description: 'Enhance focus & clarity' },
      { name: 'Longevity', href: '/shop?category=Longevity', description: 'Optimize cellular health' },
      { name: 'Anti-Aging', href: '/shop?category=Anti-Aging', description: 'Turn back the clock' },
    ]
  },
  { 
    name: 'Science', 
    href: '/science',
    megaMenu: true,
    categories: [
      { name: 'How It Works', href: '/science#how-it-works', description: 'Understand peptide science' },
      { name: 'Research Library', href: '/science#research', description: 'Peer-reviewed studies' },
      { name: 'Testing Standards', href: '/science#testing', description: 'Our quality assurance' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { setIsOpen, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-primary text-primary-foreground text-center py-2 text-sm font-medium">
        <p>Free shipping on orders over $75 | Use code ASCEND15 for 15% off</p>
      </div>

      <header 
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-navy-dark/95 backdrop-blur-xl shadow-lg border-b border-white/5" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <span className="text-2xl font-display font-bold text-foreground tracking-tight">
                  ASCEND<span className="text-primary">R</span>X
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors link-underline py-2",
                      location.pathname === item.href 
                        ? "text-primary" 
                        : "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {item.name}
                    {item.megaMenu && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        activeDropdown === item.name && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {item.megaMenu && activeDropdown === item.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-fade-in">
                      <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-card min-w-[320px]">
                        <div className="grid gap-2">
                          {item.categories?.map((cat) => (
                            <Link
                              key={cat.name}
                              to={cat.href}
                              className="flex flex-col gap-1 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {cat.name}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {cat.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
                <Heart className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative text-foreground/80 hover:text-foreground"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative text-foreground/80 hover:text-foreground"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[120px] bg-navy-dark/98 backdrop-blur-xl z-40 animate-fade-in">
            <nav className="container mx-auto px-4 py-8">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.megaMenu && (
                      <div className="pl-4 border-l border-white/10 mt-2 space-y-2">
                        {item.categories?.map((cat) => (
                          <Link
                            key={cat.name}
                            to={cat.href}
                            className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex gap-4">
                  <Button variant="hero" className="flex-1">Sign In</Button>
                  <Button variant="hero-outline" className="flex-1">Register</Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
