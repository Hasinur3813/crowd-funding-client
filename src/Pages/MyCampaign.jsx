import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const { currentUser } = useAuth();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/my-campaign/${currentUser.email}`,
          {
            method: "GET",
          }
        );
        const campaigns = await response.json();
        setCampaigns(campaigns || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, [currentUser]);

  const handleUpdate = (id) => {
    navigate(`/updateCampaign/${id}`);
  };

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
          const res = await fetch(`http://localhost:4000/my-campaign/${id}`, {
            method: "DELETE",
          });
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
          console.log(e);
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
          <p>Loading campaigns...</p>
        ) : campaigns.length === 0 ? (
          <p className="text-center text-gray-600">No campaigns found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-secondaryColor text-white">
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Raised</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign._id} className="border-t">
                    <td className="px-4 py-2">{campaign.title}</td>
                    <td className="px-4 py-2">{campaign.type}</td>
                    <td className="px-4 py-2">${campaign.raised}</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button
                          className="btn btn-sm bg-primaryColor text-white"
                          onClick={() => handleUpdate(campaign._id)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-sm btn-error !text-red-100"
                          onClick={() => handleDelete(campaign._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCampaign;
