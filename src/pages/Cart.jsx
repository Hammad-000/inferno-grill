import React from "react";
import { useCart } from "../components/CartContext"; // Correct path to CartContext

function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, calculateTotalPrice } = useCart();

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((product) => (
            <div key={product.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <span className="font-medium">{product.title}</span>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decrementQuantity(product.id)}
                  className="px-2 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
                >
                  -
                </button>
                <span className="font-medium">{product.quantity}</span>
                <button
                  onClick={() => incrementQuantity(product.id)}
                  className="px-2 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <span className="font-medium">${(product.price * product.quantity).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-semibold">Total:</h3>
            <span className="text-xl font-semibold">${calculateTotalPrice().toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
