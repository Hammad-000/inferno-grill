import React from "react";
import FooterContent from "../components/FooterContent";
import { 
  FaUsers, 
  FaClock, 
  FaStar, 
  FaTruck, 
  FaCheckCircle,
  FaLeaf,
  FaHeart,
  FaRocket,
  FaAward,
  FaPhone,
  FaShoppingCart,
  FaUtensils,
  FaCrown
} from "react-icons/fa";

function About() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      description: "With over 15 years in the culinary industry, John founded our restaurant with a vision to bring authentic flavors to every home.",
      expertise: "Culinary Innovation & Business Strategy",
      icon: <FaCrown className="text-white" />
    },
    {
      name: "Sarah Johnson",
      role: "Head Chef",
      description: "Trained in Michelin-star restaurants, Sarah brings world-class culinary expertise to our kitchen.",
      expertise: "Gourmet Cuisine & Recipe Development",
      icon: <FaUtensils className="text-white" />
    },
    {
      name: "Mike Chen",
      role: "Operations Manager",
      description: "Mike ensures our operations run smoothly from kitchen to delivery, maintaining our high standards.",
      expertise: "Supply Chain & Quality Control",
      icon: <FaTruck className="text-white" />
    },
    {
      name: "Emily Davis",
      role: "Customer Experience Manager",
      description: "Emily leads our customer service team, ensuring every customer has an exceptional experience.",
      expertise: "Customer Relations & Service Excellence",
      icon: <FaUsers className="text-white" />
    },
    {
      name: "David Wilson",
      role: "Marketing Director",
      description: "David spreads the word about our delicious offerings and builds our community presence.",
      expertise: "Digital Marketing & Brand Strategy",
      icon: <FaRocket className="text-white" />
    },
    {
      name: "Lisa Rodriguez",
      role: "Head of Nutrition",
      description: "Lisa ensures all our meals are not only delicious but also nutritionally balanced and healthy.",
      expertise: "Nutrition Science & Dietary Planning",
      icon: <FaLeaf className="text-white" />
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded with a small kitchen and big dreams", icon: "🚀" },
    { year: "2021", event: "Expanded to online delivery services", icon: "📱" },
    { year: "2022", event: "Served over 50,000 happy customers", icon: "🎉" },
    { year: "2023", event: "Launched mobile app for easier ordering", icon: "📲" },
    { year: "2024", event: "Opening second location downtown", icon: "🏙️" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We source only the finest ingredients and maintain rigorous quality standards in every dish.",
      icon: <FaAward className="text-amber-600 text-2xl" />
    },
    {
      title: "Customer Love",
      description: "Our customers are at the heart of everything we do. Their satisfaction drives our innovation.",
      icon: <FaHeart className="text-red-500 text-2xl" />
    },
    {
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and supporting local farmers and producers.",
      icon: <FaLeaf className="text-green-500 text-2xl" />
    },
    {
      title: "Innovation",
      description: "Constantly evolving our menu with creative dishes while honoring traditional flavors.",
      icon: <FaRocket className="text-orange-500 text-2xl" />
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: <FaUsers className="text-2xl" /> },
    { number: "100+", label: "Menu Items", icon: <FaUtensils className="text-2xl" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <FaStar className="text-2xl" /> },
    { number: "15min", label: "Average Delivery Time", icon: <FaTruck className="text-2xl" /> }
  ];

  const qualityFeatures = [
    { text: "Locally sourced fresh ingredients", icon: <FaCheckCircle className="text-green-500" /> },
    { text: "Daily preparation with no preservatives", icon: <FaCheckCircle className="text-green-500" /> },
    { text: "Rigorous quality checks at every stage", icon: <FaCheckCircle className="text-green-500" /> },
    { text: "Sustainable and ethical sourcing", icon: <FaCheckCircle className="text-green-500" /> },
    { text: "Continuous recipe improvement", icon: <FaCheckCircle className="text-green-500" /> },
    { text: "Temperature-controlled delivery", icon: <FaCheckCircle className="text-green-500" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Our <span className="text-yellow-300">Delicious</span> Story
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed px-4">
            From a humble family kitchen to serving thousands of food lovers, 
            we're passionate about creating memorable dining experiences one plate at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 px-4">
            <a
              href="/menu"
              className="px-8 sm:px-12 py-3 sm:py-4 bg-white text-red-600 hover:bg-transparent hover:text-white hover:border-2 border-white rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Explore Our Menu
            </a>
            <a
              href="/contact"
              className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-red-600 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-amber-600">{stat.icon}</div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
                  <span className="text-amber-800 font-semibold">Since 2020</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  From Humble Beginnings to Culinary Excellence
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    It all started in 2020 when our founder, John Smith, realized that great food 
                    shouldn't be limited to restaurant dining. With a passion for culinary excellence 
                    and a vision for making gourmet meals accessible to everyone, he transformed his 
                    family recipes into a thriving food business.
                  </p>
                  <p>
                    What began as a small kitchen operation has grown into a beloved local institution. 
                    We've maintained our commitment to using fresh, locally-sourced ingredients while 
                    expanding our menu to include diverse cuisines that celebrate global flavors.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of customers who trust us for their daily meals, 
                    special occasions, and everything in between. Our dedication to quality, flavor, and 
                    customer satisfaction remains unchanged.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative group">
                      <img
                        src="/images/staf.jfif"
                        alt="Our Kitchen Team"
                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg">Our Kitchen Team</h3>
                        <p className="text-white/80 text-sm">Passionate chefs</p>
                      </div>
                    </div>
                    <div className="relative group">
                      <img
                        src="/images/rider.jfif"
                        alt="Delivery Service"
                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg">Delivery Service</h3>
                        <p className="text-white/80 text-sm">Fast & reliable</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8 sm:mt-0">
                    <div className="relative group">
                      <img
                        src="/images/fresh.jfif"
                        alt="Fresh Ingredients"
                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg">Fresh Ingredients</h3>
                        <p className="text-white/80 text-sm">Daily sourced</p>
                      </div>
                    </div>
                    <div className="relative group">
                      <img
                        src="/images/happy.jfif"
                        alt="Happy Customer"
                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg">Happy Customers</h3>
                        <p className="text-white/80 text-sm">98% satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section - Responsive Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">Our Milestones</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-400 to-orange-500 h-full"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-8 lg:mb-12">
                  {/* Mobile layout */}
                  <div className="lg:hidden bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg border border-amber-100">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{milestone.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</h3>
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className={`hidden lg:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{milestone.icon}</span>
                          <h3 className="text-2xl font-bold text-amber-600">{milestone.year}</h3>
                        </div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              The principles that guide everything we do at InfernoGrill
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Culinary Family</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
              Behind every delicious meal is a team of passionate professionals dedicated to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300">
                    {member.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold text-base sm:text-lg mb-3">{member.role}</p>
                  <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
                    {member.expertise}
                  </div>
                </div>
                <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="relative group">
                  <img
                    src="/images/logo2.jfif"
                    alt="Quality Ingredients"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Quality Promise</h2>
                <div className="space-y-3 mb-8">
                  {qualityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {feature.icon}
                      <span className="text-gray-700 text-base sm:text-lg">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-amber-800 mb-2 flex items-center gap-2">
                    <FaClock className="text-amber-600" />
                    Freshness Guarantee
                  </h3>
                  <p className="text-amber-700">
                    Every meal is prepared within hours of delivery, ensuring you receive the freshest possible dining experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Taste the <span className="text-yellow-300">Difference</span>?
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto px-4">
            Join thousands of satisfied customers who trust us for their daily meals and special occasions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a
              href="/menu"
              className="px-8 sm:px-12 py-3 sm:py-4 bg-white text-red-600 hover:bg-transparent hover:text-white hover:border-2 border-white rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <FaShoppingCart className="inline mr-2" />
              Order Now
            </a>
            <a
              href="/contact"
              className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-red-600 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105"
            >
              <FaPhone className="inline mr-2" />
              Book Catering
            </a>
          </div>
          <p className="text-white/80 text-sm sm:text-base mt-6">
            🎉 Get <span className="font-bold text-yellow-300">20% OFF</span> your first order!
          </p>
        </div>
      </section>

      <FooterContent />
    </div>
  );
}

export default About;