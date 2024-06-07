import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container flex flex-wrap gap-8">
        <div>
          <h2 className="text-sm font-semibold mb-4">About</h2>
          <div className="space-y-2 text-xs">
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Flipkart Stories</p>
            <p>Press</p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-4">Group Companies</h2>
          <div className="space-y-2 text-xs">
            <p>Myntra</p>
            <p>Flipkart WholeSale</p>
            <p>Flipkart Marketplace</p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-4">Help</h2>
          <div className="space-y-2 text-xs">
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation & Returns</p>
            <p>FAQ</p>
            <p>Report Infringement</p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-4">Consumer Policy</h2>
          <div className="space-y-2 text-xs">
            <p>Return Policy</p>
            <p>Terms Of Use</p>
            <p>Security</p>
            <p>Privacy</p>
            <p>Sitemap</p>
            <p>EPR Compliance</p>
          </div>
        </div>
        {/* Divider */}
        <div className="col-span-2 lg:col-span-4 border-t border-gray-700 my-8"></div>
        {/* Divider End */}
        <div>
          <h1 className="text-sm font-semibold mb-4">Mail Us:</h1>
          <div className="space-y-2 text-xs">
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
          </div>
        </div>
        <div>
          <h1 className="text-sm font-semibold mb-4">
            Registered Office Address:
          </h1>
          <div className="space-y-2 text-xs">
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
            <p>CIN : U51109KA2012PTC066107</p>
            <p>Telephone: 1800 202 9898</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
