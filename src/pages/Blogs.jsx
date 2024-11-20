import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Importance of Winter Clothing Donations",
    description:
      "Learn why donating winter clothing can save lives and bring warmth to those in need during the cold season.",
    image: "https://via.placeholder.com/400x200",
    date: "November 20, 2024",
  },
  {
    id: 2,
    title: "How to Get Involved in Winter Drives",
    description:
      "Discover how you can contribute to winter clothing donation drives in your community.",
    image: "https://via.placeholder.com/400x200",
    date: "November 18, 2024",
  },
  {
    id: 3,
    title: "Stories of Impact: Lives Changed by Your Donations",
    description:
      "Read inspiring stories of individuals who have been helped by generous donations like yours.",
    image: "https://via.placeholder.com/400x200",
    date: "November 15, 2024",
  },
  {
    id: 4,
    title: "Top 5 Items to Donate This Winter",
    description:
      "Find out which winter clothing items are most needed and how to prioritize your donations.",
    image: "https://via.placeholder.com/400x200",
    date: "November 10, 2024",
  },
  {
    id: 5,
    title: "Volunteer Opportunities Near You",
    description:
      "Explore ways to volunteer your time and make a direct impact in winter donation programs.",
    image: "https://via.placeholder.com/400x200",
    date: "November 8, 2024",
  },
  {
    id: 6,
    title: "Sustainable Giving: Recycling and Repurposing Clothes",
    description:
      "Learn how to ensure your donations are sustainable and benefit the environment as well as people.",
    image: "https://via.placeholder.com/400x200",
    date: "November 5, 2024",
  },
];

const Blogs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Latest from Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{blog.date}</span>
                  <a
                    href="#"
                    className="text-blue-500 text-sm font-medium hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
