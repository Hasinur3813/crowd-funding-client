import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Loader from "../components/Loader";
import { Tooltip } from "react-tooltip";

import Swal from "sweetalert2";
import { useAuth } from "../contexts/AuthProvider";
import remainingDeadline from "../utils/remainingDeadline";

const CampaignDetails = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [campaign, setCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await fetch(
          `https://crowdcube-server-nu.vercel.app/all-campaigns/${id}`
        );
        const data = await response.json();
        setCampaign(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching campaign details:", error);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleDonate = async () => {
    const isDeadlineOver = remainingDeadline(campaign.deadline);
    if (isDeadlineOver === "Over") {
      Swal.fire(
        "Sorry!",
        "The deadline for this campaign is Over. Try another campaign.",
        "error"
      );
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

    if (parseInt(donationAmount) < parseInt(campaign.minDonation)) {
      Swal.fire(
        "Check Donation Amount",
        `Minimum donataion amount is $${campaign.minDonation}`,
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
      const res = await fetch("https://crowdcube-server-nu.vercel.app/donate", {
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

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center w-full">
        <Loader />
      </div>
    );
  }

  return (
    <Fade duration={1000} delay={200}>
      <div className="min-h-screen py-12 px-4">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-darkMode shadow-lg rounded-lg overflow-hidden">
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
                <p className="text-gray-600 dark:text-white text-sm mb-2">
                  <strong>Type:</strong> {campaign.type}
                </p>
                <p className="text-gray-600 dark:text-white text-sm mb-2">
                  <strong>Deadline:</strong>{" "}
                  {new Date(campaign.deadline).toLocaleDateString("en-GB")}
                </p>
                <p className="text-gray-600 dark:text-white text-sm mb-6">
                  <strong>Minimum Donation:</strong> ${campaign.minDonation}
                </p>
                <p className="text-gray-700 dark:text-white leading-relaxed mb-6">
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
                    data-tooltip-id="donate"
                    data-tooltip-content={`Minimum donation is $${campaign.minDonation}`}
                    data-tooltip-place="top"
                    type="number"
                    placeholder="Enter amount"
                    className="input input-bordered w-full"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                  />
                </div>
                <Tooltip id="donate" />
                <button
                  className="btn bg-primaryColor text-white hover:bg-secondaryColor text-lg w-full"
                  onClick={handleDonate}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CampaignDetails;
