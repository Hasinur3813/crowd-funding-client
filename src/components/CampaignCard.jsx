import { Link } from "react-router-dom";
import remainingDeadline from "../utils/remainingDeadline";
import { AttentionSeeker } from "react-awesome-reveal";

const CampaignCard = ({ campaign }) => {
  const deadline = remainingDeadline(campaign.deadline);
  return (
    <AttentionSeeker duration={1000} delay={200} effect="pulse">
      <div className="card bg-base-100 dark:bg-darkMode shadow-xl ring-1 ring-primaryColor">
        <figure>
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body !px-4 flex flex-col justify-between">
          <h2 className="card-title text-primaryColor">
            {campaign.title.length > 35
              ? `${campaign.title.slice(0, 35)}...`
              : campaign.title}
          </h2>
          <p className="text-textColor mb-4 line-clamp-3 dark:text-white">
            {campaign.description.length > 55
              ? `${campaign.description.slice(0, 55)}...`
              : campaign.description}
          </p>

          <div className="flex justify-between items-start mb-4">
            <div className="text-sm text-secondaryColor font-medium">
              <p>
                <span className="font-bold">Type:</span> {campaign.type}
              </p>
              <p>
                <span className="font-bold">Raised:</span> ${campaign.raised}
              </p>
            </div>
            <div className="text-sm text-secondaryColor font-medium text-right">
              <p>
                <span className="font-bold">Deadline:</span> {deadline}
              </p>
            </div>
          </div>

          <Link
            to={`/campaign/${campaign._id}`}
            className="btn bg-primaryColor text-lg hover:bg-secondaryColor text-white w-full mt-auto"
          >
            See More
          </Link>
        </div>
      </div>
    </AttentionSeeker>
  );
};

export default CampaignCard;
