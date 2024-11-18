import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          At{" "}
          <span className="text-indigo-600 font-semibold">Winter Donation</span>
          , we believe no one should have to face the cold alone. Our mission is
          to provide warmth and comfort to those in need through the generous
          donation of winter clothing. Together, we can make a difference in the
          lives of many, one coat, one scarf, and one pair of gloves at a time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To spread warmth and hope by collecting and distributing winter
              essentials to underprivileged communities.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Impact</h3>
            <p className="text-gray-600">
              With the help of generous donors, we’ve reached thousands of
              families, ensuring they stay warm during the harsh winters. Every
              item donated helps create a brighter and warmer future for someone
              in need.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Join Us</h3>
            <p className="text-gray-600">
              Whether you donate clothing, time, or funds, every contribution
              helps us achieve our goal of warming hearts this winter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
