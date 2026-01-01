import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [totalItems, setTotalItems] = useState(0);

  // Calculate total items whenever cart changes
  useEffect(() => {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(count);
  }, [cart]);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Show notification
  const showCartNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      let newCart;
      
      if (existingProduct) {
        newCart = prevCart.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
        showCartNotification(`Increased quantity of ${product.title} in cart!`);
      } else {
        newCart = [...prevCart, { ...product, quantity: 1 }];
        showCartNotification(`${product.title} added to cart!`);
      }
      
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    const productToRemove = cart.find(item => item.id === productId);
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== productId);
      if (productToRemove) {
        showCartNotification(`${productToRemove.title} removed from cart!`);
      }
      return newCart;
    });
  };

  const incrementQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
    if (product) {
      showCartNotification(`Increased ${product.title} quantity!`);
    }
  };

  const decrementQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    if (product && product.quantity > 1) {
      showCartNotification(`Decreased ${product.title} quantity!`);
    }
  };

  const clearCart = () => {
    setCart([]);
    showCartNotification("Cart cleared!");
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ 
        cart, 
        totalItems,
        addToCart, 
        removeFromCart, 
        incrementQuantity, 
        decrementQuantity,
        clearCart,
        calculateTotalPrice 
      }}
    >
      {children}
      
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-24 right-6 z-50 animate-slideInRight">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm">
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">🛒</span>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-white">{notificationMessage}</p>
              <p className="text-sm text-white/80 mt-1">
                Cart now has {totalItems} item{totalItems !== 1 ? 's' : ''}
              </p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-white/70 hover:text-white text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);