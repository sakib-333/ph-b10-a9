import React from "react";

const DonationCampaignCard = ({ campaign }) => {
  const { image, title, description, division } = campaign;
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt="card" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500 mb-4">
          <strong>Division:</strong> {division}
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationCampaignCard;
