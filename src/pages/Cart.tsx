import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/shared/ProductCard';
import { products } from '@/lib/products';

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  const recommendedProducts = products.slice(0, 4);

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <ShoppingBag className="w-24 h-24 text-muted-foreground/30 mx-auto mb-6" />
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like you haven't added any products yet. Explore our catalog to find the perfect peptides for your goals.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/shop">
              Start Shopping
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-navy-dark/50 border-b border-white/5">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Shopping Cart ({totalItems} items)
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.dosage}`}
                className="flex gap-6 p-6 bg-gradient-card rounded-2xl border border-white/10"
              >
                {/* Product Image */}
                <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                  <div className="w-32 h-32 bg-navy-light rounded-xl overflow-hidden">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="text-lg font-display font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-muted-foreground mt-1">
                        {item.dosage} • {item.product.purity} Pure
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Category: {item.product.category}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.product.id, item.dosage)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="flex items-end justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.dosage, item.quantity - 1)}
                        className="w-10 h-10 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-mono text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.dosage, item.quantity + 1)}
                        className="w-10 h-10 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-2xl font-display font-bold text-foreground">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ${item.product.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-8 bg-gradient-card rounded-2xl border border-white/10">
                <h2 className="text-xl font-display font-bold text-foreground mb-6">Order Summary</h2>

                {/* Discount Code */}
                <div className="flex gap-3 mb-6">
                  <Input
                    type="text"
                    placeholder="Discount code"
                    className="flex-1 bg-white/5 border-white/10"
                  />
                  <Button variant="outline">Apply</Button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-primary font-medium">
                      {totalPrice >= 75 ? 'FREE' : '$9.99'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-muted-foreground">Calculated at checkout</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between">
                    <span className="text-lg font-display font-semibold text-foreground">Total</span>
                    <span className="text-2xl font-display font-bold text-foreground">
                      ${(totalPrice + (totalPrice >= 75 ? 0 : 9.99)).toFixed(2)}
                    </span>
                  </div>
                </div>

                {totalPrice < 75 && (
                  <div className="p-4 bg-primary/10 rounded-xl mb-6">
                    <p className="text-sm text-primary text-center">
                      Add ${(75 - totalPrice).toFixed(2)} more for FREE shipping!
                    </p>
                  </div>
                )}

                <Button variant="hero" size="xl" className="w-full mb-4">
                  Checkout
                </Button>

                <Button variant="hero-outline" size="lg" className="w-full" asChild>
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="p-6 bg-gradient-card rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Secure SSL Checkout</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Free Shipping Over $75</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">30-Day Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">
            Frequently Bought Together
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
