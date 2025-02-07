/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const DonationAmounts = () => {
  const [totalDonated, setTotalDonated] = useState(0);

  useEffect(() => {
    const getTotal = async () => {
      const res = await fetch(
        "https://crowdcube-server-nu.vercel.app/all-raised-amount"
      );
      const result = await res.json();
      const amount = result.totalDonated;
      setTotalDonated(amount);
    };
    getTotal();
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <Fade duration={1000} delay={200}>
          <h2 className="text-3xl font-semibold text-primaryColor mb-6">
            Total Donations Raised
          </h2>
          <p className="text-lg text-textColor mb-8 dark:text-white">
            Thank you for your incredible generosity! Here's the total raised so
            far to support various causes. Every dollar makes a difference.
          </p>
        </Fade>

        {/* Total Donation Amount */}
        <Fade duration={1000} delay={300}>
          <div className="bg-[#e5f5f8] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-primaryColor mb-4">
              Total Donations Raised Across All Campaigns:
            </h3>
            <p className="text-4xl font-bold text-primaryColor">
              ${totalDonated.toLocaleString()}
            </p>

            <h3 className="text-2xl mt-14 font-semibold text-primaryColor mb-4">
              How Your Contributions Are Making a Difference
            </h3>
            <p className="text-base text-textColor mb-6">
              Your donations are directly supporting impactful projects, from
              providing clean water to the underserved to supporting education
              and healthcare. Together, we're creating a better future.
            </p>
            <p className="text-base text-textColor mb-6">
              Continue to make a positive change by contributing to the cause
              that resonates with you. Your support brings us closer to a better
              world.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex justify-center gap-6">
              <Link
                to="/all-campaigns"
                className="btn text-lg bg-primaryColor hover:bg-secondaryColor text-white"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default DonationAmounts;
