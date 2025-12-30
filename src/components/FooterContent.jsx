import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaLinkedin, FaPinterest, FaUtensils, FaTruck, FaStar, FaCreditCard } from 'react-icons/fa';

const FooterContent = () => {
  const branches = [
    { city: 'Karachi', address: 'Clifton Block 5', phone: '+92 311 0250787', hours: '10 AM - 2 AM' },
    { city: 'Lahore', address: 'DHA Phase 6', phone: '+92 311 0250788', hours: '10 AM - 1 AM' },
    { city: 'Islamabad', address: 'F-7 Markaz', phone: '+92 311 0250789', hours: '11 AM - 12 AM' },
    { city: 'Rawalpindi', address: 'Bahu Plaza', phone: '+92 311 0250790', hours: '10 AM - 11 PM' }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: <FaFacebookF />, color: 'hover:bg-blue-600', link: '#' },
    { name: 'Instagram', icon: <FaInstagram />, color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-yellow-500', link: '#' },
    { name: 'Tiktok', icon: <FaTiktok />, color: 'hover:bg-black', link: '#' },
    { name: 'Twitter', icon: <FaTwitter />, color: 'hover:bg-sky-500', link: '#' },
    { name: 'YouTube', icon: <FaYoutube />, color: 'hover:bg-red-600', link: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin />, color: 'hover:bg-blue-700', link: '#' }
  ];

  const quickLinks = [
    { title: 'Our Menu', link: '/menu' },
    { title: 'About Us', link: '/about' },
    { title: 'Careers', link: '/careers' },
    { title: 'Catering', link: '/catering' },
    { title: 'Gift Cards', link: '/gift-cards' },
    { title: 'Blog', link: '/blog' }
  ];

  const services = [
    { title: 'Free Delivery', desc: 'Orders over $25', icon: <FaTruck /> },
    { title: 'Best Quality', desc: 'Fresh ingredients', icon: <FaUtensils /> },
    { title: '24/7 Support', desc: 'Always available', icon: <FaStar /> },
    { title: 'Secure Payment', desc: '100% secure', icon: <FaCreditCard /> }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-600 to-pink-600"></div>
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                <FaUtensils className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  <span className="text-white">Inferno</span>
                  <span className="text-orange-400">Grill</span>
                </h2>
                <p className="text-sm text-gray-400">Flame-Grilled Perfection</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Serving the finest flame-grilled dishes since 2020. Our passion for quality and taste ensures every meal is an unforgettable experience.
            </p>
            
            {/* Services Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-3 hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-orange-400">{service.icon}</div>
                    <span className="text-sm font-semibold">{service.title}</span>
                  </div>
                  <p className="text-xs text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-orange-500 transition-colors"></span>
                    <span className="group-hover:translate-x-2 transition-transform">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
                />
                <button className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 hover:shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
              Our Locations
            </h3>
            <div className="space-y-4">
              {branches.map((branch, index) => (
                <div 
                  key={index}
                  className="group bg-gray-800/30 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-800 hover:border-gray-700"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-red-600/30">
                      <FaMapMarkerAlt className="text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                          {branch.city}
                        </h4>
                        <span className="text-xs bg-gradient-to-r from-orange-500/20 to-red-600/20 text-orange-300 px-2 py-1 rounded-full">
                          Open
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{branch.address}</p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <a 
                          href={`tel:${branch.phone}`}
                          className="text-xs text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1"
                        >
                          <FaPhone className="text-xs" /> {branch.phone}
                        </a>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <FaClock className="text-xs" /> {branch.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
              Contact Us
            </h3>
            
            <div className="space-y-4 mb-8">
              <a 
                href="tel:+923110250787"
                className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full flex items-center justify-center group-hover:from-orange-500 group-hover:to-red-600 transition-all">
                  <FaPhone className="text-orange-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us Anytime</p>
                  <p className="font-semibold text-lg group-hover:text-orange-300 transition-colors">
                    +92 311 0250787
                  </p>
                </div>
              </a>

              <a 
                href="mailto:inferno@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full flex items-center justify-center group-hover:from-orange-500 group-hover:to-red-600 transition-all">
                  <FaEnvelope className="text-orange-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="font-semibold text-lg group-hover:text-orange-300 transition-colors">
                    inferno@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Head Office</p>
                  <p className="font-semibold">
                    11/56 Block B, Area 51<br />
                    <span className="text-sm text-gray-400">Karachi, Pakistan</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-2">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`group relative w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                    title={social.name}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-white opacity-80 group-hover:opacity-100">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800/50 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; 2025 <span className="text-orange-400 font-bold">InfernoGrill</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Serving delicious meals across Pakistan since 2020
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-orange-400 transition-colors px-3 py-1 hover:bg-gray-800/50 rounded-lg">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors px-3 py-1 hover:bg-gray-800/50 rounded-lg">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors px-3 py-1 hover:bg-gray-800/50 rounded-lg">Cookie Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors px-3 py-1 hover:bg-gray-800/50 rounded-lg">Refund Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors px-3 py-1 hover:bg-gray-800/50 rounded-lg">Sitemap</a>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="text-xs text-gray-500">Accepted Payments:</div>
            <div className="flex gap-1">
              <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center">VISA</div>
              <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center">MC</div>
              <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center">PP</div>
            </div>
          </div>
        </div>

        {/* Mobile App CTA */}
        <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold mb-2">Get Our Mobile App</h4>
              <p className="text-gray-400 text-sm">Order faster, track deliveries, and get exclusive offers!</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-lg flex items-center gap-2 transition-colors">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-xs">▶</span>
                </div>
                Google Play
              </button>
              <button className="px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-lg flex items-center gap-2 transition-colors">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-xs">▷</span>
                </div>
                App Store
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <span className="text-white font-bold">↑</span>
      </button>

 

    </footer>
  );
};

export default FooterContent;