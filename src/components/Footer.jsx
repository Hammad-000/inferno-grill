import React from 'react';

const Footer = () => {
    return (
        
            <footer className="bg-gray-800 text-white">
  <div className="container mx-auto px-6 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start max-w-4xl mx-auto">
      {/* Branches Section */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-4">Our Branches</h3>
        <ul className="space-y-2">
          {['Karachi', 'Lahore', 'Islamabad', 'Sukkhar', 'Queeta'].map((city, index) => (
            <li key={index}>
              <p className="cursor-pointer hover:text-gray-300 transition-colors mb-1">
                {city}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-4">Contact</h3>
        <ul className="space-y-2">
          <li>
            <p className="cursor-pointer hover:text-gray-300 transition-colors mb-1">
              +923110250787
            </p>
          </li>
          <li>
            <p className="cursor-pointer hover:text-gray-300 transition-colors mb-1">
              inferno@gmail.com
            </p>
          </li>
          <li>
            <p className="cursor-pointer hover:text-gray-300 transition-colors mb-1">
              11/56 block b area51
            </p>
          </li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <ul className="space-y-3">
          {[
            { name: 'Facebook', icon: '/images/facebook.png' },
            { name: 'Instagram', icon: '/images/instagram.png' },
            { name: 'Tiktok', icon: '/images/tik-tok (1).png' },
            { name: 'Twitter', icon: '/images/twitter.png' }
          ].map((social, index) => (
            <li key={index}>
              <div className="flex items-center space-x-3 cursor-pointer hover:text-gray-300 transition-colors justify-center md:justify-start">
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="w-5 h-5"
                />
                <span>{social.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="bg-black py-4">
    <div className="container mx-auto px-6">
      <p className="text-center text-sm md:text-base">
        &copy; 2025 Your Inferno-Grill. All rights reserved.
      </p>
    </div>
  </div>
</footer>
        
    );
};

export default Footer;