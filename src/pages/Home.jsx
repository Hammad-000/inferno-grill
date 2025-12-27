import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowRight, AiOutlineStar, AiOutlineFire, AiOutlineHeart, AiOutlineClockCircle } from "react-icons/ai";
import { FiClock, FiPackage, FiHeadphones, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GiChickenLeg, GiPizzaSlice, GiHamburger } from "react-icons/gi";
import { motion } from "framer-motion";
import FooterContent from "../components/FooterContent";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const sliderRef = useRef(null);

  const images = [
    {
      src: "/images/sliderbest.jfif",
      title: "Flame-Grilled Perfection",
      subtitle: "Experience the authentic taste of fire"
    },
    {
      src: "/images/slideimg1.jfif",
      title: "Premium Quality Meats",
      subtitle: "Sourced from local farms"
    },
    {
      src: "/images/slideimg2.jfif",
      title: "Artisanal Creations",
      subtitle: "Crafted with passion"
    },
    {
      src: "/images/slideimg3.jfif",
      title: "Spicy Specialties",
      subtitle: "For the bold and brave"
    },
    {
      src: "/images/slideimg5.jfif",
      title: "Family Feast",
      subtitle: "Perfect for gatherings"
    },
    {
      src: "/images/slidermain.jfif",
      title: "Signature Recipes",
      subtitle: "Decades of tradition"
    },
    {
      src: "/images/roasted1.jfif",
      title: "Slow-Roasted Delights",
      subtitle: "Tender and flavorful"
    }
  ];

  const specialties = [
    { src: "/images/slideimg3.jfif", category: "chicken", name: "Spicy Chicken", price: "850", rating: 4.8 },
    { src: "/images/roasted2.jfif", category: "chicken", name: "Herb Roasted", price: "1200", rating: 4.9 },
    { src: "/images/burger2.webp", category: "burger", name: "Inferno Burger", price: "650", rating: 4.7 },
    { src: "/images/download.jfif", category: "appetizer", name: "Crispy Wings", price: "750", rating: 4.6 },
    { src: "/images/roasted4.jpg", category: "chicken", name: "Lemon Pepper", price: "1100", rating: 4.8 },
    { src: "/images/roasted1.jfif", category: "chicken", name: "BBQ Roasted", price: "1300", rating: 4.9 },
    { src: "/images/slideimg2.jfif", category: "special", name: "Chef's Special", price: "1500", rating: 5.0 },
    { src: "/images/french4.webp", category: "sides", name: "Crispy Fries", price: "350", rating: 4.5 },
    { src: "/images/broast2.webp", category: "chicken", name: "Crispy Broast", price: "900", rating: 4.7 },
    { src: "/images/pizza1.avif", category: "pizza", name: "Pepperoni Pizza", price: "1600", rating: 4.8 },
    { src: "/images/french2.webp", category: "sides", name: "Garlic Bread", price: "400", rating: 4.4 },
    { src: "/images/broast3.webp", category: "chicken", name: "Hot & Spicy", price: "950", rating: 4.9 }
  ];

  const categories = [
    { id: "all", name: "All", icon: <AiOutlineFire />, count: 12 },
    { id: "chicken", name: "Chicken", icon: <GiChickenLeg />, count: 5 },
    { id: "burger", name: "Burgers", icon: <GiHamburger />, count: 1 },
    { id: "pizza", name: "Pizzas", icon: <GiPizzaSlice />, count: 1 },
    { id: "sides", name: "Sides", icon: "🍟", count: 2 }
  ];

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToImage = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToMenu = () => {
    // Redirect to menu page
    window.location.href = "/menu";
  };

  const toggleFavorite = (index) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const filteredSpecialties = activeCategory === "all" 
    ? specialties 
    : specialties.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-orange-50/20 to-white flex flex-col overflow-hidden">
      <main className="container mx-auto px-4 sm:px-6 py-8 grow">
        {/* Hero Section with Particles */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-400 rounded-full"
                initial={{ y: -100, x: Math.random() * 100 }}
                animate={{ 
                  y: window.innerHeight,
                  x: Math.random() * 100 - 50,
                  rotate: 360
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                WELCOME TO
              </span>
              <br />
              <span className="text-6xl sm:text-6xl md:text-7xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                INFERNO GRILL
              </span>
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mt-8 px-4 font-light leading-relaxed"
          >
          </motion.p>
         
        </div>

        {/* Premium Image Slider */}
        <div className="relative w-full max-w-7xl mx-auto mb-20">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl group">
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 z-10"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-8 left-8 z-20">
              <div className="bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl">
                <span className="font-bold text-white text-lg">
                  {images[currentIndex].title}
                </span>
              </div>
              <div className="mt-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl inline-block">
                <span className="text-white/90 font-medium">
                  {images[currentIndex].subtitle}
                </span>
              </div>
            </div>

            {/* Image Slides */}
            <div className="relative w-full h-full">
              {images.map((imgObj, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 1.1,
                    x: index === currentIndex ? 0 : (index > currentIndex ? 100 : -100)
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={imgObj.src}
                    alt={imgObj.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Enhanced Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gradient-to-r from-black/60 to-black/40 hover:from-black/80 hover:to-black/60 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 z-20 backdrop-blur-md border border-white/20 disabled:opacity-30 group"
              disabled={isTransitioning}
            >
              <FiChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gradient-to-r from-black/60 to-black/40 hover:from-black/80 hover:to-black/60 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 z-20 backdrop-blur-md border border-white/20 disabled:opacity-30 group"
              disabled={isTransitioning}
            >
              <FiChevronRight className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Progress Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`transition-all duration-300 relative ${
                      index === currentIndex
                        ? "w-10 h-2"
                        : "w-2 h-2"
                    }`}
                    disabled={isTransitioning}
                  >
                    <div className={`absolute inset-0 rounded-full ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-amber-500 to-orange-500"
                        : "bg-white/50 hover:bg-white"
                    }`}></div>
                    {index === currentIndex && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 blur-sm"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {[
            {
              icon: <AiOutlineClockCircle className="text-3xl" />,
              title: "Lightning Fast",
              description: "30-min delivery guaranteed or 50% off",
              color: "from-emerald-400 to-green-500",
              delay: 0
            },
            {
              icon: <AiOutlineStar className="text-3xl" />,
              title: "Premium Quality",
              description: "Fresh ingredients from local farms",
              color: "from-blue-400 to-indigo-500",
              delay: 0.1
            },
            {
              icon: <FiHeadphones className="text-3xl" />,
              title: "24/7 Support",
              description: "Always here to assist you",
              color: "from-purple-400 to-pink-500",
              delay: 0.2
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-3xl transform group-hover:scale-105 transition-all duration-500 shadow-lg group-hover:shadow-2xl"></div>
              <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="flex items-center text-amber-600 font-medium group-hover:text-orange-600 transition-colors">
                  <AiOutlineArrowRight className="mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Learn more
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Dishes with 3D Effect */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Signature Dishes</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Masterpieces crafted by our award-winning chefs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/broast1.avif",
                title: "Quarter Spicy Broast",
                description: "Crispy, spicy, and perfectly seasoned - our house specialty",
                price: "800",
                time: "15-20 min",
                popular: true,
                spicy: true
              },
              {
                img: "/images/roasted3.avif",
                title: "Roasted Chicken",
                description: "Slow-roasted to perfection with secret herbs and spices",
                price: "1200",
                time: "25-30 min",
                popular: false,
                spicy: false
              },
              {
                img: "/images/pizza4.webp",
                title: "Pepperoni Pizza",
                description: "Wood-fired pizza with premium pepperoni and mozzarella",
                price: "1500",
                time: "20-25 min",
                popular: true,
                spicy: false
              }
            ].map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-red-500/10 rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={dish.img}
                      alt={dish.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {dish.popular && (
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                          <AiOutlineFire /> Popular
                        </div>
                      )}
                      {dish.spicy && (
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                          🔥 Spicy
                        </div>
                      )}
                    </div>
                    
                    {/* Favorite Button */}
                    <button 
                      onClick={() => toggleFavorite(index)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-white transition-colors shadow-lg"
                    >
                      <AiOutlineHeart className={favorites.includes(index) ? "text-red-500 fill-red-500" : "text-gray-600"} />
                    </button>
                    
                    {/* Time Badge */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <AiOutlineClockCircle /> {dish.time}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{dish.title}</h3>
                      <span className="text-2xl font-bold text-amber-600">Rs.{dish.price}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{dish.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <AiOutlineStar key={i} className="fill-current" />
                        ))}
                        <span className="text-gray-600 ml-2 text-sm">(4.8)</span>
                      </div>
                      <button 
                        onClick={goToMenu}
                        className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                       Got To Menu
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Specialties Gallery with Category Filter */}
        <div className="relative py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl mb-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100/50 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block relative">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
                  <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    OUR SPECIALTIES
                  </span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                </h1>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Discover our chef's special selection of culinary masterpieces, each with its own unique story
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-semibold">{category.name}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-gray-100'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Specialty Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredSpecialties.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-amber-300 font-bold">Rs.{item.price}</span>
                        <div className="flex items-center gap-1">
                          <AiOutlineStar className="text-yellow-400" />
                          <span className="text-white text-sm">{item.rating}</span>
                        </div>
                      </div>
                      <button 
                        onClick={goToMenu}
                        className="mt-3 w-full py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Got To Menu
                      </button>
                    </div>
                    
                    {/* Quick Info */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                      {item.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16 pt-12 border-t border-gray-200/50"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Ready to Ignite Your Taste Buds?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                Join thousands of satisfied customers who have experienced the Inferno Grill difference
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/menu"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  Explore Full Menu
                  <AiOutlineArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                </a>
                <a
                  href="/reservation"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-white text-gray-800 font-bold rounded-full border-2 border-orange-300 hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book a Table
                  <span className="text-amber-500">✨</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interactive Promo Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          
          <div className="relative z-10 p-12 text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-white font-semibold">🔥 LIMITED TIME OFFER 🔥</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              GET 25% OFF YOUR FIRST ORDER!
            </h3>
            
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Use code <span className="font-bold text-white text-2xl">INFERNO25</span> at checkout
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={goToMenu} className="px-10 py-3 bg-white text-amber-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Claim Your Discount
              </button>
              <button onClick={goToMenu} className="px-10 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                View All Offers
              </button>
            </div>
            
            {/* Countdown Timer */}
            <div className="mt-10 flex justify-center gap-4">
              {[
                { label: "Days", value: "03" },
                { label: "Hours", value: "18" },
                { label: "Minutes", value: "45" },
                { label: "Seconds", value: "22" }
              ].map((time, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{time.value}</span>
                  </div>
                  <span className="text-amber-200 text-sm mt-2 block">{time.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      <FooterContent />
    </div>
  );
}

export default Home;