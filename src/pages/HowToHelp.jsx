import React, { useEffect } from "react";

const HowToHelp = () => {
  useEffect(() => {
    document.title = "How to Help";
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">How You Can Help</h1>
        <p className="text-gray-600 mt-2">
          Make a difference this winter by donating warm clothes to those in
          need.
        </p>
      </div>

      {/* Help Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Option 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://i.postimg.cc/v894qy2H/organization-logo.png"
              alt="Donate Clothes"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Donate Clothes
          </h2>
          <p className="text-gray-600 mt-2">
            Gather gently used or new winter clothes like coats, scarves, and
            gloves and donate them at our drop-off locations.
          </p>
        </div>

        {/* Option 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://i.postimg.cc/CMHqMYGr/organizing.png"
              alt="Organize a Drive"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Organize a Drive
          </h2>
          <p className="text-gray-600 mt-2">
            Host a clothing drive in your community, school, or workplace to
            collect winter clothes for donation.
          </p>
        </div>

        {/* Option 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://i.postimg.cc/J7g9nVRJ/volunteer.png"
              alt="Volunteer"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Volunteer</h2>
          <p className="text-gray-600 mt-2">
            Join our team to help collect, organize, and distribute winter
            clothes to those in need.
          </p>
        </div>

        {/* Option 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://i.postimg.cc/gk7kmBTB/Sponsor.png"
              alt="Sponsor a Drive"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Sponsor a Drive
          </h2>
          <p className="text-gray-600 mt-2">
            Provide financial support to help us run donation drives and
            purchase essential winter clothing.
          </p>
        </div>

        {/* Option 5 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://i.postimg.cc/6QYrQKxN/raise-awareness.png"
              alt="Spread Awareness"
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Spread Awareness
          </h2>
          <p className="text-gray-600 mt-2">
            Share our mission on social media and encourage others to get
            involved in donating winter clothes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
