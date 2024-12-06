import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import remainingDeadline from "../utils/remainingDeadline";
import Loader from "../components/Loader";
import { Fade } from "react-awesome-reveal";
import { FaSort } from "react-icons/fa";
import Swal from "sweetalert2";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/all-campaigns");
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        Swal.fire("Error!", `${error.code}`, "error");
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  const handleSort = async () => {
    try {
      const res = await fetch("http://localhost:4000/sorted-campaings", {
        method: "GET",
      });
      const campaigns = await res.json();
      setCampaigns(campaigns);
    } catch (e) {
      Swal.fire("Error!", `${e.code}`, "error");
    }
  };

  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primaryColor">
            All Campaigns
          </h1>
          <p className="text-textColor dark:text-white">
            Explore all the campaigns added by users. Get insights into ongoing
            efforts and contribute to make a difference!
          </p>
        </div>

        <div className="mb-5 flex justify-end">
          <button
            onClick={handleSort}
            className="flex items-center gap-2 bg-gradient-to-r from-primaryColor to-secondaryColor text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <FaSort className="text-lg" />
            <span className="text-base font-medium">Sort</span>
          </button>
        </div>

        {loading ? (
          <div className="w-full flex justify-center py-10">
            <Loader />
          </div>
        ) : campaigns.length > 0 ? (
          <Fade duration={1000} delay={200}>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full dark:bg-white">
                {/* Table Header */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th className="hidden sm:table-cell">Type</th>
                    <th className="hidden sm:table-cell">Minimum Donation</th>
                    <th className="hidden md:table-cell">Raised</th>
                    <th className="hidden lg:table-cell">Deadline</th>
                    <th className="hidden lg:table-cell">Added By</th>
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
                      <td className="hidden sm:table-cell">{campaign.type}</td>
                      <td className="hidden sm:table-cell">
                        ${campaign.minDonation}
                      </td>
                      <td className="hidden md:table-cell">
                        ${campaign.raised}
                      </td>
                      <td className="hidden lg:table-cell">
                        {remainingDeadline(campaign.deadline)}
                      </td>
                      <td className="hidden lg:table-cell">
                        {campaign.userName || "Anonymous"}
                      </td>
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
          </Fade>
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
