import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/slidermain.jfif",
    "/images/slideimg1.jfif",
    "/images/slideimg2.jfif",
    "/images/slideimg3.jfif",
    "/images/slideimg5.jfif",
    "/images/sliderbest.jfif"
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, );

  return (
    <div className="min-h-screen bg-gray-50">
     
  

     
      <main className="container mx-auto px-6 py-8">
      
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing products and exclusive deals. Shop the latest trends with us!
          </p>
        </div>

      
        <div className="relative w-full max-w-6xl mx-auto mb-12">
   
          <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
       
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-4xl bg-black bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-full transition-all duration-300"
            >
              &lt;
            </button>

     
            <div className="relative w-full h-full">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`slider-image-${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

   
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-4xl bg-black bg-opacity-50 hover:bg-opacity-70 px-4 py-2 rounded-full transition-all duration-300"
            >
              &gt;
            </button>

        
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-white scale-125" 
                      : "bg-white bg-opacity-50 hover:bg-opacity-75"
                  }`}
                />
              ))}
            </div>

    
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-10">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">Get your products delivered quickly and safely to your doorstep.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Best Quality</h3>
            <p className="text-gray-600">We guarantee the highest quality products from trusted brands.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-gray-600">Our customer support team is always here to help you.</p>
          </div>
        </div>
      </main>

    
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p>&copy; 2025 Your Inferno-Grill. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;