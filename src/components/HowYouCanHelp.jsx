import {
  FaHeart,
  FaShareAlt,
  FaHandsHelping,
  FaMoneyBillWave,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HowYouCanHelp = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center px-2">
        <h2 className="text-3xl font-semibold text-primaryColor mb-4">
          How You Can Make a Difference
        </h2>
        <p className="text-lg text-textColor mb-8 dark:text-white">
          Your contribution, no matter how small, can bring hope to those who
          need it the most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Direct Donation */}
          <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
            <FaHeart className="text-4xl text-primaryColor mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Direct Donation
            </h3>
            <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
              Your donation helps fund critical projects like providing clean
              water, education, and emergency relief. Every dollar counts!
            </p>
            <Link
              to="/all-campaigns"
              className="btn bg-primaryColor hover:bg-secondaryColor text-lg mt-auto text-white"
            >
              Donate Now
            </Link>
          </div>

          {/* Share Our Mission */}
          <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
            <FaShareAlt className="text-4xl text-primaryColor mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Share Our Mission
            </h3>
            <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
              Spread the word by sharing our campaigns with your friends and
              family. Your voice can help us reach more people.
            </p>
            <Link
              to="/all-campaigns"
              className="btn bg-primaryColor hover:bg-secondaryColor text-lg mt-auto text-white"
            >
              Share Our Campaign
            </Link>
          </div>

          {/* Volunteer Your Time */}
          <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
            <FaHandsHelping className="text-4xl text-primaryColor mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Volunteer Your Time
            </h3>
            <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
              Join us in person or virtually to help with campaigns. Your time
              and effort can directly impact the success of a cause.
            </p>
            <Link
              to="/signup"
              className="btn bg-primaryColor hover:bg-secondaryColor text-lg mt-auto text-white"
            >
              Become a Volunteer
            </Link>
          </div>

          {/* Fundraise for a Cause */}
          <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
            <FaMoneyBillWave className="text-4xl text-primaryColor mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Fundraise for a Cause
            </h3>
            <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
              Start your own campaign to raise funds for a cause you're
              passionate about. Together, we can achieve more.
            </p>
            <Link
              to="/add-campaign"
              className="btn bg-primaryColor hover:bg-secondaryColor text-lg mt-auto text-white"
            >
              Start Fundraising
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowYouCanHelp;
