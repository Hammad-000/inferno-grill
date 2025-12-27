import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Users,
  Star,
  Award,
  Truck,
  Shield,
  Heart
} from 'lucide-react';
import FooterContent from '../components/FooterContent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+92 123 456 799", "+92 123 456 217"],
      color: "from-red-500 to-orange-500",
      gradient: "bg-gradient-to-br from-red-500 to-orange-500",
      link: "tel:+92123456799"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["inferno@gmail.com", "support@inferno.com"],
      color: "from-yellow-500 to-red-500",
      gradient: "bg-gradient-to-br from-yellow-500 to-red-500",
      link: "mailto:inferno@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["11/56 Block B", "Area 51, Tech Park", "Karachi, Pakistan"],
      color: "from-orange-500 to-pink-500",
      gradient: "bg-gradient-to-br from-orange-500 to-pink-500",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Mon - Fri: 10:00 AM - 02:00 PM", "Sat - Sun: 10:00 AM - 05:00 AM"],
      color: "from-pink-500 to-purple-500",
      gradient: "bg-gradient-to-br from-pink-500 to-purple-500",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", color: "hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30", link: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", color: "hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/30", link: "#" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", color: "hover:bg-gradient-to-br hover:from-pink-600 hover:via-red-500 hover:to-yellow-500 hover:shadow-lg hover:shadow-pink-500/30", link: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/30", link: "#" },
    { icon: <Globe className="w-5 h-5" />, label: "Website", color: "hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-800/30", link: "#" }
  ];

  const features = [
    { icon: <Truck className="w-6 h-6" />, title: "Fast Delivery", desc: "30-45 mins delivery" },
    { icon: <Shield className="w-6 h-6" />, title: "Quality Guaranteed", desc: "100% fresh ingredients" },
    { icon: <Award className="w-6 h-6" />, title: "Award Winning", desc: "Best restaurant 2024" },
    { icon: <Users className="w-6 h-6" />, title: "24/7 Support", desc: "Always here to help" }
  ];

  const testimonials = [
    { name: "Sarah Khan", text: "Best food delivery experience! Always fresh and on time.", rating: 5 },
    { name: "Ali Ahmed", text: "Their customer service is exceptional. Highly recommended!", rating: 5 },
    { name: "Fatima Zahra", text: "The quality of food is consistently amazing.", rating: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-orange-800 to-amber-700 py-16 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get In <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-10">
            We're always here to serve you! Whether you have questions, feedback, or need assistance, 
            our team is ready to help you experience the best of InfernoGrill.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact-form" 
              className="px-8 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Send Message
            </a>
            <a 
              href="tel:+92123456799" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="max-w-3xl mx-auto px-4 py-6 animate-fade-in">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 flex items-center gap-4 shadow-xl">
            <CheckCircle className="w-10 h-10" />
            <div className="flex-1">
              <h3 className="text-xl font-bold">Message Sent Successfully!</h3>
              <p>Our team will get back to you within 24 hours. Check your email for updates!</p>
            </div>
          </div>
        </div>
      )}

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center mb-4">
                <div className="text-red-600">{feature.icon}</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 ${info.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${info.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.link && (
                        <a 
                          href={info.link}
                          className="inline-block mt-3 text-red-600 hover:text-red-700 font-semibold text-sm hover:underline"
                        >
                          {info.title.includes('Call') ? 'Click to Call' : 
                           info.title.includes('Email') ? 'Send Email' : 
                           'View on Map'} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Join Our Community
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`p-4 bg-gray-800 rounded-xl text-gray-300 hover:text-white transition-all duration-300 ${social.color} group relative overflow-hidden`}
                    aria-label={social.label}
                  >
                    <div className="relative z-10">{social.icon}</div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:bottom-2 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Follow us for daily specials, recipes, and updates!
              </p>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                What Our Customers Say
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-orange-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-2">"{testimonial.text}"</p>
                    <p className="font-bold text-gray-900">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div id="contact-form" className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Send Us a Message</h2>
                    <p className="text-orange-100">Fill out the form below and we'll get back to you soon</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50"
                        placeholder="+92 300 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                        <option value="catering">Catering Service</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 resize-none"
                      placeholder="Tell us about your inquiry, feedback, or special requests..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                    <span className="ml-2">→</span>
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-sm">
                    <span className="font-semibold">Note:</span> We typically respond within 2-4 hours during business hours.
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is your delivery time?",
                      a: "We deliver within 30-45 minutes in our service areas. During peak hours, it might take up to 60 minutes."
                    },
                    {
                      q: "Do you offer catering services?",
                      a: "Yes! We offer catering for events from 20 to 500 people. Contact us at least 48 hours in advance."
                    },
                    {
                      q: "Can I modify or cancel my order?",
                      a: "You can modify or cancel your order within 5 minutes of placing it through our app or by calling us directly."
                    },
                    {
                      q: "What payment methods do you accept?",
                      a: "We accept cash on delivery, credit/debit cards, mobile payments, and online bank transfers."
                    },
                    {
                      q: "Are your ingredients halal?",
                      a: "Yes, all our meat and ingredients are 100% halal certified from trusted suppliers."
                    }
                  ].map((faq, index) => (
                    <div 
                      key={index} 
                      className={`bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'ring-2 ring-orange-500' : ''}`}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-700/50 transition-colors"
                      >
                        <span className="font-semibold text-white text-lg">{faq.q}</span>
                        <span className={`text-orange-500 font-bold text-xl transition-transform ${activeFAQ === index ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </button>
                      <div className={`px-5 transition-all duration-300 ${activeFAQ === index ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                        <p className="text-gray-300">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Location Section */}
        <div className="mt-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Visit Our Flagship Restaurant</h3>
                <p className="text-gray-600 mt-2">Experience our delicious food in our beautifully designed space</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-semibold">Open Now</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Map Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-500/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                        <MapPin className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">InfernoGrill Flagship</h4>
                      <p className="text-gray-700">Area 51, Block B, Karachi</p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors shadow-lg"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    Location Details
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <p>📍 11/56 Block B, Area 51 Tech Park</p>
                    <p>🏙️ Karachi, Pakistan</p>
                    <p>🅿️ Free parking available</p>
                    <p>🚇 Near Tech Park Metro Station</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-600" />
                    Restaurant Hours
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">9 AM - 11 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Saturday - Sunday</span>
                      <span className="font-semibold text-gray-900">10 AM - 12 AM</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Special Features</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Family-friendly seating
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Outdoor terrace
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Private dining rooms
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Free Wi-Fi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Experience the Best?
              </h3>
              <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
                Order now and get 20% off your first delivery! Use code: INFERNO20
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/menu" 
                  className="px-8 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Order Online Now
                </a>
                <a 
                  href="tel:+92123456799" 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  Call for Reservation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContent />

      {/* Add animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>

    </div>
  );
};

export default Contact;