import React from "react";
import FooterContent from "../components/FooterContent";

function About() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      description: "With over 15 years in the culinary industry, John founded our restaurant with a vision to bring authentic flavors to every home.",
      expertise: "Culinary Innovation & Business Strategy"
    },
    {
      name: "Sarah Johnson",
      role: "Head Chef",
      description: "Trained in Michelin-star restaurants, Sarah brings world-class culinary expertise to our kitchen.",
      expertise: "Gourmet Cuisine & Recipe Development"
    },
    {
      name: "Mike Chen",
      role: "Operations Manager",
      description: "Mike ensures our operations run smoothly from kitchen to delivery, maintaining our high standards.",
      expertise: "Supply Chain & Quality Control"
    },
    {
      name: "Emily Davis",
      role: "Customer Experience Manager",
      description: "Emily leads our customer service team, ensuring every customer has an exceptional experience.",
      expertise: "Customer Relations & Service Excellence"
    },
    {
      name: "David Wilson",
      role: "Marketing Director",
      description: "David spreads the word about our delicious offerings and builds our community presence.",
      expertise: "Digital Marketing & Brand Strategy"
    },
    {
      name: "Lisa Rodriguez",
      role: "Head of Nutrition",
      description: "Lisa ensures all our meals are not only delicious but also nutritionally balanced and healthy.",
      expertise: "Nutrition Science & Dietary Planning"
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded with a small kitchen and big dreams" },
    { year: "2021", event: "Expanded to online delivery services" },
    { year: "2022", event: "Served over 50,000 happy customers" },
    { year: "2023", event: "Launched mobile app for easier ordering" },
    { year: "2024", event: "Opening second location downtown" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We source only the finest ingredients and maintain rigorous quality standards in every dish.",
      icon: "⭐"
    },
    {
      title: "Customer Love",
      description: "Our customers are at the heart of everything we do. Their satisfaction drives our innovation.",
      icon: "❤️"
    },
    {
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and supporting local farmers and producers.",
      icon: "🌱"
    },
    {
      title: "Innovation",
      description: "Constantly evolving our menu with creative dishes while honoring traditional flavors.",
      icon: "✨"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "100+", label: "Menu Items" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "15min", label: "Average Delivery Time" }
  ];

  return (
    <div className="min-h-screen bg-gray-500">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-orange-600 to-yellow-500">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 text-gray-900">Our Story</h1>
          <p className="text-2xl mb-8 max-w-4xl mx-auto text-gray-700 leading-relaxed">
            From a humble family kitchen to serving thousands of food lovers, 
            we're passionate about creating memorable dining experiences one plate at a time.
          </p>
          <div className="flex  justify-center gap-3 mt-12   ">
            <a
              href="/menu"
              className="px-12 py-4 bg-white text-amber-600 hover:bg-transparent hover:text-white hover:border-2 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Our Menu
            </a>
            <a
              href="/contact"
              className="px-12 py-4 border-2  border-white text-white hover:bg-white hover:text-amber-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Journey</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
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
              <div className="grid grid-cols-2 gap-4">
                <div className=" text-center text-xl">
                <img
                  src="/public/images/staf.jfif"
                  alt="Our Kitchen Team"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />

                  <h2>Our Kitchen Team</h2>
                </div>
                    <div className=" text-center text-xl">

                <img
                  src="/public/images/fresh.jfif"
                  alt="Fresh Ingredients"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                  />
                  <h2>Fresh Ingredients</h2>
                  </div>


                  <div className=" text-center text-xl">

                <img
                  src="/public/images/rider.jfif"
                  alt="Delivery Service"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                  <h2>Delivery Service</h2>
                  </div>
                
                <div className=" text-center text-xl">

                <img
                  src="/public/images/happy.jfif"
                  alt="Happy Customer"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                  />
                   <h2>Happy Customer</h2>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Milestones</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-200 h-full"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <h3 className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Meet Our Culinary Family</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind every delicious meal is a team of passionate professionals dedicated to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold text-lg mb-3">{member.role}</p>
                  <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {member.expertise}
                  </div>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/public/images/logo2.jfif"
                  alt="Quality Ingredients"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Quality Promise</h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>✅ Locally sourced fresh ingredients</p>
                  <p>✅ Daily preparation with no preservatives</p>
                  <p>✅ Rigorous quality checks at every stage</p>
                  <p>✅ Sustainable and ethical sourcing</p>
                  <p>✅ Continuous recipe improvement</p>
                  <p>✅ Temperature-controlled delivery</p>
                </div>
                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
                  <h3 className="text-xl font-bold text-amber-800 mb-2">Freshness Guarantee</h3>
                  <p className="text-amber-700">
                    Every meal is prepared within hours of delivery, ensuring you receive the freshest possible dining experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Taste the Difference?</h2>
          <p className="text-amber-100 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their daily meals and special occasions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/menu"
              className="px-12 py-4 bg-white text-amber-600 hover:bg-transparent hover:text-white hover:border-2 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Order Now
            </a>
            <a
              href="/contact"
              className="px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-amber-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Book Catering
            </a>
          </div>
        </div>
      </section>

      <FooterContent />
    </div>
  );
}

export default About;