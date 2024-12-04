import Banner from "../components/Banner";
import DonationAmounts from "../components/DonationAmount";
import HowYouCanHelp from "../components/HowYouCanHelp";
import RunningCampaignSection from "../components/RunningCampaignSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <RunningCampaignSection />
      <DonationAmounts />
      <HowYouCanHelp />
    </div>
  );
};

export default HomePage;
