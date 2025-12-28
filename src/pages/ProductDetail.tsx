import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, Heart, Share2, ShoppingCart, Minus, Plus, 
  Check, Shield, Truck, RotateCcw, FileText, ChevronDown,
  Play, Download, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/shared/ProductCard';
import { getProductById, products } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const tabs = ['Benefits', 'Clinical Data', 'How to Use', 'Ingredients', 'Shipping'];

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || '');
  const { addItem } = useCart();
  
  const [selectedDosage, setSelectedDosage] = useState(product?.dosages[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('Benefits');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Product Not Found</h1>
          <Button variant="hero" asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedDosage, quantity);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-navy-dark/50 border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.shortName}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gradient-card rounded-3xl border border-white/5 overflow-hidden group">
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-6 left-6 z-10">
                  <span className={cn(
                    "px-4 py-2 text-sm font-semibold rounded-full",
                    product.badge === 'best-seller' && "bg-gradient-gold text-navy",
                    product.badge === 'new' && "bg-gradient-accent text-foreground",
                    product.badge === 'sale' && "bg-destructive text-destructive-foreground"
                  )}>
                    {product.badge === 'best-seller' && 'Best Seller'}
                    {product.badge === 'new' && 'New Formula'}
                    {product.badge === 'sale' && 'Sale'}
                  </span>
                </div>
              )}

              {/* Purity Badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-pulse-glow">
                  <span className="font-mono text-primary font-semibold">{product.purity} Pure</span>
                </div>
              </div>

              {/* Product Visual */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="relative w-40 h-56 bg-gradient-to-b from-primary/30 to-primary/10 rounded-2xl border border-primary/20 shadow-glow-lg group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-x-6 top-6 h-32 bg-primary/20 rounded-xl" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary/30 rounded-full" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    "w-20 h-20 rounded-xl border overflow-hidden transition-all",
                    selectedImage === i
                      ? "border-primary shadow-glow"
                      : "border-white/10 hover:border-white/30"
                  )}
                >
                  <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                    <div className="w-8 h-12 bg-primary/20 rounded-lg" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-sm font-accent text-primary bg-primary/10 rounded-full">
                  {product.category}
                </span>
                {product.inStock ? (
                  <span className="flex items-center gap-1 text-sm text-green-400">
                    <Check className="w-4 h-4" />
                    In Stock ({product.stockCount} available)
                  </span>
                ) : (
                  <span className="text-sm text-destructive">Out of Stock</span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {product.shortDescription}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < Math.floor(product.rating)
                          ? "fill-gold text-gold"
                          : "fill-muted text-muted"
                      )}
                    />
                  ))}
                </div>
                <span className="text-foreground font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, label: 'FDA Registered' },
                { icon: FileText, label: 'COA Included' },
                { icon: Check, label: '3rd Party Tested' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="py-6 border-y border-white/10">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-display font-bold text-foreground">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="px-3 py-1 text-sm font-semibold bg-destructive/20 text-destructive rounded-full animate-pulse">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Buy 3, Save 15% • Free shipping over $75
              </p>
            </div>

            {/* Dosage Selector */}
            <div>
              <label className="block font-medium text-foreground mb-3">Select Dosage</label>
              <div className="flex flex-wrap gap-3">
                {product.dosages.map((dosage) => (
                  <button
                    key={dosage}
                    onClick={() => setSelectedDosage(dosage)}
                    className={cn(
                      "px-6 py-3 font-mono font-medium rounded-xl border-2 transition-all",
                      selectedDosage === dosage
                        ? "bg-primary text-primary-foreground border-primary shadow-glow"
                        : "bg-white/5 text-foreground border-white/10 hover:border-primary/50"
                    )}
                  >
                    {dosage}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block font-medium text-foreground mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white/5 rounded-xl border border-white/10">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-white/10 transition-colors rounded-l-xl"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-16 text-center font-mono text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-white/10 transition-colors rounded-r-xl"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="flex-1 group"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Add to Cart
              </Button>
              <Button variant="hero-outline" size="xl" className="flex-1">
                Buy Now
              </Button>
              <Button
                variant="glass"
                size="icon"
                className="h-14 w-14"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={cn(
                  "w-6 h-6 transition-colors",
                  isWishlisted ? "fill-coral text-coral" : ""
                )} />
              </Button>
              <Button variant="glass" size="icon" className="h-14 w-14">
                <Share2 className="w-6 h-6" />
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="flex flex-wrap gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">Orders over $75</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium text-foreground">30-Day Returns</p>
                  <p className="text-sm text-muted-foreground">Money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20">
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto scrollbar-hide gap-2 border-b border-white/10 pb-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-3 font-medium rounded-xl whitespace-nowrap transition-all",
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl">
            {activeTab === 'Benefits' && (
              <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{benefit}</h4>
                      <p className="text-sm text-muted-foreground">
                        Clinically proven to enhance {benefit.toLowerCase()} through targeted cellular mechanisms.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'Clinical Data' && (
              <div className="space-y-6 animate-fade-up">
                <p className="text-muted-foreground">
                  {product.description}
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-display font-semibold text-foreground mb-4">Research Highlights</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      15+ peer-reviewed clinical studies
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      Demonstrated efficacy in tissue repair acceleration
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      Minimal side effects in controlled studies
                    </li>
                  </ul>
                  <Button variant="hero-outline" className="mt-6">
                    <Download className="w-4 h-4 mr-2" />
                    Download Research Summary
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'How to Use' && (
              <div className="space-y-6 animate-fade-up">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-display font-semibold text-foreground mb-4">Administration Guidelines</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-mono text-primary font-bold">1</span>
                      <div>
                        <p className="font-medium text-foreground">Reconstitution</p>
                        <p className="text-sm text-muted-foreground">Add bacteriostatic water as directed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-mono text-primary font-bold">2</span>
                      <div>
                        <p className="font-medium text-foreground">Dosage</p>
                        <p className="text-sm text-muted-foreground">Follow recommended dosage based on body weight</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-mono text-primary font-bold">3</span>
                      <div>
                        <p className="font-medium text-foreground">Timing</p>
                        <p className="text-sm text-muted-foreground">Administer once daily, preferably in the morning</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="hero-outline">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Tutorial Video
                </Button>
              </div>
            )}

            {activeTab === 'Ingredients' && (
              <div className="space-y-6 animate-fade-up">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-display font-semibold text-foreground mb-4">Active Ingredients</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-mono text-primary">{product.shortName}</p>
                      <p className="text-sm text-muted-foreground">Primary active peptide compound</p>
                    </div>
                    <div>
                      <p className="font-mono text-foreground">Purity: {product.purity}</p>
                      <p className="text-sm text-muted-foreground">Verified by HPLC analysis</p>
                    </div>
                  </div>
                </div>
                <Button variant="hero-outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificate of Analysis
                </Button>
              </div>
            )}

            {activeTab === 'Shipping' && (
              <div className="space-y-6 animate-fade-up">
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: 'Standard', price: 'Free over $75', time: '5-7 business days' },
                    { label: 'Express', price: '$15', time: '2-3 business days' },
                    { label: 'Priority', price: '$30', time: '1-2 business days' },
                  ].map((option) => (
                    <div key={option.label} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <h4 className="font-medium text-foreground mb-2">{option.label}</h4>
                      <p className="text-primary font-mono">{option.price}</p>
                      <p className="text-sm text-muted-foreground mt-1">{option.time}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  All orders are shipped in discreet, temperature-controlled packaging to maintain product integrity.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              Complete Your Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
