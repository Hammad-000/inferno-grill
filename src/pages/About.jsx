import React from "react";
import Footer from "../components/FooterContent";

function About() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      description: "Passionate about creating amazing shopping experiences."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations",
      description: "Ensuring smooth operations and customer satisfaction."
    },
    {
      name: "Mike Chen",
      role: "Product Manager",
      description: "Curating the best products for our customers."
    },
    {
      name: "Emily Davis",
      role: "Customer Success",
      description: "Dedicated to providing exceptional customer service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className=" py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Store</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We are committed to providing the best shopping experience with quality products, 
            excellent service, and fast delivery.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2021, our journey began with a simple mission: to make online shopping 
              accessible, reliable, and enjoyable for everyone. What started as a small boutique 
              has grown into a trusted destination for thousands of customers worldwide.
            </p>
            <p className="text-lg text-gray-600">
              We carefully curate our product selection to ensure quality and value. Every item 
              in our store is chosen with our customers' needs and preferences in mind.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-16 ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shop With Us?</h2>
          <a
            href="/menu"
            className=" px-8 py-3 bg-yellow-400 rounded-lg font-semibold transition-colors inline-block"
          >
            Start Shopping
          </a>
        </div>
        
      </section>
      
    
     <Footer />
    </div>
    
  );
}

export default About;