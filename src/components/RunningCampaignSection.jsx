import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";

const RunningCampaignSection = () => {
  const campaigns = useLoaderData();

  return (
    <section className="py-16 bg-bgPrimary">
      <div className="container mx-auto px-3">
        <h2 className="text-3xl font-bold text-primaryColor mb-2 text-center">
          Running Campaigns
        </h2>
        <h5 className=" text-textColor mb-10 text-center">
          Contribute to Campaigns That Are Still Making a Difference
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RunningCampaignSection;
