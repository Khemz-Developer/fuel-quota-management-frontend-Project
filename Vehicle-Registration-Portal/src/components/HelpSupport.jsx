import React from "react";

const HelpSupport = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {" "}
      {/* Padding and background */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {" "}
        {/* Card layout */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Help and Support
        </h1>
        <p className="mb-6 text-gray-600">
          Welcome to the Help and Support page. Here you can find answers to
          frequently asked questions, tutorials, and contact information for
          further assistance.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Frequently Asked Questions
        </h2>
        <ul className="list-disc ml-5 mb-6 text-gray-700">
          <li>How do I register my vehicle?</li>
          <li>How can I check my fuel quota?</li>
          <li>What should I do if my fuel quota is low?</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-600">
          If you need further assistance, please reach out to our support team
          at{" "}
          <a
            className="text-blue-500 hover:text-blue-700"
            href="mailto:support@fuelportal.com"
          >
            support@fuelportal.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default HelpSupport;
