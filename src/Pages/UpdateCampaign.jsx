import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const UpdateCampaign = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    type: "Personal Issues",
    description: "",
    minDonation: "",
    deadline: "",
    userEmail: currentUser?.email || "N/A",
    userName: currentUser?.displayName || "Anonymous",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const res = await fetch(`http://localhost:4000/udpate-campaign/${id}`);
        const data = await res.json();

        setFormData({
          image: data.image || "",
          title: data.title || "",
          type: data.type || "Personal Issues",
          description: data.description || "",
          minDonation: data.minDonation || "",
          deadline: data.deadline
            ? new Date(data.deadline).toISOString().split("T")[0]
            : "",
          userEmail: currentUser?.email || "N/A",
          userName: currentUser?.displayName || "Anonymous",
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchCampaign();
  }, [id, currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedDoc = {
      ...formData,
      deadline: new Date(formData.deadline).toISOString(),
    };

    try {
      setLoading(true);
      await fetch(`http://localhost:4000/all-campaigns/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedDoc),
      });
      setLoading(false);
      Swal.fire("Success!", "Your campaign has been updated!.", "success");
      navigate("/my-campaigns");
    } catch (e) {
      setLoading(false);
      Swal.fire("Error!", `${e.code}`, "error");
    }
  };

  return (
    <Fade duration={1000} delay={200}>
      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
          {/* Title and Subtitle */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primaryColor">
              Update your campaign
            </h1>
            <p className="text-textColor">
              Fill out the form below to update your campaign and make a
              difference!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="input input-bordered"
                required
              />
            </div>

            {/* Campaign Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter campaign title"
                className="input input-bordered"
                required
              />
            </div>

            {/* Campaign Type */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Type</span>
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="select select-bordered"
                required
              >
                <option value="Personal Issue">Personal Issue</option>
                <option value="Startup">Startup</option>
                <option value="Business">Business</option>
                <option value="Creative Ideas">Creative Ideas</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter campaign description"
                className="textarea textarea-bordered"
                required
              ></textarea>
            </div>

            {/* Minimum Donation */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Donation Amount</span>
              </label>
              <input
                type="number"
                name="minDonation"
                value={formData.minDonation}
                onChange={handleChange}
                placeholder="Enter minimum donation amount"
                className="input input-bordered"
                required
              />
            </div>

            {/* Deadline */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>

            {/* User Information (Read-only) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                readOnly
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                readOnly
                className="input input-bordered"
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                className="btn bg-primaryColor text-lg hover:bg-secondaryColor text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Campaign"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default UpdateCampaign;
