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
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      details: ["+92 123456799 ", "+92 123456217"],
      color: "bg-blue-100 text-blue-600",
      link: "tel:+92 1234563279"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["inferno@gmail.com", "support@inferno.com"],
      color: "bg-green-100 text-green-600",
      link: "mailto:inferno@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: ["11/56 Block B", "Area 51, Tech Park", "Karachi, Pakistan"],
      color: "bg-purple-100 text-purple-600",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "bg-orange-100 text-orange-600",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", color: "hover:bg-blue-600", link: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", color: "hover:bg-sky-500", link: "#" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", color: "hover:bg-pink-600", link: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "hover:bg-blue-700", link: "#" },
    { icon: <Globe className="w-5 h-5" />, label: "Website", color: "hover:bg-gray-700", link: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-500 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="max-w-3xl mx-auto mb-8 animate-fade-in">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
                <p className="text-green-700">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${info.color}`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                    {info.link && (
                      <a 
                        href={info.link}
                        className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Click to {info.title.includes('Phone') ? 'Call' : info.title.includes('Email') ? 'Email' : 'View Map'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`p-3 bg-gray-100 hover:text-white rounded-xl transition-all duration-300 ${social.color} group`}
                    aria-label={social.label}
                  >
                    <div className="text-gray-600 group-hover:text-white">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="yourname"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, questions, or concerns..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>

                <p className="text-gray-500 text-sm text-center mt-6">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    q: "What is your typical response time?",
                    a: "We respond to all inquiries within 24 hours during business days."
                  },
                  {
                    q: "Do you offer emergency support?",
                    a: "Yes, emergency support is available 24/7 for premium clients."
                  },
                  {
                    q: "How can I track my support request?",
                    a: "You'll receive a tracking number via email once your request is submitted."
                  },
                  {
                    q: "What are your business hours?",
                    a: "Our team is available Monday through Friday, 9:00 AM to 6:00 PM PST."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Our Office</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">Area 51, Block B</p>
                    <p className="text-gray-600">Karachi, Pakistan</p>
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Open in Maps
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Office Location</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>11/56 Block B</p>
                    <p>Area 51 Tech Park</p>
                    <p>Karachi, Pakistan</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Parking Information</h4>
                  <p className="text-gray-600">Free parking available in the basement garage. Visitor parking on levels 1-3.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Public Transport</h4>
                  <p className="text-gray-600">10 min walk from Tech Park Metro Station. Bus routes 101, 205 stop nearby.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600">
              Need immediate assistance? Call us at{" "}
              <a href="tel:+921234679101" className="text-blue-600 hover:text-blue-800 font-semibold">
                +92 123456799
              </a>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} Inferno. All rights reserved.
            </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Contact;