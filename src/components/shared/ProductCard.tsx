import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Eye, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const [selectedDosage, setSelectedDosage] = useState(product.dosages[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, selectedDosage);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group relative flex flex-col bg-gradient-card rounded-2xl border border-white/5 overflow-hidden card-hover",
        featured && "lg:col-span-1"
      )}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className={cn(
            "px-3 py-1 text-xs font-semibold rounded-full",
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

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsWishlisted(!isWishlisted);
        }}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/20"
      >
        <Heart className={cn(
          "w-5 h-5 transition-colors",
          isWishlisted ? "fill-coral text-coral" : "text-foreground/60"
        )} />
      </button>

      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-navy-light to-navy-dark overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        
        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Quick View */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
          <Button variant="glass" size="sm" className="w-full">
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Purity Badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full">
            <Check className="w-3 h-3 text-primary" />
            <span className="text-xs font-mono text-primary">{product.purity} Pure</span>
          </div>
          <span className="text-xs text-muted-foreground font-accent">{product.category}</span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.benefits.slice(0, 3).map((benefit) => (
            <span
              key={benefit}
              className="px-2 py-1 text-xs bg-white/5 text-foreground/70 rounded-full"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* Dosage Selector */}
        <div className="flex gap-2 mb-4">
          {product.dosages.map((dosage) => (
            <button
              key={dosage}
              onClick={(e) => {
                e.preventDefault();
                setSelectedDosage(dosage);
              }}
              className={cn(
                "px-3 py-1.5 text-xs font-mono rounded-lg transition-all",
                selectedDosage === dosage
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-white/5 text-foreground/70 hover:bg-white/10"
              )}
            >
              {dosage}
            </button>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < Math.floor(product.rating)
                    ? "fill-gold text-gold"
                    : "fill-muted text-muted"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price & CTA */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-2xl font-display font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            variant="hero"
            size="sm"
            onClick={handleAddToCart}
            className="group/btn"
          >
            <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            Add
          </Button>
        </div>
      </div>
    </Link>
  );
};
