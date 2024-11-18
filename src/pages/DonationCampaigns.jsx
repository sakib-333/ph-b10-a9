import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const DonationCampaigns = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = "Donation Campaigns";
  }, []);
  return <div>DonationCampaigns</div>;
};

export default DonationCampaigns;
