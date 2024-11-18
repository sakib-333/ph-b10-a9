import React from "react";

const FAQ = () => {
  return (
    <section className="bg-gray-100 py-16 my-4 md:my-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? We’ve got answers! Check out our FAQs below to learn
            more about donating, volunteering, and more.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* DaisyUI Accordion */}
          <div className="space-y-4">
            <div className="collapse collapse-arrow bg-white shadow-md rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-semibold text-gray-800">
                How can I donate winter clothing?
              </div>
              <div className="collapse-content text-gray-600">
                <p>
                  You can donate by visiting one of our collection points listed
                  on the "How It Works" page. Make sure your items are clean and
                  in good condition before donating.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white shadow-md rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-semibold text-gray-800">
                What types of clothing are accepted?
              </div>
              <div className="collapse-content text-gray-600">
                <p>
                  We accept gently used or new winter essentials such as coats,
                  jackets, scarves, gloves, hats, and blankets. Please avoid
                  donating torn or unclean items.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white shadow-md rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-semibold text-gray-800">
                Are monetary donations accepted?
              </div>
              <div className="collapse-content text-gray-600">
                <p>
                  Yes! You can support our cause through monetary contributions.
                  Visit our "Donate" page to make a secure online donation.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white shadow-md rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-semibold text-gray-800">
                How can I volunteer?
              </div>
              <div className="collapse-content text-gray-600">
                <p>
                  We welcome volunteers to help us sort, pack, and distribute
                  donations. Check out our "Get Involved" page for more details
                  and sign-up options.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white shadow-md rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-semibold text-gray-800">
                Where are the collection points located?
              </div>
              <div className="collapse-content text-gray-600">
                <p>
                  Our collection points are located in major divisions like
                  Dhaka, Chattogram, Khulna, and more. Visit the "How It Works"
                  page for detailed addresses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
