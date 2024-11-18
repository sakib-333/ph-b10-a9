import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Donating winter clothing is simple and impactful. Follow the steps
            below to contribute and make a difference in someone’s life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instructions for Donation */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Instructions for Donation
            </h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-4">
              <li>
                Gather gently used or new winter clothing (e.g., coats, scarves,
                gloves).
              </li>
              <li>Ensure all items are clean and in good condition.</li>
              <li>
                Pack your donations securely to protect them during transport.
              </li>
              <li>
                Visit your nearest collection point and drop off your donation.
              </li>
            </ol>
          </div>

          {/* Collection Points and Supported Divisions */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Collection Points & Supported Divisions
            </h3>
            <p className="text-gray-600 mb-4">
              Our collection points are conveniently located in major divisions
              across the country. Visit any of the following regions to
              contribute:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Barishal</li>
              <li>Chattogram</li>
              <li>Dhaka</li>
              <li>Khulna</li>
              <li>Rajshahi</li>
              <li>Rangpur</li>
              <li>Mymensingh</li>
              <li>Sylhet</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Please keep donating who are really needy. This brings much
              pleasure and your pleasure helps the needy to live in peace when
              it is winter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
