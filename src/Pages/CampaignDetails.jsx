import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Swal from "sweetalert2";
import { useAuth } from "../contexts/AuthProvider";

const CampaignDetails = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [campaign, setCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/all-campaigns/${id}`
        );
        const data = await response.json();
        setCampaign(data);
      } catch (error) {
        console.error("Error fetching campaign details:", error);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleDonate = async () => {
    if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
      Swal.fire(
        "Invalid Amount",
        "Please enter a valid donation amount.",
        "error"
      );
      return;
    }

    const donationData = {
      mainCampaign: { ...campaign },
      donatedCampaign: {
        email: currentUser.email,
        userName: currentUser.displayName,
        campaignId: campaign._id,
        raised: parseFloat(donationAmount),
        title: campaign.title,
        description: campaign.description,
        type: campaign.type,
        image: campaign.image,
        deadline: campaign.deadline,
      },
    };

    try {
      const res = await fetch("http://localhost:4000/donate", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(donationData),
      });
      const result = await res.json();
      if (result.acknowledged || result.insertedId) {
        Swal.fire("Success", "Thank you for your contribution!", "success");
      } else {
        Swal.fire("Error!", "There was an error! Please try again", "error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="h-64 md:h-auto">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-primaryColor mb-4">
                {campaign.title}
              </h1>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Type:</strong> {campaign.type}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Deadline:</strong>{" "}
                {new Date(campaign.deadline).toLocaleDateString()}
              </p>
              <p className="text-gray-600 text-sm mb-6">
                <strong>Minimum Donation:</strong> ${campaign.minDonation}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {campaign.description}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md shadow-inner">
              <h2 className="text-xl font-semibold text-primaryColor mb-4">
                Support This Campaign
              </h2>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Donation Amount (USD)</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="input input-bordered w-full"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
              <button className="btn btn-primary w-full" onClick={handleDonate}>
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
