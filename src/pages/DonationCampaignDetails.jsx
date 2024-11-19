import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DonationCampaignDetails = () => {
  const [campaign, setCampaign] = useState({});
  const campaigns = useLoaderData();

  const { id } = useParams();
  useEffect(() => {
    document.title = `Donation Details of ${id}`;

    const camp = campaigns.filter((item) => item.id.toString() === id);
    setCampaign(() => camp[0]);
  }, []);

  const handleDonate = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon.");
    e.target.itemsQuantity.value = "";
    e.target.pickupLocation.value = "";
    e.target.itemType.value = "";
    e.target.additionalNotes.value = "";
    e.target.iAgree.checked = false;
  };

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
            <span className="font-semibold text-gray-800">Contact:</span>{" "}
            <a
              href={`mailto:${campaign?.contactInfo}`}
              className="text-indigo-600 hover:underline"
            >
              {campaign?.contactInfo}
            </a>
          </div>
          <div className="mb-4">
            <span className="font-semibold text-gray-800">Division:</span>{" "}
            <span className="text-indigo-600">{campaign?.division}</span>
          </div>
          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-3 border rounded-xl p-4"
            onSubmit={handleDonate}
          >
            <label className="form-control w-full lg:col-span-1">
              <div className="label">
                <span className="label-text font-bold">Quantity of items</span>
              </div>
              <input
                type="text"
                name="itemsQuantity"
                required
                placeholder="e.g. 2 jackets, 3 blankets"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full lg:col-span-1">
              <div className="label">
                <span className="label-text font-bold">Pickup location</span>
              </div>
              <input
                type="text"
                name="pickupLocation"
                required
                placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full lg:col-span-1">
              <div className="label">
                <span className="label-text font-bold">
                  Item type &#40;e.g., blanket, jacket, sweater&#41;
                </span>
              </div>
              <select
                required
                className="select select-bordered"
                name="itemType"
              >
                <option value="">Select any of them</option>
                <option value="any">Any</option>
                <option value="blanket">Blanket</option>
                <option value="jacket">Jacket</option>
                <option value="sweater">Sweater</option>
              </select>
            </label>
            <label className="form-control lg:col-span-1">
              <div className="label">
                <span className="label-text font-bold">
                  Additional notes &#40;optional&#41;
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered"
                name="additionalNotes"
                rows={1}
                placeholder="Write something about your donation &#40;optional&#41;"
              ></textarea>
            </label>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  name="iAgree"
                  required
                  className="checkbox"
                />
                <span className="label-text">I agree</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full btn btn-success lg:col-span-2 text-white"
              disabled={campaign?.status === "finished"}
            >
              Donate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationCampaignDetails;
