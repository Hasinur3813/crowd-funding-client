import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import { Fade } from "react-awesome-reveal";
import remainingDeadline from "../utils/remainingDeadline";
import { Tooltip } from "react-tooltip";

const MyCampaign = () => {
  const { currentUser } = useAuth();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          `https://crowdcube-server-nu.vercel.app/my-campaign/${currentUser.email}`,
          {
            method: "GET",
          }
        );
        const campaigns = await response.json();
        setCampaigns(campaigns || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCampaigns();
  }, [currentUser]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            `https://crowdcube-server-nu.vercel.app/${id}`,
            {
              method: "DELETE",
            }
          );
          const result = await res.json();
          console.log(result);
          const remainingCampaign = campaigns.filter((c) => c._id !== id);
          setCampaigns(remainingCampaign);
          Swal.fire({
            title: "Deleted!",
            text: "Your campaign has been deleted.",
            icon: "success",
          });
        } catch (e) {
          Swal.fire({
            title: "Error!",
            text: `${e.code}`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-primaryColor mb-6">
          My Campaigns
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          View, update, or delete your campaigns here.
        </p>
        {loading ? (
          <div className="w-full flex justify-center">
            <Loader />
          </div>
        ) : campaigns.length === 0 ? (
          <p className="text-center text-gray-600">No campaigns found.</p>
        ) : (
          <Fade duration={1000} delay={200}>
            <div className="overflow-x-auto">
              <table className="table w-full border-collapse bg-white rounded-lg shadow">
                <thead>
                  <tr className="bg-secondaryColor text-white">
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2 hidden sm:table-cell">Type</th>
                    <th className="px-4 py-2 hidden sm:table-cell">Raised</th>
                    <th className="px-4 py-2 hidden sm:table-cell">Deadline</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign) => (
                    <tr key={campaign._id} className="border-t">
                      <td className="px-4 py-2">{campaign.title}</td>
                      <td className="px-4 py-2 hidden sm:table-cell">
                        {campaign.type}
                      </td>
                      <td className="px-4 py-2 hidden sm:table-cell">
                        ${campaign.raised}
                      </td>
                      <td className="px-4 py-2 hidden sm:table-cell">
                        {remainingDeadline(campaign.deadline)}
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex gap-2">
                          <Link
                            data-tooltip-id="update"
                            data-tooltip-content="Update your campaign"
                            data-tooltip-place="left"
                            to={`/update-campaign/${campaign._id}`}
                            className="btn btn-sm bg-primaryColor hover:bg-secondaryColor text-white"
                          >
                            Update
                          </Link>
                          <Tooltip id="update" />
                          <button
                            data-tooltip-id="delete"
                            data-tooltip-content="Delete your campaign"
                            data-tooltip-place="top-start"
                            className="btn btn-sm btn-error !text-red-100"
                            onClick={() => handleDelete(campaign._id)}
                          >
                            Delete
                          </button>
                          <Tooltip id="delete" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default MyCampaign;
