import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            Welcome to{" "}
            <span className="text-indigo-600 font-semibold">
              Winter Donation
            </span>
            . Our mission is to spread warmth and kindness by ensuring no one
            faces the harsh winter without proper clothing. Together, we can
            make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="bg-white shadow-lg rounded-lg p-6" data-aos="flip-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              At <span className="font-semibold">Winter Donation</span>, we
              strive to collect and distribute winter essentials like coats,
              scarves, and gloves to underprivileged communities. By working
              with donors and volunteers, we aim to ensure warmth and comfort
              during the coldest months of the year.
            </p>
          </div>

          {/* Contribution Section */}
          <div
            className="bg-white shadow-lg rounded-lg p-6"
            data-aos="flip-down"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How You Can Contribute
            </h3>
            <ul className="text-gray-600 space-y-4">
              <li>
                <span className="font-semibold text-indigo-600">
                  Donate Winter Clothes:
                </span>{" "}
                Share gently used or new winter clothing at our collection
                centers.
              </li>
              <li>
                <span className="font-semibold text-indigo-600">
                  Volunteer Your Time:
                </span>{" "}
                Help us sort, pack, and distribute clothing to those in need.
              </li>
              <li>
                <span className="font-semibold text-indigo-600">
                  Make a Monetary Contribution:
                </span>{" "}
                Support our cause by donating funds to help us expand our reach.
              </li>
              <li>
                <span className="font-semibold text-indigo-600">
                  Spread the Word:
                </span>{" "}
                Share our mission with friends, family, and your community to
                amplify our impact.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
