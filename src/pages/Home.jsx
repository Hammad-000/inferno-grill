import React, { useState, useEffect } from "react";

function Home() {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the slider
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

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); 
    }, 3000);

    
    return () => clearInterval(interval);
  }, );

  return (
    <div className="grid grid-cols-3 justify-center p-5">
      <h1 className="text-xl font-semibold mb-4">Welcome to the Home Page</h1>

     
      <div className="relative w-full h-96 overflow-hidden">
        
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-3 py-1 rounded-full"
        >
          &lt;
        </button>

        {/* Image display */}
        <div className="relative w-full h-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slider-image-${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-3000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

     
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-3 py-1 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

    


export default Home;
