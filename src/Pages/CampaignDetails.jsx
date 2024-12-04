import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useAuth } from "../contexts/AuthProvider";

const CampaignDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    if (!currentUser) {
      navigate("/login");
      return;
    }

    if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
      Swal.fire(
        "Invalid Amount",
        "Please enter a valid donation amount.",
        "error"
      );
      return;
    }

    const donationData = {
      campaignId: campaign._id,
      userEmail: currentUser.email,
      userName: currentUser.displayName,
      amount: parseFloat(donationAmount),
    };

    try {
      const response = await fetch("https://your-api-url/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        Swal.fire("Thank You!", "Your donation was successful!", "success");
        setDonationAmount("");
      } else {
        throw new Error("Failed to process the donation");
      }
    } catch (error) {
      Swal.fire(
        "Error",
        "Unable to process your donation. Please try again.",
        "error"
      );
    }
  };

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title and Campaign Details */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primaryColor">
            {campaign.title}
          </h1>
          <p className="text-textColor">
            <strong>Type:</strong> {campaign.type}
          </p>
          <p className="text-textColor">
            <strong>Deadline:</strong>{" "}
            {new Date(campaign.deadline).toLocaleDateString()}
          </p>
          <p className="text-textColor">
            <strong>Minimum Donation:</strong> ${campaign.minDonation}
          </p>
          <p className="text-textColor mt-4">{campaign.description}</p>
        </div>

        {/* Campaign Image */}
        <div className="text-center mb-8">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Donation Form */}
        <div className="bg-base-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-primaryColor mb-4">
            Donate to This Campaign
          </h2>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Enter Donation Amount</span>
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
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
