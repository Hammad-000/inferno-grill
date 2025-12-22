import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContent = () => {
  const branches = [
    { city: 'Karachi', address: 'Clifton Block 5' },
    { city: 'Lahore', address: 'DHA Phase 6' },
    { city: 'Islamabad', address: 'F-7 Markaz' },


  ];

  const socialMedia = [
    { name: 'Facebook', icon: <FaFacebookF />, color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: <FaInstagram />, color: 'hover:text-pink-500' },
    { name: 'Tiktok', icon: <FaTiktok />, color: 'hover:text-gray-800' },
    { name: 'Twitter', icon: <FaTwitter />, color: 'hover:text-blue-400' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-600"> <h2></h2></div>
    

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 max-h-5/12 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
          {/* Branches Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Our Branches
              </h3>
            </div>
            <div className="space-y-4">
              {branches.map((branch, index) => (
                <div 
                  key={index}
                  className="group p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer transform hover:translate-x-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-125 transition-transform"></div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                        {branch.city}
                      </h4>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300">
                        {branch.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Contact Us
              </h3>
            </div>
            <div className="space-y-6">
              <a 
                href="tel:+923110250787"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group justify-center lg:justify-start"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 transition-all">
                  <FaPhone className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="font-semibold text-lg group-hover:text-orange-300 transition-colors">
                    +92 311 0250787
                  </p>
                </div>
              </a>

              <a 
                href="mailto:inferno@gmail.com"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group justify-center lg:justify-start"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 transition-all">
                  <FaEnvelope className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="font-semibold text-lg group-hover:text-orange-300 transition-colors">
                    inferno@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group justify-center lg:justify-start">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 transition-all">
                  <FaMapMarkerAlt className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Visit Us</p>
                  <p className="font-semibold">
                    11/56 Block B, Area 51
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <FaTwitter className="text-white text-lg" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Follow Us
              </h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-md mx-auto lg:mx-0">
              Stay connected with us for the latest updates, offers, and mouth-watering content!
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`group relative w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-2 ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-xl transform group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-10">
              <h4 className="font-semibold mb-4 text-center lg:text-left">Subscribe to Our Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative border-t border-gray-700/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-gray-400">
              &copy; 2025 <span className="text-orange-400 font-bold">Inferno-Grill</span>. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;