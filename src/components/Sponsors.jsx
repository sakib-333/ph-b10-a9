import React from "react";
import { FaAmazon, FaDribbble, FaGoogle, FaMicrosoft } from "react-icons/fa";

const Sponsors = () => {
  const sponsors = [
    { name: "Google", logo: <FaGoogle /> },
    { name: "Amazon", logo: <FaAmazon /> },
    { name: "Dribbble", logo: <FaDribbble /> },
    { name: "Microsoft", logo: <FaMicrosoft /> },
  ];

  return (
    <section className="bg-gray-100 py-16" data-aos="zoom-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-600">
            We are grateful for the support of our incredible sponsors who make
            our mission possible. Their generosity helps us bring warmth and
            comfort to those in need.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              title={sponsor.name}
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center"
            >
              {sponsor.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
