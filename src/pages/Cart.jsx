import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import FooterContent from "../components/FooterContent";

function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, calculateTotalPrice } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const drinkOptions = [
    { id: 'none', name: 'No drink', price: 0 },
    { id: 'water', name: 'Mineral Water', price: 50 },
    { id: 'pepsi', name: 'Pepsi', price: 60 },
    { id: 'sprite', name: 'Sprite', price: 60 },
    { id: 'diet-pepsi', name: 'Diet Pepsi', price: 60 },
  ];

  // Local state for selected drinks per product (by product id)
  const [selectedDrinks, setSelectedDrinks] = useState({});

  const handleDrinkChange = (productId, drinkId) => {
    setSelectedDrinks(prev => ({
      ...prev,
      [productId]: drinkId
    }));
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
    // Clear drink selection for removed product
    setSelectedDrinks(prev => {
      const newState = { ...prev };
      delete newState[productId];
      return newState;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Calculate total including drinks
  const calculateTotalWithDrinks = () => {
    let total = calculateTotalPrice(); // base product total
    cart.forEach(item => {
      const drinkId = selectedDrinks[item.id];
      if (drinkId && drinkId !== 'none') {
        const drink = drinkOptions.find(d => d.id === drinkId);
        if (drink) {
          total += drink.price * item.quantity;
        }
      }
    });
    return total;
  };

  // Calculate drink subtotal for display
  const calculateDrinkTotal = () => {
    let drinkTotal = 0;
    cart.forEach(item => {
      const drinkId = selectedDrinks[item.id];
      if (drinkId && drinkId !== 'none') {
        const drink = drinkOptions.find(d => d.id === drinkId);
        if (drink) {
          drinkTotal += drink.price * item.quantity;
        }
      }
    });
    return drinkTotal;
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    // Attach drink selections to order data
    const orderData = {
      customerInfo,
      items: cart.map(item => ({
        ...item,
        selectedDrink: selectedDrinks[item.id] ? 
          drinkOptions.find(d => d.id === selectedDrinks[item.id]) : null
      })),
      total: calculateTotalWithDrinks()
    };
    console.log("Order confirmed:", orderData);
    alert("Order confirmed successfully!");
  };

  const isFormValid = customerInfo.fullName && customerInfo.email && customerInfo.address && customerInfo.phone;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <p className="text-gray-500">Add some products to get started! </p>
            <a
              href="/menu"
              className="px-5 mt-3 py-3 bg-yellow-400 rounded-lg font-semibold transition-colors inline-block"
            >
              Wanna Order
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold text-gray-800">Cart Items ({cart.length})</h3>
                </div>

                <div className="divide-y">
                  {cart.map((product) => {
                    const drinkId = selectedDrinks[product.id] || 'none';
                    const selectedDrink = drinkOptions.find(d => d.id === drinkId);
                    const lineProductTotal = product.price * product.quantity;
                    const lineDrinkTotal = selectedDrink && selectedDrink.id !== 'none' 
                      ? selectedDrink.price * product.quantity 
                      : 0;
                    const lineTotal = lineProductTotal + lineDrinkTotal;

                    return (
                      <div key={product.id} className="p-6 flex flex-col sm:flex-row items-center gap-4 hover:bg-gray-50 transition-colors">
                        {/* Product Image */}
                        <div className="shrink-0">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-20 h-20 object-cover rounded-lg border"
                          />
                        </div>

                        {/* Product Info and Drink Selector */}
                        <div className="grow text-center sm:text-left">
                          <h4 className="font-semibold text-gray-800 line-clamp-2 mb-1">
                            {product.title}
                          </h4>
                          <p className="text-lg font-bold text-green-600">
                            Rs {product.price.toFixed(2)} each
                          </p>
                          {/* Drink selector */}
                          <div className="mt-2 ">
                            <label className="text-sm text-gray-600 mr-2 cursor-pointer ">Add drink:</label>
                            <select
                              value={drinkId}
                              onChange={(e) => handleDrinkChange(product.id, e.target.value)}
                              className="p-1 border rounded text-sm cursor-pointer "
                            >
                              {drinkOptions.map(option => (
                                <option key={option.id} value={option.id} className=" cursor-pointer" >
                                  {option.name} {option.price > 0 ? `(+Rs ${option.price})` : ''}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => decrementQuantity(product.id)}
                            className="w-8 h-8 flex items-center justify-center cursor-pointer bg-gray-200 rounded-full hover:bg-red-400 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <span className="text-lg font-semibold">−</span>
                          </button>
                          <span className="w-8 text-center font-medium text-gray-700">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => incrementQuantity(product.id)}
                            className="w-8 h-8 flex items-center justify-center cursor-pointer bg-gray-200 rounded-full hover:bg-green-400 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <span className="text-lg font-semibold">+</span>
                          </button>
                        </div>

                        {/* Total Price & Remove */}
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-lg font-bold text-gray-800">
                            Rs {lineTotal.toFixed(2)}
                          </span>
                          <button
                            onClick={() => handleRemove(product.id)}
                            className="text-red-500 hover:text-red-700 cursor-pointer text-sm font-medium transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Order Summary & Customer Info */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal (products)</span>
                    <span>Rs {calculateTotalPrice().toFixed(2)}</span>
                  </div>
                  {calculateDrinkTotal() > 0 && (
                    <div className="flex justify-between text-gray-600">
                      <span>Drinks</span>
                      <span>Rs {calculateDrinkTotal().toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-800">
                    <span>Total</span>
                    <span>Rs {calculateTotalWithDrinks().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Customer Information Form */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Information</h3>

                <form onSubmit={handleConfirmOrder} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={customerInfo.fullName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={customerInfo.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address *
                    </label>
                    <textarea
                      name="address"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your complete delivery address"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={customerInfo.city}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="City"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
                      isFormValid
                        ? 'bg-green-500 hover:bg-green-600 cursor-pointer'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Confirm Order - Rs {calculateTotalWithDrinks().toFixed(2)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <FooterContent />
    </div>
  );
}

export default Cart;