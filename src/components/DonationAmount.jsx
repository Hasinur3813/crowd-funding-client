/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

const DonationAmounts = () => {
  const [totalDonated, setTotalDonated] = useState(0);

  useEffect(() => {
    const getTotal = async () => {
      const res = await fetch("http://localhost:4000/all-raised-amount");
      const result = await res.json();
      const amount = result.totalAmount;
      setTotalDonated(amount);
    };
    getTotal();
  }, []);

  return (
    <section className="py-12 bg-[#f8fafc]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primaryColor mb-6">
          Total Donations Raised
        </h2>
        <p className="text-lg text-textColor mb-8">
          Thank you for your incredible generosity! Here's the total raised so
          far to support various causes. Every dollar makes a difference.
        </p>

        {/* Total Donation Amount */}
        <div className="bg-[#e5f5f8] p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-primaryColor mb-4">
            Total Donations Raised Across All Campaigns:
          </h3>
          <p className="text-4xl font-bold text-primaryColor">
            ${totalDonated.toLocaleString()}
          </p>
        </div>

        {/* Extra Content */}
        <div className="mt-12 bg-[#e5f5f8] p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-primaryColor mb-4">
            How Your Contributions Are Making a Difference
          </h3>
          <p className="text-base text-textColor mb-6">
            Your donations are directly supporting impactful projects, from
            providing clean water to the underserved to supporting education and
            healthcare. Together, we're creating a better future.
          </p>
          <p className="text-base text-textColor mb-6">
            Continue to make a positive change by contributing to the cause that
            resonates with you. Your support brings us closer to a better world.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-6">
            <button className="btn bg-primaryColor hover:bg-secondaryColor text-white">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationAmounts;
