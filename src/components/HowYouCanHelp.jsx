import {
  FaHeart,
  FaShareAlt,
  FaHandsHelping,
  FaMoneyBillWave,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { Zoom } from "react-awesome-reveal";
import { AttentionSeeker } from "react-awesome-reveal";

const HowYouCanHelp = () => {
  const { currentUser } = useAuth();
  return (
    <section className="py-12">
      <div className="container mx-auto text-center px-2">
        <Zoom duration={1000} delay={200}>
          <h2 className="text-3xl font-semibold text-primaryColor mb-4">
            How You Can Make a Difference
          </h2>
          <p className="text-lg text-textColor mb-8 dark:text-white">
            Your contribution, no matter how small, can bring hope to those who
            need it the most.
          </p>
        </Zoom>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Direct Donation */}
          <AttentionSeeker duration={1000} delay={200} shake>
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
          </AttentionSeeker>

          {/* Share Our Mission */}
          <AttentionSeeker duration={1000} delay={230} shake>
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
          </AttentionSeeker>

          {/* Volunteer Your Time */}
          {currentUser ? (
            <AttentionSeeker duration={1000} delay={260} shake>
              <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
                <FaHandsHelping className="text-4xl text-primaryColor mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Thank You for Volunteering!
                </h3>
                <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
                  Your efforts are making a real difference. Manage your
                  commitments and continue to help campaigns succeed.
                </p>
                <Link
                  to="/my-campaigns"
                  className="btn bg-primaryColor hover:bg-secondaryColor text-lg mt-auto text-white"
                >
                  Manage Your Camaign
                </Link>
              </div>
            </AttentionSeeker>
          ) : (
            <AttentionSeeker duration={1000} delay={290} shake>
              <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
                <FaHandsHelping className="text-4xl text-primaryColor mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Volunteer Your Time
                </h3>
                <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
                  Join us in person or virtually to help with campaigns. Your
                  time and effort can directly impact the success of a cause.
                </p>
                <Link
                  to="/signup"
                  className="btn bg-primaryColor hover:bg-secondaryColor text-lg mt-auto text-white"
                >
                  Become a Volunteer
                </Link>
              </div>
            </AttentionSeeker>
          )}

          {/* Fundraise for a Cause */}
          <AttentionSeeker duration={1000} delay={330} shake>
            <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
              <FaMoneyBillWave className="text-4xl text-primaryColor mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Fundraise for a Cause
              </h3>
              <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
                Start your own campaign to raise funds for a cause you&apos;re
                passionate about. Together, we can achieve more.
              </p>
              <Link
                to="/add-campaign"
                className="btn bg-primaryColor hover:bg-secondaryColor text-lg mt-auto text-white"
              >
                Start Fundraising
              </Link>
            </div>
          </AttentionSeeker>
        </div>
      </div>
    </section>
  );
};

export default HowYouCanHelp;
