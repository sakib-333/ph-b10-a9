import React, { useEffect } from "react";

const DonationCampaigns = () => {
  useEffect(() => {
    document.title = "Donation Campaigns";
  }, []);
  return <div>DonationCampaigns</div>;
};

export default DonationCampaigns;
