import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Welcome to <span className="font-semibold">LMS Pro</span>, your trusted Learning Management System. 
        Our mission is to provide an efficient and user-friendly platform for students and instructors 
        to connect, learn, and grow. With cutting-edge technology, we aim to revolutionize the way 
        education is delivered online.
      </p>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
          <p className="text-gray-600">Empowering learners through innovative and accessible education.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h3>
          <p className="text-gray-600">To be the leading platform in online learning, connecting knowledge with opportunity.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Values</h3>
          <p className="text-gray-600">Innovation, accessibility, and excellence in education.</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mt-2">A group of passionate educators, developers, and designers working together.</p>
      </div>
    </div>
  );
};

export default AboutUs;
