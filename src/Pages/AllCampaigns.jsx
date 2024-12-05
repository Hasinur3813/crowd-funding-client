import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import remainingDeadline from "../utils/remainingDeadline";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("http://localhost:4000/all-campaigns");
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primaryColor">
            All Campaigns
          </h1>
          <p className="text-textColor">
            Explore all the campaigns added by users. Get insights into ongoing
            efforts and contribute to make a difference!
          </p>
        </div>

        {loading ? (
          <div className="text-center text-primaryColor">
            <p className="text-lg">Loading campaigns...</p>
          </div>
        ) : campaigns.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* Table Header */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Minimum Donation</th>
                  <th>Raised</th>
                  <th>Deadline</th>
                  <th>Added By</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {campaigns.map((campaign, index) => (
                  <tr key={campaign._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </td>
                    <td>{campaign.title}</td>
                    <td>{campaign.type}</td>
                    <td>${campaign.minDonation}</td>
                    <td>${campaign.raised}</td>
                    <td>{remainingDeadline(campaign.deadline)}</td>
                    <td>{campaign.userName || "Anonymous"}</td>
                    <td>
                      <Link
                        className="underline text-blue-500"
                        to={`/campaign/${campaign._id}`}
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-secondaryColor">
            <p className="text-lg">No campaigns found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCampaigns;
