import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/lib/products';

export interface CartItem {
  product: Product;
  quantity: number;
  dosage: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, dosage: string, quantity?: number) => void;
  removeItem: (productId: string, dosage: string) => void;
  updateQuantity: (productId: string, dosage: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Product, dosage: string, quantity = 1) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.dosage === dosage
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prev, { product, quantity, dosage }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, dosage: string) => {
    setItems(prev => prev.filter(
      item => !(item.product.id === productId && item.dosage === dosage)
    ));
  };

  const updateQuantity = (productId: string, dosage: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId, dosage);
      return;
    }

    setItems(prev => prev.map(item => {
      if (item.product.id === productId && item.dosage === dosage) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isOpen,
      setIsOpen,
      totalItems,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
