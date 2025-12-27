import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import { FiClock, FiPackage, FiHeadphones } from "react-icons/fi";
import FooterContent from "../components/FooterContent";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const images = [
    "/images/sliderbest.jfif",
    "/images/slideimg1.jfif",
    "/images/slideimg2.jfif",
    "/images/slideimg3.jfif",
    "/images/slideimg5.jfif",
    "/images/slidermain.jfif",
    "/images/roasted1.jfif"
  ];

  const specialties = [
    "/images/slideimg3.jfif",
    "/images/roasted2.jfif",
    "/images/burger2.webp",
    "/images/download.jfif",
    "/images/roasted4.jpg",
    "/images/roasted1.jfif",
    "/images/slideimg2.jfif",
    "/images/french4.webp",
    "/images/broast2.webp",
    "/images/pizza1.avif",
    "/images/french2.webp",
    "/images/broast3.webp"
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <main className="container mx-auto px-4 sm:px-6 py-8 grow">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              Welcome to Inferno Grill
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 px-4">
            Experience culinary excellence with our handcrafted dishes made from the finest ingredients
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative w-full max-w-7xl mx-auto  mb-16">
          <div className="relative w-full h-100 md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl group">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            
            <div className="relative w-full h-full">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                >
                  <img
                    src={img}
                    alt={`slider-image-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Slide Info */}
            <div className="absolute bottom-8 left-8 text-white z-20">
              <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                <span className="font-semibold text-sm md:text-base">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/60 hover:bg-black/80 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 z-20 backdrop-blur-sm disabled:opacity-50"
              disabled={isTransitioning}
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/60 hover:bg-black/80 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 z-20 backdrop-blur-sm disabled:opacity-50"
              disabled={isTransitioning}
            >
              &gt;
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                    : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              icon: <FiClock className="text-3xl" />,
              title: "Fast Delivery",
              description: "Get your order delivered within 30 minutes or get 50% off",
              color: "from-emerald-400 to-green-500"
            },
            {
              icon: <FiPackage className="text-3xl" />,
              title: "Premium Quality",
              description: "100% fresh ingredients sourced from trusted local farms",
              color: "from-blue-400 to-indigo-500"
            },
            {
              icon: <FiHeadphones className="text-3xl" />,
              title: "24/7 Support",
              description: "Our team is always ready to assist you with your orders",
              color: "from-purple-400 to-pink-500"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-2xl transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-6 flex items-center text-amber-600 font-medium">
                  <AiOutlineCheck className="mr-2" />
                  Learn more
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Dishes */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Signature Dishes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/broast1.avif",
                title: "Quarter Spicy Broast",
                description: "Crispy, spicy, and perfectly seasoned - our specialty",
                price: "800",
                popular: true
              },
              {
                img: "/images/roasted3.avif",
                title: "Roasted Chicken",
                description: "Slow-roasted to perfection with secret herbs",
                price: "1200",
                popular: false
              },
              {
                img: "/images/pizza4.webp",
                title: "Pepperoni Pizza",
                description: "Wood-fired pizza with premium pepperoni",
                price: "1500",
                popular: true
              }
            ].map((dish, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {dish.popular && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-2xl font-bold text-white">{dish.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.title}</h3>
                  <p className="text-gray-600 mb-4  p-3">{dish.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialties Gallery */}
        <div className="relative py-14 px-4 bg-gradient-to-br from-gray-50 to-white rounded-3xl mb-16 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-100 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-100 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">OUR SPECIALTIES</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our chef's special selection of culinary masterpieces
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {specialties.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`Menu item ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">View Details</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Ready to Experience Excellence?
              </h2>
              <a
                href="/menu"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Explore Full Menu
                <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-3xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🎉 Special Offer: Get 20% Off Your First Order!
            </h3>
            <p className="text-gray-600 mb-6">
              Use code <span className="font-bold text-amber-600">WELCOME20</span> at checkout
            </p>
            <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105">
              Claim Offer
            </button>
          </div>
        </div>

      </main>

      <FooterContent />
    </div>
  );
}

export default Home;