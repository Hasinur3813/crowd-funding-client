import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import Loader from "../components/Loader";

const MyDonations = () => {
  const { currentUser, loading } = useAuth();
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    const fetchDonations = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/my-donations/${currentUser?.email}`,
          {
            method: "GET",
          }
        );
        const campaigns = await response.json();
        setDonations(campaigns);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, [currentUser, loading]);

  if (loading) {
    return (
      <div className=" w-full flex justify-center py-20">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primaryColor mb-6 text-center">
          My Donations
        </h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          Here are all the campaigns you&apos;ve contributed to. Thank you for
          your support!
        </p>

        {donations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donations.map((donation) => (
              <div
                key={donation._id}
                className="card bg-white shadow-lg rounded-lg p-6"
              >
                <img
                  src={donation.image}
                  alt={donation.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-primaryColor mb-2">
                  {donation.title}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Donation Amount:</strong> ${donation.raised}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Type:</strong> {donation.type}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  <strong>Last Donated:</strong>{" "}
                  {new Date(donation.lastDonated).toLocaleDateString("en-GB")}
                </p>
                <button
                  className="btn btn-outline text-secondaryColor text-lg w-full"
                  onClick={() => navigate(`/campaign/${donation.campaignId}`)}
                >
                  View Campaign
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg py-10">
            You haven’t donated to any campaigns yet. Explore campaigns to make
            a difference!
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDonations;
