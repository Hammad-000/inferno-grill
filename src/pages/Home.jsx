import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "/images/sliderbest.jfif",
    "/images/slideimg1.jfif",
    "/images/slideimg2.jfif",
    "/images/slideimg3.jfif",
    "/images/slideimg5.jfif",
    "/images/slidermain.jfif",
    "/images/roasted1.jfif"
  ];

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToImage = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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

        {/* Enhanced Smooth Slider Section */}
        <div className="relative w-full max-w-7xl mx-auto mb-12">
          <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
            {/* Top Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-4xl bg-black bg-opacity-50 hover:bg-opacity-70 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              disabled={isTransitioning}
            >
              &lt;
            </button>

            {/* Smooth Slider Images */}
            <div className="relative w-full h-full">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`slider-image-${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    index === currentIndex 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-4xl bg-black bg-opacity-50 hover:bg-opacity-70 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              disabled={isTransitioning}
            >
              &gt;
            </button>


            {/* Slide Count */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-10 backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg border hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your products delivered quickly and safely to your doorstep.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Best Quality</h3>
            <p className="text-gray-600">
              We guarantee the highest quality products from trusted brands.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-gray-600">Our customer support team is always here to help you.</p>
          </div>
        </div>
      </main>

      {/* Product Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        <div className="text-center p-6 bg-white rounded-lg border hover:shadow-lg transition-all duration-300">
          <img 
            src="/images/broast1.avif" 
            alt="Broast" 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h5 className="text-xl font-semibold mb-3">Quarter Spicy Broast</h5>
          <p className="text-gray-600">Experience the zest of our quarter broast special!</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg border hover:shadow-lg transition-all duration-300">
          <img 
            src="/images/roasted3.avif" 
            alt="Slide 2" 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h5 className="text-xl font-semibold mb-3">Roasted Chicken</h5>
          <p className="text-gray-600">Experience the zest of our quarter broast special!</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg border hover:shadow-lg transition-all duration-300">
          <img 
            src="/images/slideimg3.jfif" 
            alt="Pizza" 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h5 className="text-xl font-semibold mb-3">Pepperoni Pizza</h5>
          <p className="text-gray-600">
            This pepperoni pizza recipe uses tomato sauce and oregano on a prebaked crust
          </p>
        </div>

    </section>

    <div className="text-center py-16 bg-white rounded-3xl mx-4 mb-12 border border-gray-200 shadow-sm">
  <h1 className="text-4xl font-bold text-gray-900 mb-8">OUR SPECIALTIES</h1>
  
  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto px-4">
    {[
      "/images/slideimg3.jfif",
      "/images/roasted2.jfif",
      "/images/burger2.webp",
      "/images/download.jfif",
      "/images/roasted4.jpg",
      "/images/roasted1.jfif",
      "/images/slideimg2.jfif",
      "/images/french4.webp",
      "/images/broast1.avif",
      "/images/broast2.webp",
      "/images/french2.webp",
      "/images/broast3.webp"
    ].map((src, index) => (
      <div 
        key={index}
        className="aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      >
        <img 
          src={src} 
          alt={`Menu item ${index + 1}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>

  <h2 className="text-4xl font-bold text-gray-800 mb-4 pt-5 tracking-tight">
  EXPLORE OUR FOOD

</h2>
</div>
















        

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-6 py-4">
          <div className="text-center">
            <p>&copy; 2025 Your Inferno-Grill. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;