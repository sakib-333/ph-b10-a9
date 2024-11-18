import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationCampaignDetails = () => {
  const [campaign, setCampaign] = useState({});
  const campaigns = useLoaderData();

  const { id } = useParams();
  useEffect(() => {
    document.title = `Details ${id}`;

    const camp = campaigns.filter((item) => item.id.toString() === id);
    setCampaign(() => camp[0]);
  }, []);

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-8">
        <img
          src={campaign?.image}
          alt={campaign?.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {campaign?.title}
          </h2>
          <p className="text-gray-600 mb-4">{campaign?.description}</p>
          <div className="mb-4">
            <span className="font-semibold text-gray-800">Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded ${
                campaign?.status === "ongoing"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {campaign?.status}
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold text-gray-800">Division:</span>{" "}
            <span className="text-indigo-600">{campaign?.division}</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold text-gray-800">Contact:</span>{" "}
            <a
              href={`mailto:${campaign?.contactInfo}`}
              className="text-indigo-600 hover:underline"
            >
              {campaign?.contactInfo}
            </a>
          </div>
          <button className="btn btn-primary w-full mt-4">Donate Now</button>
        </div>
      </div>
    </div>
  );
};

export default DonationCampaignDetails;
