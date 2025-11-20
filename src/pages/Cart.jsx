import React from "react";
import { useCart } from "../components/CartContext";

function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, calculateTotalPrice } = useCart();

  return (
    <div className="container mx-auto  grid-cols-2 grid py-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

       <div className="flex justify-between items-center mt-3">
            <h3 className="text-xl font-semibold">Total:</h3>
            <span className="text-xl font-semibold">${calculateTotalPrice().toFixed(2)}</span>

                <input type="text" className=" border p-3   "    placeholder ="Add your address" />


          <button className=" bold hover:text-green-700 p-3 border-2 text-l rounded bg-gray-300 border-r-green-500">Confirm Order </button>
               


          </div>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (


        
        <div className="space-y-4  ">
          {cart.map((product) => (
            <div key={product.id} className="flex gap-10  items-center border-b p-4">
              <div className="flex items-center m-5 justify-evenly gap-10 space-x-2 ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <span className="font-medium  w-30  ">{product.title }</span>
              </div>

              <div className="flex  items-center space-x-4 ">
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
         

        </div>
      )}


    </div>
  );
}

export default Cart;
