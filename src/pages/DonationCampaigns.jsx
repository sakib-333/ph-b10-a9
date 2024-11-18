import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import DonationCampaignCard from "../components/DonationCampaignCard";

const DonationCampaigns = () => {
  const campaigns = useLoaderData();
  useEffect(() => {
    document.title = "Donation Campaigns";
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 my-4">
      {campaigns.map((campaign) => (
        <DonationCampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default DonationCampaigns;
