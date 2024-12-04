import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primaryColor dark:bg-slate-700 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content Wrapper */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Company Info */}
          <div className="flex flex-col mb-8 lg:mb-0">
            <h2 className="text-4xl font-semibold text-white">Crowdcube</h2>
            <p className="mt-2 text-lg text-white">
              Empowering communities through collective action. Join us in
              making a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <a href="/about" className="hover:text-secondaryColor">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/campaigns" className="hover:text-secondaryColor">
                    Our Campaigns
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-secondaryColor">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/donate" className="hover:text-secondaryColor">
                    Donate
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <p className="text-white">Email: support@crowdcube.com</p>
              <p className="text-white">Phone: +1 (234) 567-890</p>
              <p className="text-white">
                Address: 123 Charity St, City, Country
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-3xl hover:text-secondaryColor" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl hover:text-secondaryColor" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl hover:text-secondaryColor" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-secondaryColor" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Crowdcube. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
